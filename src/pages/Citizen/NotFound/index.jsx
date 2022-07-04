import React from "react";
import CitizenLayout from "../../../layouts/CitizenLayout";
import {isAuthenticated} from "../../../utils/helpers/Auth";
import {Ilustration404} from "../../../assets";
import {CustomButton} from "../../../components";
import {Link} from "react-router-dom";
import {Row, Col} from "antd";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <CitizenLayout auth={isAuthenticated()}>
      <Row justify="center" align="middle" gutter={16} className={styles.row}>
        <Col lg={10} md={12} sm={14} xs={16} className="gutter-row">
          <img src={Ilustration404} alt="not-found" className={styles.ilust} />
          <div className={styles.content}>
            <h2 className={styles.primary}>Halaman Tidak Ditemukan</h2>
            <h4 className={`h4-sb ${styles.secondary}`}>
              Maaf, kami tidak dapat menemukan halaman yang sedang kamu cari.
            </h4>
          </div>
          <div className={styles.container}>
            <CustomButton variant="primary">
              <Link to="/">Kembali ke Home</Link>
            </CustomButton>
          </div>
        </Col>
      </Row>
    </CitizenLayout>
  );
}
