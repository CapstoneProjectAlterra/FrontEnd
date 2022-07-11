import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { LandingPage } from "../../../assets";
import style from "./Home.module.css";
import CustomButton from "../../../components/CustomButton";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import dateFormat from "../../../utils/helpers/dateFormat";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CustomAlert } from "../../../components";
import { isAuthenticatedUser } from "../../../utils/helpers/Auth";
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
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/login");
  };

  const [state, setState] = useState({
    minValue: 0,
    maxValue: 3,
  });
  const [auth, setAuth] = useState(false);
  const handleChange = (value) => {
    if (value <= 1) {
      setState({
        minValue: 0,
        maxValue: 3,
      });
    }
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=covid&language=id&apiKey=23b92eb137c74f6eab5f15055aa1de69"
      );
      setNews(response.data.articles);
    };
    loadNews();

    if (Cookies.get("token")) {
      setAuth(true);
    } else {
      setAuth(false);
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
        {auth && <CustomAlert />}
        <Row justify='center' style={{ paddingTop: "40px" }}>
          <Col className={style.colflex} lg={{ span: 10 }} xs={{ span: 20 }}>
            <h1 className={style.textdaftar} style={{ marginBottom: "0px" }}>
              Alternatif
            </h1>
            <h1
              className={style.textdaftar}
              style={{ color: "var(--color-primary)", marginBottom: "0px" }}>
              Pesan Vaksinasi
            </h1>
            <p className='body1'>
              Dapat dilakukan di mana pun dan kapan pun dengan mudah
            </p>
            {auth === true ? (
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

        <Row
          style={{ background: "var(--color-secondary", marginTop: "88px" }}
          justify='center'>
          <Col span={24} justify='center'>
            <h2
              className={style.textkerjasama}
              style={{ marginTop: "32px", marginBottom: "0px" }}>
              Kami telah bekerja sama dengan 100 Fasilitas
            </h2>
            <h2
              className={style.textkerjasama}
              style={{ marginBottom: "64px" }}>
              Kesehatan untuk pemesanan vaksin
            </h2>
          </Col>
          <Row
            justify='space-evenly'
            gutter={[0, 44]}
            style={{
              gap: "32px",
              marginLeft: "48px",
              marginRight: "48px",
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
          style={{
            alignItems: "center",
            paddingLeft: "160px",
            paddingRight: "160px",
            marginTop: "88px",
          }}>
          <h2>Berita Terbaru</h2>
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
      </CitizenLayout>
    </>
  );
}
