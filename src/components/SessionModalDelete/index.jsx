import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip, message } from "antd";
import axiosInstance from "../../networks/apis";
import styles from "./SessionModalDelete.module.css";

export default function SessionModalDelete({
  id,
  setRefetchToggle,
  refetchToggle,
}) {
  const { confirm } = Modal;

  const showPromiseConfirm = () => {
    confirm({
      title: "Apakah kamu yakin ingin menghapus item ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Proses tidak bisa dibatalkan",
      okText: "Yes",
      cancelText: "No",

      onOk() {
        return axiosInstance
          .delete(`/schedule/${id}`, { data: "" })
          .then((response) => {
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
      <Button
        type="danger"
        className={styles.button}
        onClick={showPromiseConfirm}
      >
        <DeleteFilled />
      </Button>
    </Tooltip>
  );
}
