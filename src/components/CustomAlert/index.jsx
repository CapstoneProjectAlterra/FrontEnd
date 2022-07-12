import React from "react";
import style from "./Alert.module.css";
import {Alert, Space} from "antd";
import CustomButton from "../CustomButton";
import {useNavigate} from "react-router-dom";

function Alertt() {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/profile");
  };
  return (
    <>
      <Alert
        message={<h5>Mau daftar vaksin?</h5>}
        description="Yuk, segera lengkapi data profilmu terlebih dahulu"
        type="info"
        action={
          <Space align="baseline" direction="vertical" style={{padding: "10px 0"}}>
            <CustomButton variant="primary" onClick={handleClick}>
              Lengkapi Profilmu
            </CustomButton>
          </Space>
        }
        closable
      />
    </>
  );
}

export default Alertt;
