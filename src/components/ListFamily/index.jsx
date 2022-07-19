import React from "react";
import { Row, Col, Button, Checkbox, Form } from "antd";
import { CustomButton, EditFamily } from "../../components";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import style from "./ListFamily.module.css";
import Item from "antd/lib/list/Item";
import { useState } from "react";

export default function ListFamily({ dataFamily }) {
  const [refetchToggle, setRefetchToggle] = useState(false);

  console.log("send data", dataFamily);

  return dataFamily === [] ? (
    "loading...."
  ) : (
    <Checkbox.Group>
      {dataFamily.map((list, key) => {
        return (
          // <Checkbox key={list.id} onChange={handleChangeFams}>
          <Checkbox key={list.id} value={list.name}>
            <Row className={style.rowFamily}>
              <Col span={18}>
                <div className={style.familyName}>
                  <h4>{list.name}</h4>
                  <p>{list.status_in_family}</p>
                </div>
                <p style={{ padding: "0px 0px 0px 16px" }}>{list.nik}</p>
              </Col>
              <Col span={6} className={style.action}>
                <EditFamily member={list} refetchToggle={refetchToggle} setRefetchToggle={setRefetchToggle} />
                <Button type="primary" danger className={style.delete}>
                  <FaTrash style={{ width: "18px" }} />
                </Button>
              </Col>
            </Row>
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
}
