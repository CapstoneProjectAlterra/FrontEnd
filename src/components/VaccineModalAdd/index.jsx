/** React */
import React, { useState } from "react";

/** Antd Design */
import { Modal, Form, Select, InputNumber } from "antd";

/** Components */
import CustomButton from "../CustomButton";

/** Style */
import styles from "./VaccineModalAdd.module.css";

const VaccineModalAdd = () => {
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

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = (values) => {
    console.log("Recived Data: ", values);
  };

  const onFinishFailed = (errors) => {
    console.log("Comment Error: ", errors);
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
        <Form form={form} layout="vertical" id="addVaccine" requiredMark={false} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="vaccine_name" label="Jenis Vaksin" rules={[{ required: true, message: "Jenis vaksin harus diisiq" }]}>
            <Select showSearch placeholder="Pilih Jenis Vaksin" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
              <Select.Option value="Astrazeneca">Astrazeneca</Select.Option>
              <Select.Option value="Booster">Booster</Select.Option>
              <Select.Option value="Sinovac">Sinovac</Select.Option>
            </Select>
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
            <InputNumber min={0} className="input" placeholder="Masukkan Kuota" style={{ padding: "4px 16px", width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VaccineModalAdd;
