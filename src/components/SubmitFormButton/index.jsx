import React, {useState} from "react";
import CustomButton from "../CustomButton";
import SuccessAlert from "../SuccessAlert";
import {Navigate, useNavigate} from "react-router-dom";

export default function SubmitFormButton(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    navigate("/ticket");
  };

  return (
    <>
      <CustomButton variant="primary" block style={{marginTop: "24px"}} onClick={showModal}>
        {props.children}
      </CustomButton>
      <SuccessAlert visible={isModalVisible} onOk={handleOk} />
    </>
  );
}
