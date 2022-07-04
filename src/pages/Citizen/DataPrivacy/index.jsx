import {Col, Row} from "antd";
import React from "react";
import {SuntikVaksin} from "../../../assets";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import {isAuthenticatedUser} from "../../../utils/helpers/Auth";
import styles from "./DataPrivacy.module.css";

export default function DataPrivacy() {
  return (
    <CitizenLayouts auth={isAuthenticatedUser()} padding={false}>
      <Row justify="center">
        <Col span={20}>
          <Row justify="space-between" align="middle" className={styles.headContent}>
            <Col span={8}>
              <h1>Kebijakan Privasi Data</h1>
            </Col>
            <Col span={8}>
              <img src={SuntikVaksin} alt="people-doing-vaccine" width="100%" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[0, 40]} justify="center" className={styles.content}>
        <Col span={20}>
          <h4 className={`h4-sb ${styles.text}`}>
            GetVaccine hanya mengumpulkan data dan informasi pengguna untuk digunakan dalam
            menjalankan layanan yang tersedia di dalam aplikasi. Beberapa data dan informasi yang
            akan digunakan adalah :
          </h4>
        </Col>
        <Col span={20}>
          <div className={styles.point}>
            <h4 className={`h4-sb ${styles.text}`}>1. Informasi kebutuhan registrasi</h4>
            <p className="body1">
              Untuk dapat menggunakan dan mengakses layanan aplikasi, calon pengguna akan diminta
              untuk membuat akun GetVaccine agar dapat menggunakan berbagai layanan yang tersedia.
              Data yang dibutuhkan termasuk NIK, nama lengkap, jenis kelamin, tanggal lahir, nomor
              hp, email, serta password.
            </p>
          </div>
        </Col>
        <Col span={20}>
          <div className={styles.point}>
            <h4 className={`h4-sb ${styles.text}`}>2. Informasi yang kami kumpulkan</h4>
            <p className="body1">
              GetVaccine akan mendata informasi terkait penggunaan aplikasi yang dilakukan oleh
              setiap pengguna, seperti id pengguna saat registrasi, serta waktu penggunaan aplikasi
              oleh pengguna.
            </p>
          </div>
        </Col>
      </Row>
    </CitizenLayouts>
  );
}
