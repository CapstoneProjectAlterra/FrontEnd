import {Col, Row} from "antd";
import React from "react";
import {useEffect} from "react";
import SessionTable from "../../../components/SessionTable";
import AdminLayout from "../../../layouts/AdminLayout";
import styles from "./AdminSession.module.css";

export default function AdminSession() {
  useEffect(() => {
    // change background color to gradient only on this page with --color-gradient-2 variable
    document.body.style.background = "var(--color-primary)";
  }, []);

  return (
    <AdminLayout>
      <div className={styles.content}>
        <h3
          style={{
            fontWeight: "var(--font-h3-weight)",
          }}
        >
          Daftar Sesi Tersedia
        </h3>

        <SessionTable />
      </div>
    </AdminLayout>
  );
}
