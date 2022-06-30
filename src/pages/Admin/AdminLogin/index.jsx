import { Form, Input, Button, Alert, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { LogoSecondary } from "../../../assets";
import { CustomButton, CustomInput } from "../../../components";
import style from "./AdminLogin.module.css";

const data = {
  username: "admin",
  password: "12345",
};

export default function AdminLogin() {
  const [alertToggle, setAlertToggle] = useState(false);

  useEffect(() => {
    // change background color to gradient only on this page with --color-gradient-2 variable
    document.body.style.background = "var(--color-gradient-2)";
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    if (values.username !== data.username && values.password !== data.password) {
      setAlertToggle(true);
      setTimeout(() => {
        setAlertToggle(false);
      }, 2000);
    } else {
      console.log("Login success");
    }
  };

  return (
    <div className={style.container}>
      <img src={LogoSecondary} alt="website-logo" className={style.imageLogo} />
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
          <CustomButton variant="primary" htmlType="submit" block style={{ marginTop: "48px" }}>
            Login
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
}
