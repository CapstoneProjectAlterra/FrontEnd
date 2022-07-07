import React, { useState } from "react";
import { Form, Input, Row, Col, Alert } from "antd";
import Cookies from "js-cookie";
import style from "./LoginCitizen.module.css";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton, CustomInput } from "../../../components";
import { imgLogin } from "../../../assets";
import axiosInstance from "../../../networks/apis";
import CitizenLayout from "../../../layouts/CitizenLayout";
import { isAuthenticatedUser } from "../../../utils/helpers/Auth";

export default function Login() {
  //Logic Alert
  const navigate = useNavigate();
  const [isAlertTriggered, setIsAlertTriggered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Logic Form
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { nik, password } = values;
    setIsLoading(true);
    axiosInstance
      .post("/auth/login", {
        username: nik,
        password: password,
      })
      .then((response) => {
        if (response.data.data.roles[0] === "USER") {
          setIsLoading(false);
          Cookies.set("token", response.data.data.token);
          Cookies.set(
            "user",
            JSON.stringify({
              user_id: response.data.data.user_id,
              username: response.data.data.username,
              roles: response.data.data.roles[0],
            })
          );
          navigate("/");
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
        console.log(error);
        setIsAlertTriggered(true);
        setTimeout(() => {
          setIsAlertTriggered(false);
        }, 2000);
      });
    // .finally(() => setIsLoading(false));
  };

  return (
    <CitizenLayout auth={isAuthenticatedUser}>
      <div className={style.container}>
        <Row className={style.body}>
          <Col xs={24} md={14} className={style.formContainer}>
            <Form
              className={style.form}
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
                <CustomInput placeholder="Masukkan NIK Anda" />
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
                <Input.Password
                  className="input"
                  placeholder="Masukkan Password Anda"
                />
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
              <p className={`${style.link} ${style.linkMobile} body1-m`}>
                Anda belum punya akun? silahkan
                <Link to="/register"> Register</Link>
              </p>
            </Form>
          </Col>
          <Col md={10} className={style.illustration}>
            <img
              src={imgLogin}
              alt="illustrationLogin"
              className={style.image}
            />
          </Col>
        </Row>
      </div>
      <p className={`${style.link} body1-m`}>
        Anda belum punya akun? silahkan
        <Link to="/register"> Register</Link>
      </p>
    </CitizenLayout>
  );
}
