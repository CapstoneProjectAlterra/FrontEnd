import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SuccessAlert from "../SuccessAlert";
import { Navigate, useNavigate, Link } from "react-router-dom";
import WarningAlert from "../WarningAlert";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { message } from "antd";

export default function SubmitFormButton({ submit, error }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  // munculin modal
  const showModal = () => {
    if (error.schedule === true && error.families === true) {
      message.warning(
        "Silahkan pilih jadwal dan anggota keluarga yang akan daftar"
      );
    } else {
      setIsModalVisible(true);
    }
    // isConfirm ? <WarningAlert /> : <SuccessAlert />;
    // console.log("Pesan Tiket");
  };

  return (
    <>
      <CustomButton
        variant="primary"
        type="submit"
        style={{ height: "56px" }}
        onClick={showModal}
      >
        Pesan Vaksinasi
      </CustomButton>
      <WarningAlert
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        submitForm={submit}
        type="confirm"
      />
    </>
  );
}
