import { Col, DatePicker, Form, Row, Input, Button, Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { CustomButton, CustomInput } from "../../../components";
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
      <Row>
        <Col span={20} offset={2}>
          <Breadcrumb className={style.linkPath}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Profile Saya</BreadcrumbItem>
            <BreadcrumbItem className={style.linkPathBold}>Edit Profile</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4}>
          <Row>
            <Col>
              <h1>Edit Profile</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <label>
                  <p className={style.label}>Nama</p>
                </label>
                <Form.Item
                  name="nama"
                  rules={[
                    {
                      required: true,
                      message: "Nama harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>NIK</p>
                </label>
                <Form.Item
                  name="nik"
                  rules={[
                    {
                      required: true,
                      message: "Nik harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <Row>
                  <Col span={10}>
                    <label>
                      <p className={style.label}>Tempat Lahir</p>
                    </label>
                    <Form.Item
                      name="tempatLahir"
                      rules={[
                        {
                          required: true,
                          message: "Tempat Lahir  harus diisi",
                        },
                      ]}
                    >
                      {/* <CustomInput /> */}
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={4}>
                    <label>
                      <p className={style.label}>Tanggal Lahir</p>
                    </label>
                    <Form.Item
                      name="tanggalLahir"
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
                <label>
                  <p className={style.label}>Jenis Kelamin</p>
                </label>
                <Form.Item
                  name="jenisKelamin"
                  rules={[
                    {
                      required: true,
                      message: "Jenis Kelamin harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>Status dalam Keluarga</p>
                </label>
                <Form.Item
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: "Status dalam keluarga harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>Email</p>
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>No.HP</p>
                </label>
                <Form.Item
                  name="noHp"
                  rules={[
                    {
                      required: true,
                      message: "Nomor Hp harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>Alamat Rumah di KTP</p>
                </label>
                <Form.Item
                  name="alamatKtp"
                  rules={[
                    {
                      required: true,
                      message: "Alamat harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <label>
                  <p className={style.label}>Alamat Rumah Saat ini</p>
                </label>
                <Form.Item
                  name="alamatSekarang"
                  rules={[
                    {
                      required: true,
                      message: "Alamat harus diisi",
                    },
                  ]}
                >
                  {/* <CustomInput /> */}
                  <Input />
                </Form.Item>
                <Form.Item>
                  {/* <CustomButton htmlType="submit" variant="primary" width="100%">
                    Simpan
                  </CustomButton> */}
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EditProfile;
