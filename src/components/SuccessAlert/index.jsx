import React, {useState} from "react";
import {Button, Modal, Row, Col} from "antd";
import {SuccessIlustration} from "../../assets";
import styles from "./successalert.module.css";
import CustomButton from "../CustomButton";

export default function SuccessAlert(props) {
  return (
    <>
      <Modal {...props} width={320} footer={[]}>
        <Row>
          <Col span={24} className={styles.container}>
            <img
              src={SuccessIlustration}
              alt="success illustration"
              style={{maxWidth: "152px", margin: "auto"}}
            />
            <div className={styles.separator}>
              <span className={`h4-sb ${styles.primary}`}>Pemesanan Sukses!</span>
              <p>Tiket vaksinmu sudah dapat dilihat di halaman tiket.</p>
            </div>
            <CustomButton variant="primary" onClick={props.onOk}>
              Lihat Tiket
            </CustomButton>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
