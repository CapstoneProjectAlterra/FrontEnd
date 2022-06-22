import React, { useState } from "react";
import { Form, Input, Row, Col, Alert } from "antd";
import style from "./LoginCitizen.module.css";
import { CustomButton, CustomInput } from "../../../components";
import { imgLogin } from "../../../assets";

export default function Login() {
  //Test Dummy
  const data = {
    NIK: "1234567890",
    Password: "User123",
  };

  //Logic Alert
  const [alertToggle, setAlertToggle] = useState(false);

  //Logic Form
  const onFinish = (values) => {
    console.log("Success:", values);

    if (values.nik !== data.NIK && values.password !== data.Password) {
      setAlertToggle(true);
      setTimeout(() => {
        setAlertToggle(false);
      }, 2000);
    } else {
      console.log("Login Succes");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={style.container}>
        <Row>
          <Col>
            <div className="content">
              <Row>
                <Col span={14} className={style.form}>
                  <Form
                    name="basic"
                    layout="vertical"
                    requiredMark={false}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item style={{ marginBottom: "16px" }}>
                      <h2>Login</h2>
                    </Form.Item>
                    <Form.Item
                      label="NIK"
                      name="nik"
                      rules={[
                        {
                          required: true,
                          message: "Masukkan NIK Anda!",
                        },
                        {
                          pattern: /^(?:\d*)$/,
                          message: "Input harus berupa angka!",
                        },
                      ]}
                    >
                      <CustomInput />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Masukkan Password Anda!",
                        },
                      ]}
                    >
                      <Input.Password className="input" />
                    </Form.Item>
                    {alertToggle && (
                      <Alert
                        message="Username atau Password Salah"
                        type="warning"
                        showIcon
                        style={{
                          marginBottom: "5px",
                        }}
                      />
                    )}
                    <p>
                      Apakah anda belum memiliki akun?
                      <br />
                      Silahkan <a href="/register"> Register</a>
                    </p>

                    <Form.Item>
                      <CustomButton
                        variant="primary"
                        key="submit"
                        htmlType="submit"
                        block
                        style={{ marginTop: "32px" }}
                      >
                        Login
                      </CustomButton>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={10} className={style.illustration}>
                  <img
                    src={imgLogin}
                    alt="illustrationLogin"
                    className={style.image}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
