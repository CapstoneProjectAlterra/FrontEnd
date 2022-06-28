import React from "react";
import { Row, Col, Button, Checkbox } from "antd";
import { CustomButton } from "../../components";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import style from "./ListFamily.module.css";
import Item from "antd/lib/list/Item";
import { useState } from "react";

export default function ListFamily({ list, setListFams }) {
  //data dummy famiy
  const listFam = [
    {
      id: 1,
      name: "Mail Bin Mail",
      role: "saya",
      nik: "1234567890",
    },
    {
      id: 2,
      name: "Susi Susanti",
      role: "Ibu",
      nik: "1234567890",
    },
    {
      id: 3,
      name: "Upin",
      role: "Anak Pertama",
      nik: "1234567890",
    },
    {
      id: 4,
      name: "Ipin",
      role: "Anak kedua",
      nik: "1234567890",
    },
  ];

  const handleChangeFams = (prop) => (e) => {
    if (e.target.checked) {
      setListFams({ ...list, [prop]: e.target.value });
    } else {
      setListFams({ ...list, [prop]: "" });
    }
  };

  return (
    <div>
      {listFam.map((list, key) => {
        return (
          <Checkbox key={list.id} onChange={handleChangeFams}>
            <Row className={style.rowFamily}>
              <Col span={18}>
                <div className={style.familyName}>
                  <h4>{list.name}</h4>
                  <p>{list.role}</p>
                </div>
                <p style={{ padding: "0px 0px 0px 16px" }}>{list.nik}</p>
              </Col>
              <Col span={6} className={style.action}>
                <CustomButton variant="primary" style={{ margin: "16px" }}>
                  <BiDetail style={{ width: "18px" }} />
                </CustomButton>
                <Button type="primary" danger className={style.delete}>
                  <FaTrash style={{ width: "18px" }} />
                </Button>
              </Col>
            </Row>
          </Checkbox>
        );
      })}
    </div>
  );
}
