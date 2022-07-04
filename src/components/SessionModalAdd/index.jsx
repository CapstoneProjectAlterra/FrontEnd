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
  message,
} from "antd";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import CustomButton from "../CustomButton";

import styles from "./SessionModalAdd.module.css";

export default function SessionModalAdd({ refetchToggle, setRefetchToggle }) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [vaccine, setVaccine] = useState([]);
  const [facility, setFacility] = useState([]);

  const [form] = Form.useForm();

  // Fetch vaccine type API
  useEffect(() => {
    axiosInstance
      .get("/facility", { data: "" })
      .then((response) => {
        setFacility(
          // Filter facility by user id
          response.data.data.filter(
            (item) => item.profile.user_id === getUserId()
          )[0]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch vaccine type API
  useEffect(() => {
    axiosInstance
      .get("/vaccine", { data: "" })
      .then((response) => {
        setVaccine(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    const inputData = {
      vaccination_date: values.vaccination_date.format("DD-MM-YYYY"),
      operational_hour_start: values.operational_hour_start.format("HH:mm:ss"),
      operational_hour_end: values.operational_hour_end.format("HH:mm:ss"),
      quota: values.quota,
      dose: values.dose,
      facility: {
        id: facility.id,
      },
      vaccine: {
        id: values.vaccine_id,
      },
    };
    setConfirmLoading(true);

    axiosInstance
      .post(`/schedule`, inputData)
      .then((response) => {
        setConfirmLoading(false);
        setVisible(false);
        setRefetchToggle(!refetchToggle);
        form.resetFields();
        message.success("Data berhasil ditambahkan");
      })
      .catch((error) => {
        console.log(error);
        setConfirmLoading(false);
        message.error("Data gagal ditambahkan");
      });
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
          initialValues={{ dose: "DOSIS_1" }}
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
            <Select placeholder="Pilih vaksin">
              {vaccine.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.vaccine_name}
                </Select.Option>
              ))}
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
