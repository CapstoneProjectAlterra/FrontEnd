import React, { useState } from "react";
import { EditFilled } from "@ant-design/icons";
import { Button, Modal, Tooltip, Form, InputNumber, Select } from "antd";
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

  const onFinish = (values) => {
    console.log("Update Data: ", values);
  };

  const onFinishFailed = (errors) => {
    console.log("Comment Error: ", errors);
  };

  return (
    <>
      <Tooltip placement="top" title="Edit">
        <Button className={style.button + " " + style.primary} onClick={showModal}>
          <EditFilled />
        </Button>
      </Tooltip>
      <Modal
        title="Edit Sesi Vaksinasi"
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
              Update Sesi
            </CustomButton>
          </div>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          id="editVaccine"
          requiredMark={false}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            vaccine_id: data.vaccine_id,
            kuota: data.kuota,
          }}
        >
          <Form.Item label="Jenis Vaksin" name="vaccine_id">
            <Select>
              <Select.Option value={1}>Astra Zeneca</Select.Option>
              <Select.Option value={2}>Sinovac</Select.Option>
              <Select.Option value={3}>Moderna</Select.Option>
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
            <InputNumber min={0} className="input" placeholder="input" style={{ padding: "4px 16px", width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VaccineModalEdit;
