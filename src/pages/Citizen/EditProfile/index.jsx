import { Col, DatePicker, Form, Row } from "antd";
import { CustomButton, CustomInput } from "../../../components";
import React from "react";
import style from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <>
      <Row>
        <Col span={16} offset={4}>
          <Row>
            <Col>
              <h1>Edit Profile</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form layout="vertical">
                <Form.Item name="nama" label="Nama">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="nik" label="Nik">
                  <CustomInput />
                </Form.Item>
                <Row>
                  <Col span={10}>
                    <Form.Item name="tempat-lahir" label="Tempat Lahir">
                      <CustomInput />
                    </Form.Item>
                  </Col>
                  <Col span={10} offset={4}>
                    <Form.Item name="tanggal-lahir" label="Tanggal Lahir">
                      <DatePicker className={style.datepicker} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="gender" label="Jenis Kelamin">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="statusKeluarga" label="Setatus dalam Keluarga">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="nohp" label="No.HP">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="alamatktp" label="Alamat Rumah di KTP">
                  <CustomInput />
                </Form.Item>
                <Form.Item name="alamatnow" label="Alamat Rumah Saat Ini">
                  <CustomInput />
                </Form.Item>
                <Form.Item>
                  <CustomButton htmlType="submit" variant="primary" width="100%">
                    Simpan
                  </CustomButton>
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
