import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import style from "./RegisterCitizen.module.css";
import { imgReg } from "../../assets";

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
    <>
      <div className={style.container}>
        <div className="content">
          <Row>
            <Col span={14}>
              <Form
                name="basic"
                layout="vertical"
                className={style.form}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                autoComplete="off"
              >
                <h1>Register Citizen</h1>
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
                    {
                      min: 16,
                      message: "Please Input minimum 16 character",
                    },
                    {
                      max: 16,
                      message: "Please Input maximum 16 character",
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Input Your NIK" />
                </Form.Item>

                <Form.Item
                  label="Full Name"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                    {
                      whitespace: true,
                    },
                    {
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
                      message:
                        "Fullname must combination upper case and lower case",
                    },
                    {
                      min: 4,
                      message: "Please Input minimum 4 character",
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Type Your Full Name" />
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
                  <Input placeholder="Type Your Email" />
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
                  <Input.Password placeholder="Type Your Password" />
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
                  <Input.Password placeholder="Confirm Your Password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={10}>
              <img src={imgReg} className={style.image} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RegisterCitizen;
