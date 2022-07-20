/** React */
import React, { useState, useEffect } from "react";

/** React Router */
import { Link } from "react-router-dom";

/** Ant Design */
import { Col, Row, Image, Form, Input, Spin } from "antd";

/** Components */
import { CustomButton, CustomInput } from "../../../components";

/** Axios and GetUser */
import axiosInstance from "../../../networks/apis";
import { getUserId } from "../../../utils/helpers/Auth";

/** Layout */
import AdminLayout from "../../../layouts/AdminLayout";
/** Style */
import style from "./AdminProfile.module.css";

const AdminProfile = () => {
  const [facility, setFacility] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/facility", { data: "" })
      .then((response) => {
        setFacility(
          response.data.data.filter(
            (item) => item.profile.user_id === getUserId()
          )[0]
        );
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading]);

  useEffect(() => {
    axiosInstance
      .get(`/user/${getUserId()}`, { data: "" })
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [facility]);

  return (
    <AdminLayout>
      {!loading ? (
        <Row align="middle" justify="center" style={{ paddingTop: "80px" }}>
          <Col>
            <Spin size="middle" />
          </Col>
        </Row>
      ) : (
        <div className={style.content}>
          <h2
            style={{
              fontWeight: "var(--font-h2-weight)",
              textAlign: "center",
              marginBottom: "14px",
            }}
          >
            PROFILE
          </h2>
          <Row>
            <Col span={16} offset={4}>
              <div className={style.imgThumb}>
                <Image
                  src={`data:${facility.image.content_type};base64, ${facility.image.base64}`}
                  alt={`Foto ${facility.facility_name}`}
                  className={style.img}
                />
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
                  <p className="body1">Nama</p>
                  <p className={style.body1M}>{facility.facility_name}</p>
                </Col>
              </Row>
              <h5 className="h5-sb">Alamat Fasilitas Kesehatan</h5>
              <Row justify="space-between" align="middle">
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Jalan</p>
                  <p className={style.body1M}>{facility.street_name}</p>
                </Col>
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Nomor</p>
                  <p className={style.body1M}>{facility.office_number}</p>
                </Col>
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Kode Pos</p>
                  <p className={style.body1M}>{facility.postal_code}</p>
                </Col>
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Kelurahan</p>
                  <p className={style.body1M}>{facility.village_name}</p>
                </Col>
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Kecamatan</p>
                  <p className={style.body1M}>{facility.district}</p>
                </Col>
                <Col sm={24} lg={7} md={12}>
                  <p className="body1">Kota</p>
                  <p className={style.body1M}>{facility.city}</p>
                </Col>
              </Row>
              <h3 style={{ marginBottom: "16px" }}>Informasi Akun</h3>
              <Row>
                <Col span={24}>
                  <Form
                    layout="vertical"
                    requiredMark={false}
                    initialValues={{
                      username: dataUser.username,
                      password: dataUser.password,
                    }}
                  >
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
                      <CustomInput disabled />
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
                      <Input.Password className="input" disabled />
                    </Form.Item>
                    <Form.Item>
                      <CustomButton
                        htmlType="submit"
                        variant="primary"
                        block={true}
                      >
                        <Link
                          to={`/admin/profile/${getUserId()}`}
                          state={{ facility }}
                        >
                          Edit
                        </Link>
                      </CustomButton>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProfile;
