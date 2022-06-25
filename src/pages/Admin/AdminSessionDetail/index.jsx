import { Col, Row } from "antd";
import { useEffect } from "react";
import SessionDetailTable from "../../../components/SessionDetailTable";
import styles from "./AdminSessionDetail.module.css";
import { useParams } from "react-router-dom";

export default function AdminSessionDetail() {
  let { sessionId } = useParams();

  useEffect(() => {
    // change background color to gradient only on this page with --color-gradient-2 variable
    document.body.style.background = "var(--color-primary)";
  }, []);

  return (
    <Row>
      <Col span={4}>Sidebar</Col>
      <Col span={20}>
        <div className={styles.content}>
          <h3
            style={{
              fontWeight: "var(--font-h3-weight)",
            }}
          >
            Detail Sesi
          </h3>
          <Row gutter={16} className={styles.container}>
            <Col span={12}>
              <h4 className={styles.subTitle}>Jenis Vaksin: Sinovac</h4>
            </Col>
            <Col span={12}>
              <h4 className={styles.subTitle}>
                Jam Operasional: 08:00 - 10:00
              </h4>
            </Col>
            <Col span={12}>
              <h4 className={styles.subTitle}>Tanggal: 03-05-2022</h4>
            </Col>
            <Col span={12}>
              <h4 className={styles.subTitle}>Kuota: 200</h4>
            </Col>
          </Row>
          <h3
            style={{
              fontWeight: "var(--font-h3-weight)",
            }}
          >
            Data Pendaftar
          </h3>

          <SessionDetailTable sessionId={sessionId} />
        </div>
      </Col>
    </Row>
  );
}
