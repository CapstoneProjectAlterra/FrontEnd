import { Form, Input, Row, Col, Alert } from "antd";
import { useState } from "react";
import { LogoSecondary } from "../../../assets";
import { CustomButton, CustomInput } from "../../../components";
import style from "./AdminLogin.module.css";

import axiosInstance from "../../../networks/apis";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReactHelmet from "../../../components/ReactHelmet";

export default function AdminLogin() {
  let navigate = useNavigate();
  const [alertToggle, setAlertToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    const { username, password } = values;

    setLoading(true);

    axiosInstance
      .post("/auth/login", { username: username.toLowerCase(), password })
      .then((response) => {
        setLoading(false);
        if (response.data.data.roles[0] === "ADMIN") {
          console.log("success");
          Cookies.set("token", response.data.data.token);
          Cookies.set(
            "user",
            JSON.stringify({
              user_id: response.data.data.user_id,
              username: response.data.data.username,
              roles: response.data.data.roles[0],
            })
          );
          navigate("/admin");
        } else {
          setAlertToggle(true);
          setTimeout(() => {
            setAlertToggle(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAlertToggle(true);
        setTimeout(() => {
          setAlertToggle(false);
        }, 5000);
      });
  };

  return (
    <div className={style.loginPage}>
      <ReactHelmet />
      <div className={style.container}>
        <img
          src={LogoSecondary}
          alt="website-logo"
          className={style.imageLogo}
        />
        {alertToggle && (
          <Alert
            message="Username atau Password Salah"
            type="warning"
            showIcon
            style={{
              marginBottom: "24px",
            }}
          />
        )}
        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: "Masukkan username anda",
                  },
                ]}
              >
                <CustomInput placeholder="Username" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Masukkan password anda",
                  },
                ]}
              >
                <Input.Password placeholder="Password" className="input" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <CustomButton
              loading={loading}
              variant="primary"
              htmlType="submit"
              block
              style={{ marginTop: "24px" }}
            >
              Login
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
