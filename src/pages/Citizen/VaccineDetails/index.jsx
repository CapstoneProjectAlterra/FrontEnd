import React, { useEffect, useState } from "react";
import { Row, Col, DatePicker } from "antd";
import moment from "moment";
import { imgCard } from "../../../assets";
import { HiLocationMarker } from "react-icons/hi";
import style from "./VaccineDetails.module.css";
import { CardBooking, ListFamily } from "../../../components";

export default function VaccineDetails() {
  // change background color only on this page with useEffect
  useEffect(() => {
    document.body.style.backgroundColor = "#f5fdfe";
  }, []);

  //data dummy
  const data = {
    src: imgCard,
    title: "Rumah Sakit Umum Majalaya",
  };

  //Logic DatePicker
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <Row justify="center">
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
                    <Col span={24} className="gutter-row">
                      <CardBooking />
                    </Col>
                  </Row>
                </div>
                <div className={style.family}>
                  <h4>Daftar Anggota Keluarga</h4>
                  <div className={style.rowFamily}>
                    <ListFamily />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
