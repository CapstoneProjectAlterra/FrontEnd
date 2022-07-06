import React, { useState } from "react";
import { Form, Input, Row, Col, Alert } from "antd";
import style from "./LoginCitizen.module.css";
import { useNavigate } from "react-router-dom";
import { CustomButton, CustomInput } from "../../../components";
import { imgLogin } from "../../../assets";
import { axiosInstance } from "../../../networks/apis";

export default function Login() {
  //Test Dummy
  const data = {
    NIK: "1234567890",
    Password: "User123",
  };

  //Logic Alert
  const navigate = useNavigate();
  const [isAlertTriggered, setIsAlertTriggered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Logic Form
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { nik, password } = values;
    axiosInstance
      .post("/auth/login", {
        username: nik,
        password: password,
      })
      .then((response) => {
        if (response.data.data.roles[0] === "USER") {
          navigate = "/";
          // set cookies, need to merge from development branch first
          // then navigate to dashboard
        } else {
          setIsAlertTriggered(true);
          setTimeout(() => {
            setIsAlertTriggered(false);
          }, 2000);
        }
      })
      .catch((error) => {
        setIsAlertTriggered(true);
        setTimeout(() => {
          setIsAlertTriggered(false);
        }, 2000);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className={style.body}>
        <Row className={style.container}>
          <Col>
            <div className="content">
              <Row>
                <Col span={14} className={style.form}>
                  <Form
                    name="basic"
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={handleSubmit}
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
                    {isAlertTriggered && (
                      <Alert
                        message="NIK atau Password Salah"
                        type="warning"
                        showIcon
                        style={{
                          marginBottom: "6px",
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
                        loading={isLoading}
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
