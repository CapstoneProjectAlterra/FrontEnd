import React from "react";
import style from "./DashboardCard.module.css";

import { Row, Col } from "antd";

export default function DashboardCard({ icons, title, value }) {
  return (
    <div className={style.container}>
      <Row>
        <Col span={6} className={style.col}>
          <div className={style.icons}>{icons}</div>
        </Col>
        <Col span={18} className={style.col}>
          <div>
            <h3 className={style.title}>{value}</h3>
            <p className={style.description}>{title}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
