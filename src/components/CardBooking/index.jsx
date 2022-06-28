import React from "react";
import { Row, Col } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbVaccine, TbVaccineBottle } from "react-icons/tb";
import style from "./CardBooking.module.css";
import { useState } from "react";

export default function CardBooking({ book, setBook }) {
  const data = [
    {
      id: 1,
      time: "09.00 - 10.00",
      typeVaksin: "Sinovac",
      doseVaksin: "Dosis 1",
      kuota: "100 Dosis",
    },
    {
      id: 2,
      time: "10.00 - 12.00",
      typeVaksin: "Astrazeneca",
      doseVaksin: "Dosis 2",
      kuota: "200 Dosis",
    },
    {
      id: 3,
      time: "12.00 - 14.00",
      typeVaksin: "Moderna",
      doseVaksin: "Dosis 3",
      kuota: "100 Dosis",
    },
    {
      id: 4,
      time: "09.00 - 10.00",
      typeVaksin: "Sinovac",
      doseVaksin: "Dosis 1",
      kuota: "100 Dosis",
    },
    {
      id: 5,
      time: "10.00 - 12.00",
      typeVaksin: "Astrazeneca",
      doseVaksin: "Dosis 2",
      kuota: "200 Dosis",
    },
    {
      id: 6,
      time: "12.00 - 14.00",
      typeVaksin: "Moderna",
      doseVaksin: "Dosis 3",
      kuota: "100 Dosis",
    },
  ];

  //logic select session
  const handleClickBooking = (itemIdx) => {
    // setBooking(e.target.value);
    console.log(itemIdx);
  };

  return (
    <Row gutter={[20, 30]}>
      {data.map((item, itemIdx) => {
        return (
          <Col span={8} key={item.id}>
            <div
              className={style.cardBooking}
              value={item.id}
              onClick={() => handleClickBooking(item.id)}
            >
              <span className={style.cardTime}>
                <AiOutlineClockCircle
                  style={{
                    width: "12px",
                    height: "12px",
                    color: "#06919d",
                    marginRight: "8px",
                  }}
                />
                <p>{item.time}</p>
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
                        {item.doseVaksin}
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
