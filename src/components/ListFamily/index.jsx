import React from "react";
import { Row, Col } from "antd";
import { CustomButton } from "../../components";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import style from "./ListFamily.module.css";

export default function ListFamily() {
  //data dummy famiy
  const listFam = [
    {
      name: "Mail Bin Mail",
      role: "saya",
      nik: "1234567890",
    },
    {
      name: "Susi Susanti",
      role: "Ibu",
      nik: "1234567890",
    },
    {
      name: "Upin",
      role: "Anak Pertama",
      nik: "1234567890",
    },
    {
      name: "Ipin",
      role: "Anak kedua",
      nik: "1234567890",
    },
  ];

  return (
    <div>
      {listFam.map((list, listIdx) => {
        return (
          <Row>
            <Col span={18} key={listIdx}>
              <div className={style.familyName}>
                <h4>{list.name}</h4>
                <p>{list.role}</p>
              </div>
              <p style={{ padding: "0px 0px 12px 16px" }}>{list.nik}</p>
            </Col>
            <Col span={6} className={style.action}>
              <div>
                <CustomButton
                  variant="primary"
                  style={{ display: "inline-block", margin: "16px" }}
                >
                  <BiDetail style={{ width: "18px" }} />
                </CustomButton>
                <button
                  style={{
                    padding: "8px",
                    border: "none",
                    Color: "F5222D",
                  }}
                >
                  <FaTrash style={{ width: "18px" }} />
                </button>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}
