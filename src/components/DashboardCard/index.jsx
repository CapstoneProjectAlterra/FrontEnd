import React from "react";
import style from "./DashboardCard.module.css";

import { Row, Col } from "antd";

export default function DashboardCard({ icons, title, value }) {
  return (
    <div className={style.container}>
      <Row justify="space-between" align="middle">
        <Col span={6}>
          <div className={style.icons}>{icons}</div>
        </Col>
        <Col md={18} lg={16} xl={18}>
          <div style={{ padding: "0 12px" }}>
            <h3 className={style.title}>{value}</h3>
            <p className={style.description}>{title}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
