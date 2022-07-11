/** React */
import React from "react";

/** Antd Design */
import { Button, Modal, Tooltip, message } from "antd";

/** Antd Design Icons */
import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";

/** Style */
import style from "./VaccineModalDelete.module.css";
import axiosInstance from "../../networks/apis";

const VaccineModalDelete = ({ id, setRefetchToggle, refetchToggle, data }) => {
  const { confirm } = Modal;
  console.log(data, id);
  console.log(typeof data.facility_id);
  console.log(typeof id);

  const showPromiseConfirm = () => {
    confirm({
      title: "Apakah Anda yakin menghapus item vaksin ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Proses tidak bisa dibatalkan",
      okText: "Yes",
      cancelText: "No",

      onOk() {
        return axiosInstance
          .delete(`/stock/delete?facility_id=${data.facility_id}&vaccine_id=${data.vaccine_id}`, { data: "" })
          .then((response) => {
            console.log(response);
            message.success("Data berhasil dihapus");
            setRefetchToggle(!refetchToggle);
          })
          .catch((error) => {
            console.log(error);
            message.error("Data gagal dihapus");
          });
      },

      onCancel() {},
    });
  };

  return (
    <Tooltip placement="top" title="Delete">
      <Button type="danger" className={style.button} onClick={showPromiseConfirm}>
        <DeleteFilled />
      </Button>
    </Tooltip>
  );
};

export default VaccineModalDelete;
