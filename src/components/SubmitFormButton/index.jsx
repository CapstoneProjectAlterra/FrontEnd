import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SuccessAlert from "../SuccessAlert";
import { Navigate, useNavigate, Link } from "react-router-dom";
import WarningAlert from "../WarningAlert";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function SubmitFormButton({ submit }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  // munculin modal
  const showModal = () => {
    setIsModalVisible(true);
    console.log(isModalVisible);
    // isConfirm ? <WarningAlert /> : <SuccessAlert />;
    // console.log("Pesan Tiket");
  };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  //   navigate ke ticket kalo buttonnya diklik
  // const handleOk = () => {
  //   // navigate("/ticket");
  // };

  return (
    <>
      <CustomButton
        variant="primary"
        type="submit"
        style={{ height: "56px" }}
        htmlType="submit"
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
      {/* <SuccessAlert
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      /> */}
    </>
  );
}
