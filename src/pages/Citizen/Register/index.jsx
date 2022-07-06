import React from "react";
import { Form, Input, Button, Row, Col, Alert } from "antd";
import { CustomButton, CustomInput } from "../../../components";
import { imgLogin } from "../../../assets";
import style from "./RegisterCitizen.module.css";
import { axiosInstance } from "../../../networks/apis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterCitizen = () => {
  //Logic Form
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertTriggered, setIsAlertTriggered] = useState(false);

  // pending due to incompatibilty in API docs.
  const handleSubmit = (values) => {
    const { nik, fullname, email, password } = values;
    setIsLoading(true);

    axiosInstance
      .post("/auth/register", {
        username: nik,
        name: fullname,
        email: email,
        password: password,
        profile: {
          role: "USER",
        },
      })
      .then((response) => {
        // navigate to login page, because register currently
        // don't have a token data in reponse payload. to get
        // it, user must log in manually.
        navigate("/login");
      })
      .catch((error) => {
        setIsAlertTriggered(true);
        setTimeout(() => {
          setIsAlertTriggered(false);
        }, 3000);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={style.body}>
      <div className={style.content}>
        <Row className={style.container}>
          <Col>
            <div className="content">
              <Row>
                <Col span={14} className={style.form}>
                  <Form
                    name="basic"
                    form={form}
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={handleSubmit}
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
                        {
                          pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z ]+$/,
                          message:
                            "Karakter yang diizinkan: [spasi], huruf kapital dan huruf biasa.",
                        },
                        {
                          min: 4,
                          message: "Masukkan minimal 4 karakter",
                        },
                      ]}
                      hasFeedback
                    >
                      <CustomInput placeholder="Masukkan Nama Lengkap Anda" />
                    </Form.Item>

                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Masukkan Email Anda",
                        },
                        {
                          type: "email",
                          message: "Format Email tidak valid!",
                        },
                      ]}
                      hasFeedback
                    >
                      <CustomInput placeholder="Masukkan Email Anda" />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Masukkan Password",
                        },
                        {
                          min: 8,
                          message: "Password minimal 8 karakter.",
                        },
                        {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
                          message:
                            "Password harus berupa kombinasi huruf besar, huruf kecil dan angka",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        placeholder="Masukkan Password Anda!"
                        className="input"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Confirm Password"
                      name="confirmPassword"
                      rules={[
                        {
                          required: true,
                          message: "Masukkan Konfirmasi Password Anda",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "Password yang dimasukkan tidak sama dengan password awal"
                            );
                          },
                        }),
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        placeholder="Konfirmasi Password Anda"
                        className="input"
                      />
                    </Form.Item>

                    {isAlertTriggered && (
                      <Alert
                        message="Registrasi Gagal"
                        type="warning"
                        showIcon
                        style={{
                          marginBottom: "24px",
                        }}
                      />
                    )}

                    <Form.Item>
                      <CustomButton
                        loading={isLoading}
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

        <p>
          Anda sudah mempunyai akun? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterCitizen;
