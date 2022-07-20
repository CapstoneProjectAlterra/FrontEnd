import React from "react";
import { Row, Col, Button, Checkbox, Form, message, Modal } from "antd";
import { CustomButton, EditFamily } from "../../components";
import { BiDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import style from "./ListFamily.module.css";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import axiosInstance from "../../networks/apis";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function ListFamily({
  dataFamily,
  refetchToggle,
  setRefetchToggle,
}) {
  const { confirm } = Modal;
  const showPromiseConfirm = (values) => {
    confirm({
      title: "Apakah kamu yakin ingin menghapus anggota keluarga ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Proses tidak bisa dibatalkan",
      okText: "Yes",
      cancelText: "No",

      onOk() {
        return axiosInstance
          .delete(`/family/${values}`, { data: "" })
          .then((response) => {
            console.log(response);
            setRefetchToggle(!refetchToggle);
            message.success("Data berhasil dihapus");
          })
          .catch((error) => {
            console.log(error);
            message.error("Data gagal dihapus");
          });
      },

      onCancel() {},
    });
  };
  // const handleDelete = (values) => {
  //   console.log("hapus item", values);
  //   axiosInstance
  //     .delete(`/family/${values}`, { data: "" })
  //     .then((response) => {
  //       console.log(response);
  //       setRefetchToggle(!refetchToggle);
  //       message.success("Data berhasil dihapus");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       message.error("Data gagal dihapus");
  //     });
  // };

  return dataFamily === [] ? (
    "loading...."
  ) : (
    <>
      {dataFamily.map((list, key) => {
        return (
          // <Checkbox key={list.id} onChange={handleChangeFams}>
          <Row>
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
                  <EditFamily
                    member={list}
                    refetchToggle={refetchToggle}
                    setRefetchToggle={setRefetchToggle}
                  />
                  <Button
                    type="primary"
                    danger
                    className={style.delete}
                    onClick={() => showPromiseConfirm(list.id)}
                  >
                    <FaTrash style={{ width: "18px" }} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
}
