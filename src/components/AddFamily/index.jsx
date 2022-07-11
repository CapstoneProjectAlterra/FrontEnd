import React from "react";
import { Row, Col, Form, Input, Select, DatePicker, Space } from "antd";
import { CustomButton, CustomInput } from "../../components";
import { useState } from "react";

export default function AddFamily() {
  const [addFamily, setAddFamily] = useState();
  const [date, setDate] = useState();
  const [form] = Form.useForm();
  const { Option } = Select;

  const onChangeDate = (dateString) => {
    setDate(dateString);
    console.log(date);
  };

  const onFinish = (values) => {
    // const dateString = {...dateString, 'date-picker': dateString['date-picker'].format('YYYY-MM-DD')}
    // console.log(dateString)
    console.log("Success:", values);
    setAddFamily(values, date);
    // console.log("Success:", addFamily);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col span={24}>
        <Form
          className={style.formContainer}
          name="basic"
          form={form}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          requiredMark={false}
          autoComplete="off"
        >
          <Form.Item
            label="NIK"
            name="nik"
            rules={[
              {
                required: true,
                message: "NIK Tidak Boleh Kosong!",
              },
              {
                pattern: /^(?:\d*)$/,
                message: "Inputan Harus Berupa Angka",
              },
              {
                min: 16,
                message: "Masukkan minimal 16 karakter",
              },
              {
                max: 16,
                message: "Masukkan maximal 16 karakter",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan NIK Anda" />
          </Form.Item>

          <Form.Item
            label="Nama Lengkap"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Nama Lengkap Tidak Boleh Kosong!",
              },
              {
                whitespace: true,
              },
              // {
              //   pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
              //   message:
              //     "Nama Lengkap harus Kombinasi Huruf Besar dan Huruf Kecil",
              // },
              {
                min: 4,
                message: "Masukkan minimal 4 karakter",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan Nama Lengkap Anda" />
          </Form.Item>

          <Form.Item
            label="Tempat Lahir"
            name="tempatLahir"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <CustomInput placeholder="Masukkan Tempat Lahir" />
          </Form.Item>
          <Form.Item
            label="Tanggal Lahir"
            name="tanggalLahir"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <DatePicker
              className="input"
              onChange={onChangeDate}
              style={{ width: "230px" }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Masukkan Jenis Kelamin Anda",
              },
            ]}
          >
            <Select placeholder="Pilih Jenis Kelamin Anda">
              <Option value="male">Laki - Laki</Option>
              <Option value="female">Perempuan</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="Relation"
            label="Hubungan dalam Keluarga"
            rules={[
              {
                required: true,
                message: "Masukkan Apa Hubungan Anda dengan Keluarga",
              },
            ]}
          >
            <Select placeholder="Pilih Hubungan dalam Keluarga Anda">
              <Option value="Ayah">Ayah</Option>
              <Option value="Ibu">Ibu</Option>
              <Option value="Anak Pertama">Anak Pertama</Option>
              <Option value="Anak Kedua">Anak Kedua</Option>
              <Option value="Anak3">Anak Ketiga</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Masukkan Email Anda",
              },
              {
                type: "email",
                message: "Format Email tidak valid!",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan Email Anda" />
          </Form.Item>

          <Form.Item
            label="Nomor Telepon"
            name="noTelp"
            rules={[
              {
                required: true,
                message: "Nomor Telepon Tidak Boleh Kosong!",
              },
              {
                pattern: /^(?:\d*)$/,
                message: "Inputan Harus Berupa Angka",
              },
              {
                min: 10,
                message: "Masukkan minimal 10 karakter",
              },
              {
                max: 14,
                message: "Masukkan maximal 14 karakter",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan Nomor Telepon Anda" />
          </Form.Item>

          <Form.Item
            label="Alamat KTP"
            name="addressKTP"
            rules={[
              {
                required: true,
                message: "Alamat KTP Tidak Boleh Kosong!",
              },
              {
                whitespace: true,
              },
              // {
              //   pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
              //   message:
              //     "Nama Lengkap harus Kombinasi Huruf Besar dan Huruf Kecil",
              // },
              {
                min: 4,
                message: "Masukkan minimal 4 karakter",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan Alamat Lengkap Anda" />
          </Form.Item>

          <Form.Item
            label="Alamat Saat ini"
            name="Addres"
            rules={[
              {
                required: true,
                message: "Alamat Tidak Boleh Kosong!",
              },
              {
                whitespace: true,
              },
              // {
              //   pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/,
              //   message:
              //     "Nama Lengkap harus Kombinasi Huruf Besar dan Huruf Kecil",
              // },
              {
                min: 4,
                message: "Masukkan minimal 4 karakter",
              },
            ]}
            hasFeedback
          >
            <CustomInput placeholder="Masukkan Alamat Anda Saat Ini" />
          </Form.Item>

          <Form.Item>
            <CustomButton
              variant="primary"
              key="submit"
              htmlType="submit"
              block
              style={{ marginTop: "32px" }}
            >
              Register
            </CustomButton>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
