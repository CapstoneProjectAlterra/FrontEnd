import { Col, Row, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import CustomButton from "../CustomButton";

import style from "./ProfileSaya.module.css";

const ProfileSaya = () => {
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/family/${getUserId()}`, { data: "" })
      .then((response) => {
        setDataUser(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleEdit = (id, callbackData) => {
    navigate(`../editprofile/${id}`, { state: { dataUser } });
  };
  return (
    <>
      {loading ? (
        <Row align="middle" justify="center">
          <Spin />
        </Row>
      ) : (
        <Row>
          <Col>
            <div className={style.title}>
              <h1>Profile Saya</h1>
            </div>
            <div className={style.label}>
              <p>Nama</p>
              <h3>{dataUser.name}</h3>
            </div>
            <div className={style.label}>
              <p>NIK</p>
              <h3>{dataUser.nik}</h3>
            </div>
            <Row justify="space-between">
              <Col>
                <div className={style.label}>
                  <p>Tempat Lahir</p>
                  <h3>{dataUser.place_of_birth}</h3>
                </div>
              </Col>
              <Col>
                <div className={style.label}>
                  <p>Tanggal Lahir</p>
                  <h3>{dataUser.date_of_birth}</h3>
                </div>
              </Col>
            </Row>
            <div className={style.label}>
              <p>Jenis Kelamin</p>
              <h3>{dataUser.gender === "LAKI_LAKI" ? "LAKI-LAKI" : "PEREMPUAN"}</h3>
            </div>
            <div className={style.label}>
              <p>Status dalam Keluarga</p>
              <h3>{dataUser.status_in_family}</h3>
            </div>
            <div className={style.label}>
              <p>Email</p>
              <h3>{dataUser.email}</h3>
            </div>
            <div className={style.label}>
              <p>No.HP</p>
              <h3>{dataUser.phone_number}</h3>
            </div>
            <div className={style.label}>
              <p>Alamat Rumah di KTP</p>
              <h3>{dataUser.id_card_address}</h3>
            </div>
            <div className={style.label}>
              <p>Alamat Rumah Saat ini</p>
              <h3>{dataUser.residence_address}</h3>
            </div>
            <Row className={style.btnEdit}>
              <Col span={24}>
                <CustomButton variant="primary" block="true" onClick={() => handleEdit(dataUser.id, dataUser)}>
                  Edit Profile
                </CustomButton>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProfileSaya;
