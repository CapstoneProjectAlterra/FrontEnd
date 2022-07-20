import React from "react";
import { useState } from "react";

const UploadFile = ({ setBaseImage }) => {
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
  };
  // data:image/jpeg;base64, 24
  // data:image/png;base64,

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
      <input
        type="file"
        onChange={(e) => {
          console.log(e.target.files[0]);
          uploadImage(e);
        }}
      />
    </>
  );
};

export default UploadFile;
