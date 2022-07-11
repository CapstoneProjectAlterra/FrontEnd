import { Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import SessionDetailTable from "../../../components/SessionDetailTable";
import styles from "./AdminSessionDetail.module.css";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout";
import axiosInstance from "../../../networks/apis";

import moment from "moment";

export default function AdminSessionDetail() {
  let { sessionId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/schedule/${sessionId}`, { data: "" })
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <AdminLayout>
      <div className={styles.content}>
        <h3
          style={{
            fontWeight: "var(--font-h3-weight)",
          }}
        >
          Detail Sesi
        </h3>
        <Row gutter={16} className={styles.container}>
          {loading ? (
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Spin />
            </Col>
          ) : (
            <>
              <Col lg={12}>
                <h4 className={styles.subTitle}>
                  Jenis Vaksin: {data?.vaccine.vaccine_name}
                </h4>
              </Col>
              <Col lg={12}>
                <h4 className={styles.subTitle}>
                  Jam Operasional:{" "}
                  {moment(data?.operational_hour_start, "hh:mm").format(
                    "HH:mm"
                  )}{" "}
                  -{" "}
                  {moment(data?.operational_hour_end, "hh:mm").format("HH:mm")}
                </h4>
              </Col>
              <Col lg={12}>
                <h4 className={styles.subTitle}>
                  Tanggal: {data?.vaccination_date}
                </h4>
              </Col>
              <Col lg={12}>
                <h4 className={styles.subTitle}>Kuota: {data?.quota}</h4>
              </Col>
            </>
          )}
        </Row>
        <h3
          style={{
            fontWeight: "var(--font-h3-weight)",
          }}
        >
          Data Pendaftar
        </h3>

        <SessionDetailTable sessionId={sessionId} scheduleData={data} />
      </div>
    </AdminLayout>
  );
}
