import { Col, DatePicker, Form, Row, Input, Button, Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { CustomButton, CustomInput, Footer, Navbar } from "../../../components";
import React from "react";
import style from "./EditProfile.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import { getUserId, isAuthenticatedUser } from "../../../utils/helpers/Auth";
import moment from "moment";
import axiosInstance from "../../../networks/apis";

const EditProfile = () => {
  const { state } = useLocation();

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const onFinish = (values) => {
    const inputData = {
      date_of_birth: values.dateOfBirth.format("DD-MM-YYYY"),
      email: values.email,
      name: values.name,
      gender: values.gender,
      place_of_birth: values.placeOfBirth,
      id_card_address: values.idCardAddress,
      nik: values.nik,
      phone_number: values.phoneNumber,
      residence_address: values.residenceAddress,
      status_in_family: values.statusInFamily,
      profile: {
        user_id: getUserId(),
      },
    };

    axiosInstance
      .put(`/family/${getUserId()}`, inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Recived data: ", values);
    console.log("Recived data: ", inputData);
    navigate("/profile");
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <CitizenLayouts auth={isAuthenticatedUser()}>
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
                  dateOfBirth: moment(state.dataUser.date_of_birth, "DD-MM-YYYY"),
                  email: state.dataUser.email,
                  gender: state.dataUser.gender,
                  idCardAddress: state.dataUser.id_card_address,
                  name: state.dataUser.name,
                  nik: state.dataUser.nik,
                  phoneNumber: state.dataUser.phone_number,
                  placeOfBirth: state.dataUser.place_of_birth,
                  residenceAddress: state.dataUser.residence_address,
                  statusInFamily: state.dataUser.status_in_family,
                }}
                requiredMark={false}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
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
                      name="placeOfBirth"
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
                      name="dateOfBirth"
                      label="Tempat Lahir"
                      rules={[
                        {
                          required: true,
                          message: "Tanggal Lahir  harus diisi",
                        },
                      ]}
                    >
                      <DatePicker className={style.datepicker} format="DD-MM-YYYY" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="gender"
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
                  name="statusInFamily"
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
                  name="phoneNumber"
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
                  name="idCardAddress"
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
                  name="residenceAddress"
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
    </CitizenLayouts>
  );
};

export default EditProfile;
