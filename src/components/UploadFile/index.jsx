/** React */
import React, { useState } from "react";

/** Ant Design & Ant Design Icons */
import { message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

/** Style */
import style from "./UploadFile.module.css";

const UploadFile = ({ setBaseImage }) => {
  const [nameFile, setNameFile] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          name="file"
          id="file"
          className={style.uploadFile}
          type="file"
          onChange={(e) => {
            if (
              e.target.files[0].type !== "image/jpeg" &&
              e.target.files[0].type !== "image/png"
            ) {
              message.error("Format gambar harus jpg, jpeg atau png.");
            } else if (e.target.files[0].size > 100000) {
              message.error("Size gambar lebih dari 100Kb");
            } else {
              setNameFile(e.target.files[0]);
              uploadImage(e);
            }
          }}
          accept="image/jpeg, image/png"
        />
        <label htmlFor="file">
          <UploadOutlined style={{ marginRight: "8px" }} />
          Pilih Foto
        </label>
        {nameFile.name}
      </div>

      <p
        style={{
          fontSize: "12px",
          marginTop: "10px",
        }}
      >
        *Foto harus berformat jpg, jpeg atau png <br /> *Ukuran file maksimal
        adalah 100kb
      </p>
    </>
  );
};

export default UploadFile;
