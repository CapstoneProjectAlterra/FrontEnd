import { Col, Row } from "antd";
import React from "react";
import CustomButton from "../../../components/CustomButton";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <Row>
        <Col span={16} offset={4}>
          <Row className={style.title}>
            <Col>
              <h1>Profile Saya</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={style.label}>
                <p>Nama</p>
                <h3>Xavier Davis Chaniago</h3>
              </div>
              <div className={style.label}>
                <p>NIK</p>
                <h3>1234567890987654321</h3>
              </div>
              <Row>
                <Col span={12}>
                  <div className={style.label}>
                    <p>Tempat Lahir</p>
                    <h3>Bandung</h3>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={style.label}>
                    <p>Tanggal Lahir</p>
                    <h3>09 September 2022</h3>
                  </div>
                </Col>
              </Row>
              <div className={style.label}>
                <p>Jenis Kelamin</p>
                <h3>Laki - Laki</h3>
              </div>
              <div className={style.label}>
                <p>Status dalam Keluarga</p>
                <h3>Anak Tengah</h3>
              </div>
              <div className={style.label}>
                <p>Email</p>
                <h3>Xavierblabla@gmail.com</h3>
              </div>
              <div className={style.label}>
                <p>No.HP</p>
                <h3>089898989898</h3>
              </div>
              <div className={style.label}>
                <p>Alamat Rumah di KTP</p>
                <h3>Perumahan Griya Permai, Blok B1 No.1, Jl. Diponegoro, Bandung.</h3>
              </div>
              <div className={style.label}>
                <p>Alamat Rumah Saat ini</p>
                <h3>Perumahan Griya Permai, Blok B1 No.1, Jl. Diponegoro, Bandung.</h3>
              </div>
              <Row className={style.btnEdit}>
                <Col span={24}>
                  <CustomButton variant="primary" width="100%">
                    Edit Profile
                  </CustomButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
