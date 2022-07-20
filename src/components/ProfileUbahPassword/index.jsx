import { Form, Row, Col, Input, Spin } from "antd";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import CustomButton from "../CustomButton";
import SuccessAlertPassword from "../SuccessAlertPassword";
import style from "./ProfileUbahPassword.module.css";

const ProfileUbahPassword = () => {
  const [form] = Form.useForm();
  const [dataUser, setDataUser] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/user/${getUserId()}`, { data: "" })
      .then((response) => {
        setDataUser(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFinish = (values) => {
    const inputData = {
      username: dataUser.username,
      name: dataUser.name,
      email: dataUser.email,
      password: values.confirmpassword,
      profile: {
        role: dataUser.profile.role,
      },
    };

    axiosInstance
      .put(`/user/${getUserId()}`, inputData)
      .then((response) => {
        console.log(response);
        setVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <>
      {loading ? (
        <Row align="middle" justify="center">
          <Spin />
        </Row>
      ) : (
        <Row>
          <Col span={24}>
            <div className={style.title}>
              <h1>Ubah Password</h1>
            </div>
            <Row>
              <Col span={24}>
                <Form
                  name="ubahpassword"
                  layout="vertical"
                  form={form}
                  requiredMark={false}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className={style.form}
                >
                  {/* <Form.Item
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
            </Form.Item> */}
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
                    <Input.Password
                      className="input"
                      placeholder="Masukkan Password Baru"
                    />
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
                    <Input.Password
                      className="input"
                      placeholder="Masukkan Password Baru Kembali"
                    />
                  </Form.Item>
                  <Form.Item>
                    <CustomButton
                      variant="primary"
                      htmlType="submit"
                      block={true}
                    >
                      Simpan
                    </CustomButton>
                    <SuccessAlertPassword
                      visible={visible}
                      onCancel={handleCancel}
                    />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProfileUbahPassword;
