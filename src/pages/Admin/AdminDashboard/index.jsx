import AdminLayout from "../../../layouts/AdminLayout";
import {
  Chart,
  DashboardRegistrantTable,
  DashboardCard,
  DashboardRecentTable,
} from "../../../components";
import { Row, Col } from "antd";
import React, { useEffect } from "react";

import { FaSyringe, FaUsers } from "react-icons/fa";

export default function AdminDashboard() {
  const activities = {
    title: "Total Pendaftar",
    value: "100",
    icons: <FaUsers />,
  };
  const quota = {
    title: "Kuota Vaksin",
    value: "100",
    icons: <FaSyringe />,
  };
  // change background color only on this page with useEffect
  useEffect(() => {
    document.body.style.backgroundColor = "#BDE8EC";
  }, []);

  return (
    <AdminLayout>
      <div style={{ paddingTop: "80px" }}>
        <Row gutter={[24, 24]}>
          <Col lg={14}>
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <DashboardCard
                  title={quota.title}
                  value={quota.value}
                  icons={quota.icons}
                />
              </Col>
              <Col xs={24} lg={12}>
                <DashboardCard
                  title={activities.title}
                  value={activities.value}
                  icons={activities.icons}
                />
              </Col>
              <Col lg={24}>
                <Chart />
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={10}>
            <DashboardRecentTable />
          </Col>
          <Col lg={24}>
            <DashboardRegistrantTable />
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
