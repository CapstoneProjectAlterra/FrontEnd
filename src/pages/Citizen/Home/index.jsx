import React, { useState, useEffect } from "react";
import { Row, Col, Spin, Pagination } from "antd";
import { LandingPage } from "../../../assets";
import style from "./Home.module.css";
import { CustomButton, CustomInput, WarningAlert } from "../../../components";
import { UserOutlined } from "@ant-design/icons";
import dateFormat from "../../../utils/helpers/dateFormat";
import { Link, useNavigate } from "react-router-dom";
import { CustomAlert } from "../../../components";
import {
  isAuthenticatedUser,
  isProfileNull,
} from "../../../utils/helpers/Auth";
import axiosInstance from "../../../networks/apis";
import { FaHospitalAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import CitizenLayout from "../../../layouts/CitizenLayout";

const alur = [
  {
    key: "1",
    title: "Registrasi",
    content: "Daftarkan diri anda di aplikasi GetVaccine menggunakan NIK",
    img: "assets/illustration/instruksi-1.png",
  },
  {
    key: "2",
    title: "Login",
    content: "Masuk ke dalam aplikasi menggunakan akun yang telah didaftarkan",
    img: "assets/illustration/instruksi-2.png",
  },
  {
    key: "3",
    title: "Pilih Fasilitas Kesehatan",
    content: "Anda dapat memiilih faskes yang terdekat dengan anda",
    img: "assets/illustration/instruksi-3.png",
  },
  {
    key: "4",
    title: "Pilih Sesi Vaksinasi",
    content: "Tentukan jadwal vaksinasi sesuai dengan waktu luang anda",
    img: "assets/illustration/instruksi-4.png",
  },
  {
    key: "5",
    title: "Tambah Anggota Keluarga",
    content: "Anda juga dapat mendaftarkan anggota keluarga untuk vaksinasi",
    img: "assets/illustration/instruksi-5.png",
  },
  {
    key: "6",
    title: "Pesan Sesi Vaksinasi",
    content:
      "Anda dapat langsung memesan jadwal vaksinasi pada faskes yang telah dipilih",
    img: "assets/illustration/instruksi-6.png",
  },
  {
    key: "7",
    title: "Mendapatkan Tiket Vaksin",
    content: "Anda mendapatkan tiket sebagai bukti pemesanan vaksinasi",
    img: "assets/illustration/instruksi-7.png",
  },
  {
    key: "8",
    title: "Tunjukkan Tiket Anda",
    content:
      "Tunjukkan tiket tersebut ke petugas di fasilitas kesehatan yang Anda pilih untuk diproses lebih lanjut",
    img: "assets/illustration/instruksi-8.png",
  },
];

const faskes = [
  {
    key: "1",
    img: "assets/illustration/faskes-1.png",
  },
  {
    key: "2",
    img: "assets/illustration/faskes-2.png",
  },
  {
    key: "3",
    img: "assets/illustration/faskes-3.png",
  },
  {
    key: "4",
    img: "assets/illustration/faskes-4.png",
  },
  {
    key: "5",
    img: "assets/illustration/faskes-5.png",
  },
  {
    key: "6",
    img: "assets/illustration/faskes-6.png",
  },
  {
    key: "7",
    img: "assets/illustration/faskes-7.png",
  },
  {
    key: "8",
    img: "assets/illustration/faskes-8.png",
  },
  {
    key: "9",
    img: "assets/illustration/faskes-9.png",
  },
  {
    key: "10",
    img: "assets/illustration/faskes-10.png",
  },
  {
    key: "11",
    img: "assets/illustration/faskes-11.png",
  },
  {
    key: "12",
    img: "assets/illustration/faskes-12.png",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    minValue: 0,
    maxValue: 3,
  });

  const handleChange = (value) => {
    if (value <= 1) {
      setState({
        minValue: 0,
        maxValue: 3,
      });
    } else {
      setState({
        minValue: (value - 1) * 3,
        maxValue: value * 3,
      });
    }
  };

  const [news, setNews] = useState([]);
  const [alertToggle, setAlertToggle] = useState(false);
  const [profileNull, setProfileNull] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);

  const [search, setSearch] = useState("");
  const [dataRS, setDataRS] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/facility", { data: "" }).then((res) => {
      setDataRS(res.data.data);
      setInitialData(res.data.data);
      setLoading(false);
    });
  }, []);

  const handleClickSearch = () => {
    const lowerCaseValue = search.toLowerCase().trim();
    const filteredData = initialData.filter((value) =>
      Object.keys(value).some((key) =>
        value[key].toString().toLowerCase().includes(lowerCaseValue)
      )
    );
    setDataRS(filteredData);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleClickAlert = () => {
    setWarningAlert(true);
  };

  useEffect(() => {
    const loadNews = async () => {
      const response = await axiosInstance
        .get("/news", { data: "" })
        .then((res) => res.data);
      setNews(response.data);
    };
    loadNews();

    if (isAuthenticatedUser()) {
      isProfileNull().then((res) => {
        setAlertToggle(res);
        setProfileNull(res);
      });
    }
  }, []);

  let sorted1 = news.sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );
  let sorted2 = news.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  let sorted3 = news.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <CitizenLayout auth={isAuthenticatedUser()} padding={false}>
        {isAuthenticatedUser() && alertToggle && <CustomAlert />}
        <Row justify='center' style={{ paddingTop: "40px" }}>
          <Col className={style.colflex} lg={{ span: 10 }} xs={{ span: 20 }}>
            <h1 className={style.textdaftar} style={{ marginBottom: "0px" }}>
              Alternatif
            </h1>
            <br />
            <h1
              className={style.textdaftar}
              style={{ color: "var(--color-primary)", marginBottom: "0px" }}>
              Pesan Vaksinasi
            </h1>
            <p className='body1'>
              Dapat dilakukan di mana pun dan kapan pun dengan mudah
            </p>
            {isAuthenticatedUser() === true ? (
              <CustomButton variant='primary'>
                <Link to='/vaccine'>Daftar Vaksinasi</Link>
              </CustomButton>
            ) : (
              <CustomButton variant='primary'>
                <Link to='/login'>Daftar Vaksinasi</Link>
              </CustomButton>
            )}
          </Col>
          <Col lg={{ span: 10 }} xs={{ span: 20 }} justify='end'>
            <img src={LandingPage} alt='landingpage' className={style.img} />
          </Col>
        </Row>

        {isAuthenticatedUser() && (
          <>
            <div className='layout-padding'>
              <h2 className={style.title}>
                Temukan Fasilitas Kesehatan Terdekat
                <br />
                Untuk Vaksinasi Covid - 19
              </h2>
              <div className={style.search}>
                <CustomInput
                  placeholder='Search by city, province, postal code...'
                  style={{
                    width: "883px",
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                  onChange={handleSearch}
                />
                <CustomButton
                  variant='primary'
                  style={{
                    width: "56px",
                    height: "56px",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                  }}
                  onClick={handleClickSearch}>
                  <AiOutlineSearch className={style.iconSearch} />
                </CustomButton>
              </div>
            </div>

            {loading ? (
              <Row className={style.mainCardContainer}>
                <Spin size='large' style={{ padding: "56px" }} />
              </Row>
            ) : (
              <>
                <Row
                  // justify="space-between"
                  className='layout-padding'
                  gutter={[48, 48]}>
                  {dataRS.length > 0 ? (
                    dataRS
                      .slice(state.minValue, state.maxValue)
                      .map((item, itemTdx) => {
                        return (
                          <Col
                            key={itemTdx}
                            xs={24}
                            md={12}
                            lg={8}
                            // onClick={handleCard}
                            className={style.cardContainer}>
                            {profileNull ? (
                              <div
                                className={style.card}
                                onClick={handleClickAlert}>
                                <div>
                                  <div className={style.cardImage}>
                                    <img
                                      src={`data:${item.image.content_type};base64,${item.image.base64}`}
                                      alt='Card'
                                      className={style.cardImage}
                                    />
                                  </div>
                                  <div className={style.cardDetails}>
                                    <span className={style.titleCard}>
                                      <FaHospitalAlt className={style.icon} />
                                      <h4>{item.facility_name}</h4>
                                    </span>
                                    <div>
                                      <ul className={style.cardInform}>
                                        <li>{item.province}</li>
                                        <li>{item.city}</li>
                                        <li>{item.postal_code}</li>
                                      </ul>
                                    </div>
                                    {/* <span className={style.descriptionCard}>
                            <IoDocumentTextOutline className={style.icon} />
                            <p style={{ paddingTop: "5px" }}>{item.kuota}</p>
                          </span> */}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={style.card}>
                                <Link to={"/vaccineDetails/" + item.id}>
                                  <div className={style.cardImage}>
                                    <img
                                      src={`data:${item.image.content_type};base64,${item.image.base64}`}
                                      alt='Card'
                                      className={style.cardImage}
                                    />
                                  </div>
                                  <div className={style.cardDetails}>
                                    <span className={style.titleCard}>
                                      <FaHospitalAlt className={style.icon} />
                                      <h4>{item.facility_name}</h4>
                                    </span>
                                    <div>
                                      <ul className={style.cardInform}>
                                        <li>
                                          <p>{item.province}</p>
                                        </li>
                                        <li>
                                          <p>{item.city}</p>
                                        </li>
                                        <li>
                                          <p>{item.postal_code}</p>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* <span className={style.descriptionCard}>
                            <IoDocumentTextOutline className={style.icon} />
                            <p style={{ paddingTop: "5px" }}>{item.kuota}</p>
                          </span> */}
                                  </div>
                                </Link>
                              </div>
                            )}
                          </Col>
                        );
                      })
                  ) : (
                    <Col span={24}>
                      <h5 style={{ textAlign: "center" }}>
                        Maaf, kami tidak dapat menemukan hasil untuk pencarian
                        Anda
                      </h5>
                    </Col>
                  )}
                </Row>
                <div className={style.pagination}>
                  <Pagination
                    defaultCurrent={1}
                    defaultPageSize={9}
                    onChange={handleChange}
                    total={dataRS.length}
                  />
                </div>
                <WarningAlert
                  type='reminder'
                  visible={alertToggle}
                  setVisible={setAlertToggle}
                />
              </>
            )}
          </>
        )}

        <h2 className={style.textjudul}>Alur Pendaftaran</h2>
        <Row justify='space-evenly' gutter={[0, 48]}>
          {alur.map((item) => {
            return (
              <Col
                lg={{ span: 5 }}
                xs={{ span: 10 }}
                key={item.key}
                className={style.col}>
                <Col>
                  <img
                    src={require(`../../../${item.img}`)}
                    alt='instruksi'
                    className={style.img}
                  />
                  <h4 style={{ marginTop: "16px" }}>{item.title}</h4>
                  <p className='body2'>{item.content}</p>
                </Col>
              </Col>
            );
          })}
        </Row>
        <Row className={style.hospital} justify='center'>
          <Col span={24} justify='center'>
            <h2
              className={style.heading}
              style={{ marginTop: "32px", marginBottom: "64px" }}>
              Kami telah bekerja sama dengan 100 Fasilitas Kesehatan untuk
              pemesanan vaksin
            </h2>
          </Col>
          <Row
            justify='space-evenly'
            gutter={[0, 44]}
            style={{
              gap: "32px",
              marginBottom: "32px",
            }}>
            {faskes.map((item) => {
              return (
                <Col lg={{ span: 3 }} xs={{ span: 4 }} key={item.key}>
                  <Col>
                    <img
                      src={require(`../../../${item.img}`)}
                      alt='fasilitas kesehatan'
                      className={style.img}
                    />
                  </Col>
                </Col>
              );
            })}
          </Row>
        </Row>
        <Row
          span={22}
          justify='space-between'
          className={style.newsContainer}
          align='middle'>
          <span className={style.heading}>Berita Terbaru</span>
          <Link to='/news' style={{ color: "var(--color-primary)" }}>
            Lebih Banyak &gt;
          </Link>
        </Row>
        <Row
          justify='center'
          gutter={[0, 24]}
          style={{ gap: "77px", paddingBottom: "88px" }}>
          {news.length > 0 &&
            news.slice(state.minValue, state.maxValue).map((item, itemTdx) => {
              return (
                <Col
                  lg={{ span: 5 }}
                  md={{ span: 10 }}
                  xs={{ span: 16 }}
                  key={itemTdx}
                  className={style.col}>
                  <a href={item.url} target='_blank'>
                    <Col>
                      <img
                        src={item.urlToImage}
                        alt='berita'
                        className={style.imgberita}
                      />
                      <p className={style.body3} style={{ marginTop: "8px" }}>
                        {dateFormat(item.publishedAt, "date-month-year")}
                      </p>
                      <h4 style={{ marginBottom: "16px" }}>{item.title}</h4>
                      <p
                        className={style.body2}
                        style={{ textAlign: "justify" }}>
                        {item.description.slice(0, 90) +
                          (item.description.length > 90 ? " . . ." : "")}
                      </p>
                      <p className={style.body3} style={{ marginBottom: "0" }}>
                        <UserOutlined className={style.icon} /> {item.author}
                      </p>
                    </Col>
                  </a>
                </Col>
              );
            })}
        </Row>
        <WarningAlert
          type='reminder'
          visible={warningAlert}
          setVisible={setWarningAlert}
        />
      </CitizenLayout>
    </>
  );
}
