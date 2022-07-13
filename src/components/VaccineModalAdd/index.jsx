/** React */
import React, { useState } from "react";

/** Components */
import CustomButton from "../CustomButton";

/** Antd Design */
<<<<<<< HEAD
import { Form, Modal, Select, InputNumber, message } from "antd";

/** Style */
import style from "./VaccineModalAdd.module.css";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import { useEffect } from "react";

const VaccineModalAdd = ({ refetchToggle, setRefetchToggle }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const [vaccine, setVaccine] = useState([]);
  const [facility, setFacility] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/facility", { data: "" })
      .then((response) => {
        setFacility(response.data.data.filter((item) => item.profile.user_id === getUserId())[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/vaccine", { data: "" })
      .then((response) => {
        setVaccine(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
=======
import { Form, Modal, Select, InputNumber } from "antd";

/** Style */
import style from "./VaccineModalAdd.module.css";

const VaccineModalAdd = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
<<<<<<< HEAD
    const inputData = {
      facility_id: facility.id,
      vaccine_id: values.vaccine_id,
      stock: values.kuota,
    };
    setConfirmLoading(true);

    axiosInstance
      .post("/stock", inputData)
      .then((response) => {
        console.log(response);
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
=======
    setConfirmLoading(true);
    console.log(values);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      form.resetFields();
    }, 2000);
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    form.resetFields();
    setVisible(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <CustomButton variant="primary" onClick={showModal}>
        Tambah Data +
      </CustomButton>
      <Modal
        title="Tambah Data Vaksin"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={style.modal}
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
              Tambah Vaksin
            </CustomButton>
          </div>,
        ]}
      >
        <Form form={form} layout="vertical" id="addForm" requiredMark={false}>
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
            <Select showSearch placeholder="Select Vaccine" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
<<<<<<< HEAD
              {vaccine.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.vaccine_name}
                </Select.Option>
              ))}
=======
              <Select.Option value="1">Sinovac</Select.Option>
              <Select.Option value="2">Astra Zeneca</Select.Option>
              <Select.Option value="3">Moderna</Select.Option>
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
            </Select>
          </Form.Item>
          <Form.Item
            name="kuota"
            label="Kuota"
            rules={[
              {
                required: true,
                message: "Kuota vaksinasi harus diisi",
              },
            ]}
          >
            <InputNumber min={0} className="input" placeholder="Masukkan Kuota Vaksin" style={{ padding: "4px 16px", width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VaccineModalAdd;
