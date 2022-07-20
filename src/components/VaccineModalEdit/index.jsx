/** React */
import React, { useEffect, useState } from "react";

/** Antd Design */
import { Button, Tooltip, Form, Modal, Select, InputNumber, message } from "antd";

/** Antd Design Icons */
import { EditFilled } from "@ant-design/icons";

/** Style */
import style from "./VaccineModalEdit.module.css";
import CustomButton from "../CustomButton";
import axiosInstance from "../../networks/apis";

const VaccineModalEdit = ({ data, refetchToggle, setRefetchToggle }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const [vaccine, setVaccine] = useState([]);

  const showModal = () => {
    setVisible(true);
  };

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

  const handleOk = (values) => {
    const inputData = {
      stock: values.stock,
    };

    setConfirmLoading(true);
    axiosInstance
      .put(`/stock/update?facility_id=${data.facility_id}&vaccine_id=${values.vaccine_id}`, inputData)
      .then((response) => {
        console.log(response);
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

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <Tooltip placement="top" title="Edit">
        <Button className={style.button + " " + style.primary} onClick={showModal}>
          <EditFilled />
        </Button>
      </Tooltip>
      <Modal
        title="Edit Data Vaksin"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={style.modal}
        footer={[
          <div
            key={data.id}
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
              Update Vaksin
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
            vaccine_id: data.vaccine_id,
            stock: data.stock,
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
            <Select showSearch placeholder="Select Vaccine" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
              {vaccine.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.vaccine_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="stock"
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

export default VaccineModalEdit;
