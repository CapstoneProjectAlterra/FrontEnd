import { EditFilled } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  TimePicker,
  Tooltip,
  message,
} from "antd";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton";
import moment from "moment";

import styles from "./SessionModalEdit.module.css";
import axiosInstance from "../../networks/apis";

export default function SessionModalEdit({
  data,
  refetchToggle,
  setRefetchToggle,
}) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [vaccine, setVaccine] = useState([]);
  const [form] = Form.useForm();

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
    const updatedData = {
      vaccination_date: values.vaccination_date.format("DD-MM-YYYY"),
      operational_hour_start: values.operational_hour_start.format("HH:mm:ss"),
      operational_hour_end: values.operational_hour_end.format("HH:mm:ss"),
      quota: values.quota,
      dose: values.dose,
      facility: {
        id: data.facility.id,
      },
      vaccine: {
        id: values.vaccine_id,
      },
    };
    setConfirmLoading(true);

    axiosInstance
      .put(`/schedule/${data.id}`, updatedData)
      .then((response) => {
        setConfirmLoading(false);
        setVisible(false);
        setRefetchToggle(!refetchToggle);
        message.success("Data berhasil diubah");
      })
      .catch((error) => {
        console.log(error);
        setConfirmLoading(false);
        message.error("Data gagal diubah");
      });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Tooltip placement="top" title="Edit">
        <Button
          className={styles.button + " " + styles.primary}
          onClick={showModal}
        >
          <EditFilled />
        </Button>
      </Tooltip>
      <Modal
        title="Edit Sesi Vaksinasi"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        footer={[
          <div
            key={data?.id}
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
              Update Sesi
            </CustomButton>
          </div>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          id="addForm"
          requiredMark={false}
          initialValues={{
            vaccine_id: data?.vaccine.id,
            vaccination_date: moment(data?.vaccination_date, "DD-MM-YYYY"),
            operational_hour_start: moment(
              data?.operational_hour_start,
              "HH:mm:ss"
            ),
            operational_hour_end: moment(
              data?.operational_hour_end,
              "HH:mm:ss"
            ),
            dose: data?.dose,
            quota: data?.quota,
          }}
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
              placeholder="Input"
              style={{ padding: "4px 16px", width: "100%" }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
