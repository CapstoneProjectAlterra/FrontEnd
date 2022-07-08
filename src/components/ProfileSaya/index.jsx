import { Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";

import style from "./ProfileSaya.module.css";

const ProfileSaya = () => {
  const [data, setData] = useState({
    nama: "Xavier Davis Chaniago",
    nik: "1234567890987654321",
    tempatLahir: "1234567890987654321",
    tanggalLahir: "09 September 2022",
    jenisKelamin: "Laki - Laki",
    status: "Anak Tengah",
    email: "Xavierblabla@gmail.com",
    noHp: "089898989898",
    alamatKtp: "Perumahan Griya Permai, Blok B1 No.1, Jl. Diponegoro, Bandung.",
    alamatSekarang: "Perumahan Griya Permai, Blok B1 No.1, Jl. Diponegoro, Bandung.",
  });

  const navigate = useNavigate();

  const handleEdit = (id, callbackData) => {
    console.log(id);
    console.log("sent state : ", callbackData);
    navigate(`../editprofile/${id}`, { state: { data } });
  };
  return (
    <>
      <div className={style.title}>
        <h1>Profile Saya</h1>
      </div>
      <div className={style.label}>
        <p>Nama</p>
        <h3>{data.nama}</h3>
      </div>
      <div className={style.label}>
        <p>NIK</p>
        <h3>{data.nik}</h3>
      </div>
      <Row justify="space-between">
        <Col>
          <div className={style.label}>
            <p>Tempat Lahir</p>
            <h3>{data.tempatLahir}</h3>
          </div>
        </Col>
        <Col>
          <div className={style.label}>
            <p>Tanggal Lahir</p>
            <h3>{data.tanggalLahir}</h3>
          </div>
        </Col>
      </Row>
      <div className={style.label}>
        <p>Jenis Kelamin</p>
        <h3>{data.jenisKelamin}</h3>
      </div>
      <div className={style.label}>
        <p>Status dalam Keluarga</p>
        <h3>{data.status}</h3>
      </div>
      <div className={style.label}>
        <p>Email</p>
        <h3>{data.email}</h3>
      </div>
      <div className={style.label}>
        <p>No.HP</p>
        <h3>{data.noHp}</h3>
      </div>
      <div className={style.label}>
        <p>Alamat Rumah di KTP</p>
        <h3>{data.alamatKtp}</h3>
      </div>
      <div className={style.label}>
        <p>Alamat Rumah Saat ini</p>
        <h3>{data.alamatSekarang}</h3>
      </div>
      <Row className={style.btnEdit}>
        <Col span={24}>
          <CustomButton variant="primary" block="true" onClick={() => handleEdit(1, data)}>
            Edit Profile
          </CustomButton>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSaya;
