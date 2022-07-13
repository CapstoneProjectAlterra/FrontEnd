import React from "react";
import ListFamily from "../ListFamily";
import style from "./ProfileKeluarga.module.css";
const ProfileKeluarga = () => {
  return (
    <>
      <div className={style.title}>
        <h1>Anggota Keluarga</h1>
      </div>
      <ListFamily />
    </>
  );
};

export default ProfileKeluarga;
