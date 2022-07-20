import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout";
import style from "./AdminProfileEdit.module.css";

import { Col, Row, Image, Form, Spin, Input, message } from "antd";

import { CustomButton, CustomInput, UploadFile } from "../../../components";

import { useEffect } from "react";
import axiosInstance from "../../../networks/apis";
import { getUserId } from "../../../utils/helpers/Auth";

const AdminProfileEdit = () => {
  const [facility, setFacility] = useState([]);
  const [loading, setLoading] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const [dataUser, setDataUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("/facility", { data: "" })
      .then((response) => {
        setFacility(response.data.data.filter((item) => item.profile.user_id === getUserId())[0]);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosInstance
      .get(`/user/${getUserId()}`, { data: "" })
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFinish = (values) => {
    let base64File = baseImage.slice(23);
    console.log("hasil", base64File);
    const inputData = {
      city: values.city,
      district: values.district,
      facility_name: values.facility_name,
      image: {
        base64: base64File === "" ? facility.image.base64 : base64File,
        content_type: "image/jpeg",
      },
      office_number: values.office_number,
      postal_code: values.postal_code,
      profile: {
        user_id: getUserId(),
      },
      province: values.city,
      street_name: values.street_name,
      village_name: values.village_name,
    };

    axiosInstance
      .put(`/facility/${facility.id}`, inputData)
      .then((response) => {
        // console.log(response.data);
        message.success("Data berhasil diubah");
      })
      .catch((error) => {
        // console.log(error);
        message.error("Data gagal diubah");
      }, []);
    navigate("/admin/profile");
  };

  return (
    <AdminLayout>
      {!loading ? (
        <Row align="middle" justify="center" style={{ paddingTop: "80px" }}>
          <Col>
            <Spin size="middle" />
          </Col>
        </Row>
      ) : (
        <Form
          layout="vertical"
          requiredMark={false}
          initialValues={{
            facility_name: facility.facility_name,
            street_name: facility.street_name,
            village_name: facility.village_name,
            office_number: facility.office_number,
            district: facility.district,
            city: facility.city,
            postal_code: facility.postal_code,
            username: dataUser.name,
            password: dataUser.password,
          }}
          onFinish={onFinish}
        >
          <div className={style.content}>
            <h2
              style={{
                fontWeight: "var(--font-h2-weight)",
                textAlign: "center",
                marginBottom: "14px",
              }}
            >
              EDIT PROFILE
            </h2>
            <Row>
              <Col span={16} offset={4}>
                <div className={style.imgThumb}>
                  <Image src={`data:imgae/jpeg;base64, ${facility.image.base64}`} alt={`Foto ${facility.facility_name}`} className={style.img} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <h3
                  style={{
                    marginBottom: "14px",
                  }}
                >
                  Informasi Fasilitas Kesehatan
                </h3>
                <Row>
                  <Col style={{ marginBottom: "24px" }}>
                    <Form.Item name="facility_name" label="Nama">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                </Row>
                <p className="body1">Alamat Fasilitas Kesehatan</p>
                <Row justify="space-between" align="middle">
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="street_name" label="Jalan">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="office_number" label="Nomor">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="postal_code" label="Kode Pos">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="village_name" label="Kelurahan">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="district" label="Kecamatan">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col sm={24} lg={7} md={11}>
                    <Form.Item name="city" label="Kota">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                </Row>
                <p className="body1">Foto Fasilitas Kesehatan</p>

                <Row>
                  <Col lg={12} sm={20}>
                    <Form.Item className="form" name="file_img">
                      <UploadFile setBaseImage={setBaseImage} />
                    </Form.Item>
                  </Col>
                </Row>
                <h3 style={{ marginBottom: "16px" }}>Informasi Akun</h3>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <CustomInput />
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
                      <Input.Password className="input" />
                    </Form.Item>
                    <Form.Item>
                      <CustomButton htmlType="submit" variant="primary" block={true} key="submit">
                        Simpan
                      </CustomButton>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Form>
      )}
    </AdminLayout>
  );
};

export default AdminProfileEdit;
