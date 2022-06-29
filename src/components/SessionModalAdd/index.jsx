import {
  Col,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  TimePicker,
} from "antd";
import { useState } from "react";
import CustomButton from "../CustomButton";

import styles from "./SessionModalAdd.module.css";

export default function SessionModalAdd() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setConfirmLoading(true);
    console.log(values);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      form.resetFields();
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    form.resetFields();
    setVisible(false);
  };

  return (
    <>
      <CustomButton variant="primary" onClick={showModal}>
        Tambah Data +
      </CustomButton>
      <Modal
        title="Tambah Sesi Vaksinasi"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        footer={[
          <div
            key="add"
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <CustomButton
              variant="primary"
              key="submit"
              htmlType="submit"
              loading={confirmLoading}
              onClick={() => {
                form
                  .validateFields()
                  .then((values) => {
                    handleOk(values);
                  })
                  .catch((info) => {
                    console.log("Validate Failed:", info);
                  });
              }}
            >
              Tambah Sesi
            </CustomButton>
          </div>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          id="addForm"
          requiredMark={false}
          initialValues={{ vaccine_id: "1", dose: "DOSIS_1" }}
        >
          <Form.Item
            label="Jenis Vaksin"
            name="vaccine_id"
            rules={[
              {
                required: true,
                message: "Jenis vaksin harus diisi",
              },
            ]}
          >
            <Select>
              <Select.Option value="1">Sinovac</Select.Option>
              <Select.Option value="2">Astra Zeneca</Select.Option>
            </Select>
          </Form.Item>
          <Row gutter={24}>
            <Col lg={8}>
              <Form.Item
                label="Tanggal Sesi"
                name="vaccination_date"
                rules={[
                  {
                    required: true,
                    message: "Tanggal sesi harus diisi",
                  },
                ]}
              >
                <DatePicker
                  className="input"
                  format="DD-MM-YYYY"
                  placeholder="Pilih tanggal"
                />
              </Form.Item>
            </Col>
            <Col lg={8}>
              <Form.Item
                label="Jam Mulai Sesi"
                name="operational_hour_start"
                rules={[
                  {
                    required: true,
                    message: "Jam mulai sesi harus diisi",
                  },
                ]}
              >
                <TimePicker
                  className="input"
                  format="HH:mm:ss"
                  placeholder="Pilih waktu"
                />
              </Form.Item>
            </Col>
            <Col lg={8}>
              <Form.Item
                label="Jam Selesai Sesi"
                name="operational_hour_end"
                rules={[
                  {
                    required: true,
                    message: "Jam selesai sesi harus diisi",
                  },
                ]}
              >
                <TimePicker
                  className="input"
                  format="HH:mm:ss"
                  placeholder="Pilih waktu"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="dose"
            label="Tahap Vaksinasi"
            rules={[
              {
                required: true,
                message: "Tahap vaksinasi harus diisi",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="DOSIS_1">Dosis 1</Radio>
              <Radio value="DOSIS_2">Dosis 2</Radio>
              <Radio value="BOOSTER">Booster</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="quota"
            label="Kuota"
            rules={[
              {
                required: true,
                message: "Kuota vaksinasi harus diisi",
              },
            ]}
          >
            <InputNumber
              min={0}
              className="input"
              placeholder="input"
              style={{ padding: "4px 16px", width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
