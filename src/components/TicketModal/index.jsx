import { useState } from "react";
import { CustomButton } from "..";
import { Row, Col, Modal } from "antd";
import styles from "./TicketModal.module.css";
import dateFormat from "../../utils/helpers/dateFormat";
import { useEffect } from "react";
import axiosInstance from "../../networks/apis";
import moment from "moment";
import { TicketCard } from "..";

export default function TicketModal({ data }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/booking/${data.booking_id}`, { data: "" })
      .then((response) => {
        setBooking(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data.booking_id]);

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
      {!loading && (
        <>
          <TicketCard
            data={data}
            vaccine={booking?.schedule?.vaccine}
            facility={booking?.schedule?.facility}
            onClick={showModal}
          />

          <Modal
            title="Detail Tiket"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className={styles.modal}
            footer={[
              <div
                key={data?.booking_id}
                style={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <CustomButton
                  variant="primary"
                  onClick={handleCancel}
                  key="cancel"
                >
                  Selesai
                </CustomButton>
              </div>,
            ]}
          >
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <p className={styles.fieldName}>Nama Lengkap</p>
                <p className={styles.fieldContent}>{data?.family.name}</p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>NIK</p>
                <p className={styles.fieldContent}>{data?.family.nik}</p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>Tanggal Lahir</p>
                <p className={styles.fieldContent}>
                  {data?.family.date_of_birth}
                </p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>Jenis Kelamin</p>
                <p className={styles.fieldContent}>
                  {data?.family.gender === "LAKI_LAKI"
                    ? "Laki-Laki"
                    : "Perempuan"}
                </p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>Nomor Telepon</p>
                <p className={styles.fieldContent}>
                  {data?.family.phone_number}
                </p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>Alamat Rumah</p>
                <p className={styles.fieldContent}>
                  {data?.family.residence_address}
                </p>
              </Col>
              <Col span={12}>
                <p className={styles.fieldName}>Jenis Vaksin</p>
                <p className={styles.fieldContent}>
                  {booking?.schedule?.vaccine.vaccine_name}
                </p>
              </Col>
              <Col span={12}>
                <p className={styles.fieldName}>Dosis ke</p>
                <p className={styles.fieldContent}>
                  {data?.booking.schedule.dose === "DOSIS_1"
                    ? "Dosis 1"
                    : data?.booking.schedule.dose === "DOSIS_2"
                    ? "Dosis 2"
                    : "Booster"}
                </p>
              </Col>
              <Col span={12}>
                <p className={styles.fieldName}>Tanggal Vaksinasi</p>
                <p className={styles.fieldContent}>
                  {dateFormat(
                    data?.booking.schedule.vaccination_date.toString()
                  )}
                </p>
              </Col>
              <Col span={12}>
                <p className={styles.fieldName}>Waktu</p>
                <p className={styles.fieldContent}>
                  {moment(
                    data?.booking.schedule.operational_hour_start,
                    "hh:mm"
                  ).format("HH:mm")}{" "}
                  -{" "}
                  {moment(
                    data?.booking.schedule.operational_hour_end,
                    "hh:mm"
                  ).format("HH:mm")}
                </p>
              </Col>
              <Col span={24}>
                <p className={styles.fieldName}>Lokasi</p>
                <p className={styles.fieldContent}>
                  {booking?.schedule?.facility.facility_name}
                </p>
              </Col>
            </Row>
          </Modal>
        </>
      )}
    </>
  );
}
