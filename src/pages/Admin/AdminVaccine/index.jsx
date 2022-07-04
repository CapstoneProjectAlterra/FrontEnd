import React from "react";

/** Layouts */
import AdminLayout from "../../../layouts/AdminLayout";

/** Components */
import { VaccineTable } from "../../../components";

/** Style */
import style from "./AdminVaccine.module.css";

const AdminVaccine = () => {
  return (
    <AdminLayout>
      <div className={style.content}>
        <h3
          style={{
            fontWeight: "var(--font-h3-weight)",
          }}
        >
          Daftar Sesi Tersedia
        </h3>

        <VaccineTable />
      </div>
    </AdminLayout>
  );
};

export default AdminVaccine;
