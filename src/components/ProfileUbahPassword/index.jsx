import { Form, Row, Col, Input } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import CustomButton from "../CustomButton";
import style from "./ProfileUbahPassword.module.css";

const ProfileUbahPassword = () => {
  const [form] = Form.useForm();
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/user/${getUserId()}`, { data: "" })
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(dataUser);

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
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(inputData);
    console.log(values);
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  console.log(dataUser.password);
  return (
    <>
      <div className={style.title}>
        <h1>Ubah Password</h1>
      </div>
      <Row>
        <Col span={10}>
          <Form name="ubahpassword" layout="vertical" form={form} requiredMark={false} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
              <Input.Password className="input" placeholder="Masukkan Password Baru" />
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
              <Input.Password className="input" placeholder="Masukkan Password Baru Kembali" />
            </Form.Item>
            <Form.Item>
              <CustomButton variant="primary" htmlType="submit">
                Simpan
              </CustomButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ProfileUbahPassword;
