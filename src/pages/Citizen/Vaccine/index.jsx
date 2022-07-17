import {Col, Row, Pagination, Spin} from "antd";
import React from "react";
import {banner} from "../../../assets";
import {CustomInput, CustomButton, WarningAlert} from "../../../components";
import {FaHospitalAlt} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import style from "./Vaccine.module.css";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axiosInstance from "../../../networks/apis";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import {isAuthenticatedUser, isProfileNull} from "../../../utils/helpers/Auth";

export default function Vaccine() {
  //Logic Card
  // const idCard = useState()
  // const handleCard = (idx) => {
  //   console.log("Your Card Click ID", idx);
  // };
  const [search, setSearch] = useState("");
  const [dataRS, setDataRS] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileNull, setProfileNull] = useState(false);
  const [alertToggle, setAlertToggle] = useState(false);

  //Integrate API
  useEffect(() => {
    isProfileNull().then((res) => {
      setProfileNull(res);
    });
    axiosInstance.get("/facility", {data: ""}).then((res) => {
      setDataRS(res.data.data);
      setInitialData(res.data.data);
      setLoading(false);
    });
  }, []);

  //Logic Pagination
  const [state, setState] = useState({
    minValue: 0,
    maxValue: 9,
  });

  const handleChange = (value) => {
    if (value <= 1) {
      setState({
        minValue: 0,
        maxValue: 9,
      });
    } else {
      setState({
        minValue: (value - 1) * 9,
        maxValue: value * 9,
      });
    }
  };

  //Logic Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleClickSearch = () => {
    const lowerCaseValue = search.toLowerCase().trim();
    const filteredData = initialData.filter((value) =>
      Object.keys(value).some((key) => value[key].toString().toLowerCase().includes(lowerCaseValue))
    );
    setDataRS(filteredData);
  };

  const handleClickAlert = () => {
    setAlertToggle(true);
  };
  // const data = isProfileNull();
  // console.log(data);

  return (
    <CitizenLayouts auth={isAuthenticatedUser()} padding={false}>
      <div className="container">
        <div className="content">
          <div className={style.banner}>
            <img src={banner} alt="Banner" className={style.imageBanner} />
          </div>
          <div className="layout-padding">
            <h2 className={style.title}>
              Temukan Fasilitas Kesehatan Terdekat
              <br />
              Untuk Vaksinasi Covid - 19
            </h2>
            <div className={style.search}>
              <CustomInput
                placeholder="Search by city, province, postal code..."
                style={{
                  width: "883px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                }}
                onChange={handleSearch}
              />
              <CustomButton
                variant="primary"
                style={{
                  width: "56px",
                  height: "56px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                onClick={handleClickSearch}
              >
                <AiOutlineSearch className={style.iconSearch} />
              </CustomButton>
            </div>
          </div>

          {loading ? (
            <Row className={style.mainCardContainer}>
              <Spin size="large" style={{padding: "56px"}} />
            </Row>
          ) : (
            <>
              <Row
                // justify="space-between"
                className="layout-padding"
                gutter={[48, 48]}
              >
                {dataRS.length > 0 ? (
                  dataRS.slice(state.minValue, state.maxValue).map((item, itemTdx) => {
                    return (
                      <Col
                        key={itemTdx}
                        xs={24}
                        md={12}
                        lg={8}
                        // onClick={handleCard}
                        className={style.cardContainer}
                      >
                        {profileNull ? (
                          <div className={style.card} onClick={handleClickAlert}>
                            <div>
                              <div className={style.cardImage}>
                                <img
                                  src={`data:${item.image.content_type};base64,${item.image.base64}`}
                                  alt="Card"
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
                                  alt="Card"
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
                    <h5 style={{textAlign: "center"}}>
                      Maaf, kami tidak dapat menemukan hasil untuk pencarian Anda
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
            </>
          )}
        </div>
        <WarningAlert type="reminder" visible={alertToggle} setVisible={setAlertToggle} />
      </div>
    </CitizenLayouts>
  );
}
