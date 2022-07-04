/** React */
import React from "react";

/** Antd Design */
import { Button, Tooltip, Modal } from "antd";

/** Antd Design Icons*/
import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";

/** Style */
import style from "./VaccineModalDelete.module.css";

const VaccineModalDelete = ({ data }) => {
  const { confirm } = Modal;

  const showPromiseConfirm = () => {
    confirm({
      title: "Apakah Anda yakin menghapus item vaksin ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Proses tidak bisa dibatalkan",
      okText: "Yes",
      cancelText: "No",

      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },

      onCancel() {},
    });
  };
  return (
    <>
      <Tooltip placement="top" title="Delete">
        <Button type="danger" className={style.button} onClick={showPromiseConfirm}>
          <DeleteFilled />
        </Button>
      </Tooltip>
    </>
  );
};

export default VaccineModalDelete;
