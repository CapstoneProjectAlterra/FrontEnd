import { useState } from "react";
import { CustomButton, TicketCard } from "..";
import { Row, Col, Modal } from "antd";
import styles from "./TicketModal.module.css";
import dateFormat from "../../utils/helpers/dateFormat";

export default function TicketModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TicketCard data={data} onClick={showModal} />

      <Modal
        title="Detail Tiket"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        footer={[
          <div
            key={data.id}
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <CustomButton variant="primary" onClick={handleCancel} key="cancel">
              Selesai
            </CustomButton>
          </div>,
        ]}
      >
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <p className={styles.fieldName}>Nama Lengkap</p>
            <p className={styles.fieldContent}>{data.full_name}</p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>NIK</p>
            <p className={styles.fieldContent}>{data.nik}</p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>Tanggal Lahir</p>
            <p className={styles.fieldContent}>
              {dateFormat(data.date_of_birth, "date-month-year")}
            </p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>Jenis Kelamin</p>
            <p className={styles.fieldContent}>{data.gender}</p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>Nomor Telepon</p>
            <p className={styles.fieldContent}>{data.phone_number}</p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>Alamat Rumah</p>
            <p className={styles.fieldContent}>{data.residence_address}</p>
          </Col>
          <Col span={12}>
            <p className={styles.fieldName}>Jenis Vaksin</p>
            <p className={styles.fieldContent}>{data.vaccine_name}</p>
          </Col>
          <Col span={12}>
            <p className={styles.fieldName}>Dosis ke</p>
            <p className={styles.fieldContent}>{data.dose}</p>
          </Col>
          <Col span={12}>
            <p className={styles.fieldName}>Tanggal Vaksinasi</p>
            <p className={styles.fieldContent}>
              {dateFormat(data.vaccination_date)}
            </p>
          </Col>
          <Col span={12}>
            <p className={styles.fieldName}>Waktu</p>
            <p className={styles.fieldContent}>
              {data.operational_hour_start} - {data.operational_hour_end}
            </p>
          </Col>
          <Col span={24}>
            <p className={styles.fieldName}>Lokasi</p>
            <p className={styles.fieldContent}>{data.facility_name}</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
