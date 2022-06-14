import { Button, Form, Input } from "antd";
import { Col, Row } from "antd";
import React, { useState } from "react";
import style from "./style.module.css";
import { imgLogin } from "../../assets";

const LoginCitizen = () => {
  //Logic Form
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={style.container}>
        <div className="content">
          <h1>Login Citizen</h1>
          <Row>
            <Col span={12} className={style.form}>
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
                <Form.Item
                  label="NIK"
                  name="nik"
                  rules={[
                    {
                      required: true,
                      message: "Please input your NIK!",
                    },
                    {
                      pattern: /^(?:\d*)$/,
                      message: "Input should contain just number",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{ marginTop: "50px" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12} className={style.illustration}>
              <img src={imgLogin} className={style.image} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default LoginCitizen;
