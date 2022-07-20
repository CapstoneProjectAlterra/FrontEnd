import { Col, Modal, Row } from "antd";
import React from "react";
import { SuccessIlustration } from "../../assets";
import styles from "./SuccessAlertPassword.module.css";

const SuccessAlertPassword = (props) => {
  return (
    <>
      <Modal {...props} width={320} footer={[]}>
        <Row>
          <Col span={24} className={styles.container}>
            <img src={SuccessIlustration} alt="success illustration" style={{ maxWidth: "152px", margin: "auto" }} />
            <div className={styles.separator}>
              <span className={`h4-sb ${styles.primary}`}>Password Telah Diperbaharui</span>
              <p>Password Anda telah berubah</p>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SuccessAlertPassword;
