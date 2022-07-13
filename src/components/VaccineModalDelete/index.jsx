/** React */
import React from "react";

/** Antd Design */
<<<<<<< HEAD
import { Button, Modal, Tooltip, message } from "antd";
=======
import { Button, Modal, Tooltip } from "antd";
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)

/** Antd Design Icons */
import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";

/** Style */
import style from "./VaccineModalDelete.module.css";
<<<<<<< HEAD
import axiosInstance from "../../networks/apis";

const VaccineModalDelete = ({ id, setRefetchToggle, refetchToggle, data }) => {
  const { confirm } = Modal;
  console.log(data, id);
  console.log(typeof data.facility_id);
  console.log(typeof id);
=======

const VaccineModalDelete = ({ data }) => {
  const { confirm } = Modal;
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)

  const showPromiseConfirm = () => {
    confirm({
      title: "Apakah Anda yakin menghapus item vaksin ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Proses tidak bisa dibatalkan",
      okText: "Yes",
      cancelText: "No",

      onOk() {
<<<<<<< HEAD
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
=======
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
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
