import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import style from "./AdminProfileEdit.module.css";

import { Col, Row, Image, message, Form, Upload, Divider, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { Content, Footer, Header } from "antd/lib/layout/layout";
import { CustomButton, CustomInput } from "../../../components";
import { Link } from "react-router-dom";

const AdminProfileEdit = () => {
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
    <AdminLayout>
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
              <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
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
                <p className="body1-m">RSUD Majalaya</p>
              </Col>
            </Row>
            <h5 className="h5-sb">Alamat Fasilitas Kesehatan</h5>
            <Row justify="space-between" align="middle">
              <Col span={8}>
                <p className="body1">Jalan</p>
                <p className="body1-m">Jl. Raya Cipaku</p>
              </Col>
              <Col span={8}>
                <p className="body1">Nomor</p>
                <p className="body1-m">87</p>
              </Col>
              <Col span={8}>
                <p className="body1">Kode Pos</p>
                <p className="body1-m">40616</p>
              </Col>
              <Col span={8}>
                <p className="body1">Kelurahan</p>
                <p className="body1-m">Ciputan</p>
              </Col>
              <Col span={8}>
                <p className="body1">Kecamatan</p>
                <p className="body1-m">Cipaku</p>
              </Col>
              <Col span={8}>
                <p className="body1">Kota</p>
                <p className="body1-m">Jember</p>
              </Col>
            </Row>
            <p className="body1">Foto Fasilitas Kesehatan</p>

            <Row>
              <Col>
                <Upload {...props}>
                  <div className={style.upload}>
                    <CustomButton icon={<UploadOutlined />}>Click to Upload</CustomButton>
                  </div>
                </Upload>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  *Foto harus berformat jpg, jpeg atau png <br /> *Ukuran file maksimal adalah 1 mb
                </p>
              </Col>
            </Row>
            <h3 style={{ marginBottom: "16px" }}>Informasi Akun</h3>
            <Row>
              <Col span={24}>
                <Form layout="vertical" requiredMark={false}>
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
                    <CustomInput value="rsudmalajaya" />
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
                    <Input.Password className="input" value="asraftakayuma" />
                  </Form.Item>
                  <Form.Item>
                    <CustomButton htmlType="submit" variant="primary" block={true}>
                      Simpan
                    </CustomButton>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
};

export default AdminProfileEdit;
