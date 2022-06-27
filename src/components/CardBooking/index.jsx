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

        <Row>
          <Col span={12} className="gutter-row">
            <Row gutter={8}>
              <Col flex="12px" className="gutter-row">
                <TbVaccine
                  style={{ padding: "0px !important", color: "#06919d" }}
                />
              </Col>
              <Col flex="auto" className="gutter-row">
                <p style={{ marginBottom: "4px", fontSize: "12px" }}>Sinovac</p>
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row">
            <Row gutter={8}>
              <Col flex="12px" className="gutter-row">
                <TbVaccineBottle style={{ color: "#06919d" }} />
              </Col>
              <Col flex="auto" className="gutter-row">
                <p style={{ padding: "0px", fontSize: "12px" }}>Dosis 1</p>
              </Col>
            </Row>
          </Col>
          <Col span={12} className="gutter-row">
            <Row gutter={8}>
              <Col flex="12px" className="gutter-row">
                <TbVaccineBottle
                  style={{ padding: "0px !important", color: "#06919d" }}
                />
              </Col>
              <Col flex="auto" className="gutter-row">
                <p style={{ margin: "0px", fontSize: "12px" }}>Sinovac</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
