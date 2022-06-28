import React, { useEffect, useState } from "react";
import { Row, Col, DatePicker, Breadcrumb } from "antd";
import moment from "moment";
import { imgCard } from "../../../assets";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import style from "./VaccineDetails.module.css";
import { CardBooking, CustomButton, ListFamily } from "../../../components";
import { useParams } from "react-router-dom";

export default function VaccineDetails() {
  // change background color only on this page with useEffect
  useEffect(() => {
    document.body.style.backgroundColor = "#f5fdfe";
  }, []);

  const [session, setSession] = useState();
  const [listFams, setListFams] = useState({});
  const [booking, setBooking] = useState();

  //sessionDetail
  let { HospitalId } = useParams();

  //data dummy
  const data = {
    src: imgCard,
    title: "Rumah Sakit Umum Majalaya",
  };

  //Logic DatePicker
  const onChange = (date, dateString) => {
    // setSession({reserveDate: date, });
    console.log("value", date, "date string", dateString);
  };

  //logic handleClick
  const handleClickFams = () => {
    // console.log(session);
    console.log(listFams);
  };

  return (
    <div>
      <Row justify="center">
        <Row justify="start">
          <Col>
            <Breadcrumb style={{ marginTop: "48px", marginLeft: "48px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Vaksinasi</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Fasilitas Kesehatan</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <h5 style={{ color: "#06919d" }}>Rumah Sakit Majalaya</h5>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Col span={20} className={style.body}>
          <Row justify="space-between" style={{ margin: "40px 20px" }}>
            <Col span={7}>
              <img src={imgCard} alt="Image" className={style.image} />
            </Col>
            <Col span={16}>
              <div className={style.detail}>
                <h2>Rumah Sakit Umum Majalaya</h2>
                <span className={style.location}>
                  <HiLocationMarker className={style.icon} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </span>
              </div>
              <div>
                <div>
                  <DatePicker
                    className="input"
                    defaultValue={moment()}
                    format="DD-MM-YYYY"
                    style={{ width: "638px" }}
                    onChange={onChange}
                  />
                </div>
                <div className={style.cardVaccine}>
                  <Row gutter={[52, 30]}>
                    <Col span={23} className="gutter-row">
                      <CardBooking book={booking} setBook={setBooking} />
                      <div className={style.family}>
                        <h4>Daftar Anggota Keluarga</h4>
                        <div>
                          <ListFamily
                            list={listFams}
                            setListFams={setListFams}
                          />
                        </div>
                      </div>
                      <div style={{ marginTop: "32px" }}>
                        <CustomButton variant="secondary" block>
                          <AiOutlineUserAdd
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600px",
                            }}
                          >
                            Tambah Anggota Keluarga
                          </span>
                        </CustomButton>
                        <CustomButton
                          variant="primary"
                          block
                          style={{ marginTop: "24px" }}
                          onClick={handleClickFams}
                        >
                          Pesan Vaksinasi
                        </CustomButton>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
