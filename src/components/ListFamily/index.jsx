import React from "react";
import { Row, Col, Button, Checkbox, Form } from "antd";
import { CustomButton, EditFamily } from "../../components";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import style from "./ListFamily.module.css";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import axiosInstance from "../../networks/apis";

export default function ListFamily({ dataFamily }) {
  const [refetchToggle, setRefetchToggle] = useState(false);

  const handleDelete = (values) => {
    console.log("hapus item", values);
    axiosInstance
      .delete(`/family/${values}`, { data: "" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return dataFamily === [] ? (
    "loading...."
  ) : (
    <Checkbox.Group>
      {dataFamily.map((list, key) => {
        return (
          // <Checkbox key={list.id} onChange={handleChangeFams}>
          <Row>
            <Col>
              <Checkbox key={list.id} value={list.name}>
                <Col span={12}>
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
                      <Button type="primary" danger className={style.delete} onClick={() => handleDelete(list.id)}>
                        <FaTrash style={{ width: "18px" }} />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Checkbox>
            </Col>
          </Row>
        );
      })}
    </Checkbox.Group>
  );
}
