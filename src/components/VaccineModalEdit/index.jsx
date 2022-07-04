/** React */
import React, { useState } from "react";

/** Antd Design */
import { Button, Tooltip, Form, Modal, Select, InputNumber } from "antd";

/** Antd Design Icons */
import { EditFilled } from "@ant-design/icons";

/** Style */
import style from "./VaccineModalEdit.module.css";
import CustomButton from "../CustomButton";

const VaccineModalEdit = ({ data }) => {
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
              <Select.Option value={1}>Sinovac</Select.Option>
              <Select.Option value={2}>Astra Zeneca</Select.Option>
              <Select.Option value={3}>Moderna</Select.Option>
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
