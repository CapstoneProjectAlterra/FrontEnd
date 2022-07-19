import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import ListFamily from "../ListFamily";
import style from "./ProfileKeluarga.module.css";
const ProfileKeluarga = () => {
  const [family, setFamily] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/family", { data: "" })
      .then((response) => {
        setFamily(response.data.data.filter((item) => item.profile.user_id === getUserId() && item.id !== getUserId()));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={style.title}>
        <h1>Anggota Keluarga</h1>
      </div>
      <ListFamily dataFamily={family} />
    </>
  );
};

export default ProfileKeluarga;
