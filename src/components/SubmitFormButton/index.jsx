import React, {useState} from "react";
import CustomButton from "../CustomButton";
import SuccessAlert from "../SuccessAlert";
import {Navigate, useNavigate} from "react-router-dom";

export default function SubmitFormButton(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  // munculin modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  //   navigate ke ticket kalo buttonnya diklik
  const handleOk = () => {
    navigate("/ticket");
  };

  return (
    <>
      <CustomButton
        variant="primary"
        type="submit"
        style={{height: "56px"}}
        htmlType="submit"
        onClick={showModal}
      >
        Pesan Vaksinasi
      </CustomButton>
      <SuccessAlert visible={isModalVisible} onOk={handleOk} />
    </>
  );
}
