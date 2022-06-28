import React from "react";
import { Row, Col } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbVaccine, TbVaccineBottle } from "react-icons/tb";
import style from "./CardBooking.module.css";

export default function CardBooking() {
  const data = [
    {
      jam: "09.00 - 10.00",
      typeVaksin: "Sinovac",
      jenisVaksin: "Dosis 1",
      kuota: "100 Dosis",
    },
    {
      jam: "10.00 - 12.00",
      typeVaksin: "Astrazeneca",
      jenisVaksin: "Dosis 2",
      kuota: "200 Dosis",
    },
    {
      jam: "12.00 - 14.00",
      typeVaksin: "Moderna",
      jenisVaksin: "Dosis 3",
      kuota: "100 Dosis",
    },
    {
      jam: "09.00 - 10.00",
      typeVaksin: "Sinovac",
      jenisVaksin: "Dosis 1",
      kuota: "100 Dosis",
    },
    {
      jam: "10.00 - 12.00",
      typeVaksin: "Astrazeneca",
      jenisVaksin: "Dosis 2",
      kuota: "200 Dosis",
    },
    {
      jam: "12.00 - 14.00",
      typeVaksin: "Moderna",
      jenisVaksin: "Dosis 3",
      kuota: "100 Dosis",
    },
  ];
  return (
    <Row gutter={[20, 30]}>
      {data.map((item) => {
        return (
          <Col span={8}>
            <div className={style.cardBooking}>
              <span className={style.cardTime}>
                <AiOutlineClockCircle
                  style={{
                    width: "10px",
                    color: "#06919d",
                    marginRight: "8px",
                  }}
                />
                <p>{item.jam}</p>
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
                      <p style={{ marginBottom: "4px", fontSize: "12px" }}>
                        {item.typeVaksin}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="gutter-row">
                  <Row gutter={8}>
                    <Col flex="12px" className="gutter-row">
                      <TbVaccineBottle style={{ color: "#06919d" }} />
                    </Col>
                    <Col flex="auto" className="gutter-row">
                      <p style={{ padding: "0px", fontSize: "12px" }}>
                        {item.jenisVaksin}
                      </p>
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
                      <p style={{ margin: "0px", fontSize: "12px" }}>
                        {item.kuota}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
