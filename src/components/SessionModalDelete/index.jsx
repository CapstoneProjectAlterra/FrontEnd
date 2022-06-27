import { DeleteFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import styles from "./SessionModalDelete.module.css";

export default function SessionModalDelete({ data }) {
  const { confirm } = Modal;

  const showPromiseConfirm = () => {
    confirm({
      title: "Apakah kamu yakin ingin menghapus item ini?",
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
