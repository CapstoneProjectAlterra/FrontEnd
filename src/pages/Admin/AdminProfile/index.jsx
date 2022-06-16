import { Col, Row, Image, message, Form, Upload, Divider, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import style from "./AdminProfile.module.css";
import { CustomButton, CustomInput } from "../../../components";

const AdminProfile = () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Row className={style.container}>
        <Col span={5} style={{ backgroundColor: "#06919D" }}>
          Sidebar
        </Col>
        <Col span={19}>
          <Header className={style.header}>
            <p>Path Directoly</p>
            <p>img profile</p>
          </Header>
          <Row>
            <Col span={22} offset={1} className={style.content}>
              <Content>
                <Row>
                  <Col span={16} offset={4}>
                    <h2 className={style.title}>PROFILE</h2>
                    <div className={style.imgThumb}>
                      <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    </div>
                    <h3>Informasi Fasilitas Kesehatan</h3>

                    <div>
                      <Form name="profileForm" layout="vertical" requiredMark={false}>
                        <Divider orientation="left" orientationMargin="0" className={style.titleForm}>
                          <p className={style.titleForm}>Nama Fasilitas Kesehatan</p>
                        </Divider>
                        <Form.Item
                          name="fasilitas"
                          label=""
                          rules={[
                            {
                              required: true,
                              message: "Masukkan Nama Fasilitas Kesehatan",
                            },
                          ]}
                        >
                          <CustomInput />
                        </Form.Item>
                        <Divider orientation="left" orientationMargin="0" className={style.titleForm}>
                          <p className={style.titleForm}>Alamat Fasilitas Kesehatan</p>
                        </Divider>
                        <Row gutter={48}>
                          <Col span={8}>
                            <Form.Item
                              name="jalan"
                              label="Jalan"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan Nama Jalan",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="nomor"
                              label="Nomor"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan No Jalan",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="kodepost"
                              label="Kode Pos"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan Kode Pos",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="kelurahan"
                              label="Kelurahan"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan Nama Kelurahan",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="kecamatan"
                              label="Kecamatan"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan Nama Kecamatan",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              name="kota"
                              label="Kota"
                              rules={[
                                {
                                  required: true,
                                  message: "Masukkan Nama Kota",
                                },
                              ]}
                            >
                              <CustomInput />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Divider orientation="left" orientationMargin="0" className={style.titleForm}>
                          <p className={style.titleForm}>Foto Failitas Kesehatan</p>
                        </Divider>
                        <Row>
                          <Col>
                            <Upload {...props}>
                              <div className={style.upload}>
                                <CustomButton icon={<UploadOutlined />}>Click to Upload</CustomButton>
                              </div>
                            </Upload>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <h3>Informasi Akun</h3>
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
                              <Input.Password className={style.input} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item>
                          <CustomButton htmlType="submit" variant="danger">
                            Submit
                          </CustomButton>
                        </Form.Item>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Content>
            </Col>
          </Row>
          {/* <Footer>FOoter</Footer> */}
        </Col>
      </Row>
    </>
  );
};

export default AdminProfile;
