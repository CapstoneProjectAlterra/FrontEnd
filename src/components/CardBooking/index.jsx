import React from "react";
import { Row, Col } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbVaccine, TbVaccineBottle } from "react-icons/tb";
import style from "./CardBooking.module.css";

export default function CardBooking() {
  return (
    <Row justify="center">
      <Col span={8} className={style.cardBooking}>
        <span className={style.cardTime}>
          <AiOutlineClockCircle
            style={{
              width: "10px",
              color: "#06919d",
              marginRight: "8px",
            }}
          />
          <p>09.00 - 10.00</p>
        </span>

        <Row gutter={[24, 24]}>
          <Col span={12} style={{ display: "flex" }}>
            <Col
              flex="12px"
              style={{ padding: "0px", margin: "0px 8px 0px 0px" }}
            >
              <TbVaccine />
            </Col>
            <Col flex="auto" style={{ padding: "0px" }}>
              <p style={{ fontSize: "12px" }}>Sinovac</p>
            </Col>
          </Col>
          <Col span={12} style={{ display: "flex" }}>
            <Col
              flex="12px"
              style={{ padding: "0px", margin: "0px 8px 0px 19px" }}
            >
              <TbVaccineBottle />
            </Col>
            <Col flex="auto">
              <p style={{ padding: "0px", fontSize: "12px" }}>Dosis 1</p>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
