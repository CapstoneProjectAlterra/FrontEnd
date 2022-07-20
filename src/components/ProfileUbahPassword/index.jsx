import { Form, Row, Col, Input } from "antd";
import React from "react";
import CustomButton from "../CustomButton";
import style from "./ProfileUbahPassword.module.css";

const ProfileUbahPassword = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className={style.title}>
        <h1>Ubah Password</h1>
      </div>
      <Row>
        <Col span={10}>
          <Form name="ubahpassword" layout="vertical" form={form} requiredMark={false} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              name="passwordlama"
              label="Password Lama"
              rules={[
                {
                  required: true,
                  message: "Password Lama harus diisi",
                },
              ]}
            >
              <Input.Password className="input" placeholder="Masukkan Password Lama" />
            </Form.Item>
            <Form.Item
              name="passwordbaru"
              label="Password Baru"
              rules={[
                {
                  required: true,
                  message: "Password Baru harus diisi",
                },
              ]}
            >
              <Input.Password className="input" placeholder="Masukkan Password Baru" />
            </Form.Item>
            <Form.Item
              name="confirmpassword"
              label="Konfirmasi Password Baru"
              rules={[
                {
                  required: true,
                  message: "Konfirmasi Password Baru harus diisi",
                },
              ]}
            >
              <Input.Password className="input" placeholder="Masukkan Password Baru Kembali" />
            </Form.Item>
            <Form.Item>
              <CustomButton variant="primary" htmlType="submit">
                Simpan
              </CustomButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ProfileUbahPassword;
