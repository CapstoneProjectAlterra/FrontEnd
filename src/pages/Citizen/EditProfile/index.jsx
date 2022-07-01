import { Col, DatePicker, Form, Row, Input, Button, Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { CustomButton, CustomInput, Footer, Navbar } from "../../../components";
import React from "react";
import style from "./EditProfile.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { state } = useLocation();

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Recived data: ", values);
    navigate("../profile");
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <>
      <Row className={style.navbar}>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <Breadcrumb className={style.linkPath}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Profile Saya</BreadcrumbItem>
            <BreadcrumbItem className={style.linkPathBold}>Edit Profile</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className={style.contentForm}>
        <Col span={16} offset={4}>
          <Row>
            <Col>
              <h1>Edit Profile</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form
                className={style.form}
                form={form}
                layout="vertical"
                initialValues={{
                  nama: state.data.nama,
                  nik: state.data.nik,
                  tempatLahir: state.data.tempatLahir,
                  // tanggalLahir: "2020-06-09T12:40:14+0000",
                  jenisKelamin: state.data.jenisKelamin,
                  status: state.data.status,
                  email: state.data.email,
                  noHp: state.data.noHp,
                  alamatKtp: state.data.alamatKtp,
                  alamatSekarang: state.data.alamatSekarang,
                }}
                requiredMark={false}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="nama"
                  label="Nama"
                  rules={[
                    {
                      required: true,
                      message: "Nama harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>

                <Form.Item
                  name="nik"
                  label="NIK"
                  rules={[
                    {
                      required: true,
                      message: "Nik harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Row>
                  <Col span={10}>
                    <Form.Item
                      name="tempatLahir"
                      label="Tempat Lahir"
                      rules={[
                        {
                          required: true,
                          message: "Tempat Lahir  harus diisi",
                        },
                      ]}
                    >
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={4}>
                    <Form.Item
                      name="tanggalLahir"
                      label="Tempat Lahir"
                      rules={[
                        {
                          required: true,
                          message: "Tanggal Lahir  harus diisi",
                        },
                      ]}
                    >
                      <DatePicker className={style.datepicker} format="YYYY/MM/DD" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="jenisKelamin"
                  label="Jenis Kelamin"
                  rules={[
                    {
                      required: true,
                      message: "Jenis Kelamin harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item
                  name="status"
                  label="Status dalam Keluarga"
                  rules={[
                    {
                      required: true,
                      message: "Status dalam keluarga harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Email harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item
                  name="noHp"
                  label="NO. Hp"
                  rules={[
                    {
                      required: true,
                      message: "Nomor Hp harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item
                  name="alamatKtp"
                  label="Alamat Rumah di KTP"
                  rules={[
                    {
                      required: true,
                      message: "Alamat harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item
                  name="alamatSekarang"
                  label="Alamat Rumah Saat ini"
                  rules={[
                    {
                      required: true,
                      message: "Alamat harus diisi",
                    },
                  ]}
                >
                  <CustomInput />
                </Form.Item>
                <Form.Item className={style.btnEdit}>
                  <CustomButton htmlType="submit" variant="primary" block="true">
                    Simpan
                  </CustomButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default EditProfile;
