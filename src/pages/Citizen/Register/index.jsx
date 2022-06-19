import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { CustomButton, CustomInput } from "../../../components";
import { imgLogin } from "../../../assets";
import style from "./RegisterCitizen.module.css";

const RegisterCitizen = () => {
  //Logic Form
  const onFinish = (values) => {
    console.log("Success:", values);
    // setvalues('')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      <Row>
        <Col>
          <div className="content">
            <Row>
              <Col span={14} className={style.form}>
                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  requiredMark={false}
                  autoComplete="off"
                >
                  <Form.Item style={{ marginBottom: "16px" }}>
                    <h2>Register</h2>
                  </Form.Item>
                  <Form.Item
                    label="NIK"
                    name="nik"
                    rules={[
                      {
                        required: true,
                        message: "NIK Tidak Boleh Kosong!",
                      },
                      {
                        pattern: /^(?:\d*)$/,
                        message: "Inputan Harus Berupa Angka",
                      },
                      {
                        min: 16,
                        message: "Masukkan minimal 16 karakter",
                      },
                      {
                        max: 16,
                        message: "Masukkan maximal 16 karakter",
                      },
                    ]}
                    hasFeedback
                  >
                    <CustomInput placeholder="Masukkan NIK Anda" />
                  </Form.Item>

                  <Form.Item
                    label="Nama Lengkap"
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Nama Lengkap Tidak Boleh Kosong!",
                      },
                      {
                        whitespace: true,
                      },
                      // {
                      //   pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
                      //   message:
                      //     "Nama Lengkap harus Kombinasi Huruf Besar dan Huruf Kecil",
                      // },
                      {
                        min: 4,
                        message: "Masukkan minimal 4 karakter",
                      },
                    ]}
                    hasFeedback
                  >
                    <CustomInput placeholder="Type Your Full Name" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name!",
                      },
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                    hasFeedback
                  >
                    <CustomInput placeholder="Type Your Email" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
                        message:
                          "Password must combination upper case and lower case",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      placeholder="Type Your Password"
                      className="input"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject("Your Password does not match");
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      placeholder="Confirm Your Password"
                      className="input"
                    />
                  </Form.Item>

                  <Form.Item>
                    <CustomButton
                      variant="primary"
                      key="submit"
                      htmlType="submit"
                      block
                      style={{ marginTop: "32px" }}
                    >
                      Register
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
  );
};

export default RegisterCitizen;
