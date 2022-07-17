import React, { useState } from "react";
import { Button, Modal, Row, Col } from "antd";
import styles from "./warningalert.module.css";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import { WarningIcon } from "../../assets";
import SuccessAlert from "../SuccessAlert";

export default function WarningAlert({
  type,
  visible,
  setVisible,
  submitForm,
}) {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const typeMode = [
    // ini data buat yang type reminder
    {
      id: 1,
      title: "Duh, data dirimu masih belum lengkap!",
      desc: "Yuk, lengkapi data profilmu terlebih dahulu sebelum kembali melanjutkan pemesanan.",
      cta: "Lengkapi profil",
    },
    // ini data yang type confirm
    {
      id: 2,
      title: "Apakah kamu ingin melanjutkan pemesanan?",
      desc: "Jangan lupa pastikan pesananmu telah sesuai sebelum melanjutkan.",
      cta: "Lanjutkan",
    },
  ];

  const data = type === "reminder" ? typeMode[0] : typeMode[1];

  // munculin modal
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  //   navigate ke ticket kalo buttonnya diklik
  const handleOk = (e) => {
    e.preventDefault();
    console.log("type", type);
    if (type === "reminder") {
      navigate("/profile");
    } else if (type === "confirm") {
      setVisible(false);
      submitForm();
      setIsConfirmed(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      {/* <CustomButton
        variant="primary"
        type="submit"
        style={{ height: "56px" }}
        htmlType="submit"
        onClick={showModal}
      >
        test
      </CustomButton> */}
      <Modal
        dataConfirm={data}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button
            className={styles.secondary}
            onClick={handleCancel}
            key="cancel"
          >
            Batal
          </Button>,
          <Button
            className={styles.primary}
            onClick={handleOk}
            // htmlType="submit"
            key="ok"
          >
            {data.cta}
          </Button>,
        ]}
      >
        <Row>
          <Col span={24} className={styles.container}>
            <img src={WarningIcon} alt="warning" style={{ width: "48px" }} />
            <div className={styles.separator}>
              <span className={`h4-sb`}>{data.title}</span>
              <p>{data.desc}</p>
            </div>
          </Col>
        </Row>
      </Modal>
      <SuccessAlert
        visible={isConfirmed}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}
