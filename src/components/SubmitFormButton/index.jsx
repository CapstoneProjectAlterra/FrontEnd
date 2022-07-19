import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SuccessAlert from "../SuccessAlert";
import { Navigate, useNavigate, Link } from "react-router-dom";
import WarningAlert from "../WarningAlert";
import { message } from "antd";

export default function SubmitFormButton({
  submit,
  error,
  checkFamilyAvailability,
}) {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // munculin modal
  const showModal = () => {
    const unavailableFamilyMember = checkFamilyAvailability();

    if (error.schedule === true && error.families === true) {
      message.warning(
        "Silahkan pilih jadwal dan anggota keluarga yang akan daftar"
      );
    } else if (unavailableFamilyMember.length > 0) {
      unavailableFamilyMember.forEach((family) => {
        message.error(
          `Anggota keluarga "${family}" sudah terdaftar di jadwal ini`
        );
      });
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
