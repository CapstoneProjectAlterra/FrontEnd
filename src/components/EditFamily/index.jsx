import {DatePicker, Form, message, Modal, Select} from "antd";
import {Option} from "antd/lib/mentions";
import React, {useState} from "react";
import {BiDetail} from "react-icons/bi";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import styles from "./EditFamily.module.css";

export default function EditFamily({visible, onCreate, onCancel, member}) {
  const [date, setDate] = useState();
  const [form] = Form.useForm();
  const {Option} = Select;
  const [disabled, setDisabled] = useState(true);

  const [viewVisible, setviewVisible] = useState(false);

  const handleCancel = () => {
    setviewVisible(false);
  };

  // Logic Modal Edit Family

  const showModal = () => {
    setviewVisible(true);
  };

  const onChangeDate = (dateString) => {
    setDate(dateString);
    console.log(date);
  };
  const onFormLayoutChange = ({disabled}) => {
    setDisabled(disabled);
  };

  const editMode = () => {
    setDisabled(false);
  };
  const updateSuccess = () => {
    message.success("Data telah berhasil diupdate");
  };
  return (
    <>
      <CustomButton variant="primary" style={{margin: "16px"}} onClick={showModal}>
        <BiDetail style={{width: "18px"}} />
      </CustomButton>
      <Modal
        visible={viewVisible}
        title="Detail"
        okText={disabled ? "Edit" : "Submit"}
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={() => {
          disabled
            ? editMode()
            : form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                  handleCancel();
                  updateSuccess();
                })
                .catch((info) => {
                  console.log("Validate Failed:", info);
                });
        }}
        style={{
          top: 20,
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="edit family member"
          initialValues={member}
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item
            label="NIK"
            name="NIK"
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
            <CustomInput placeholder="Masukkan NIK Anda" className="input" disabled={disabled} />
          </Form.Item>

          <Form.Item
            label="Nama Lengkap"
            name="full_name"
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
            <CustomInput
              placeholder="Masukkan Nama Lengkap Anda"
              className="input"
              disabled={disabled}
            />
          </Form.Item>

          <Form.Item
            label="Tempat Lahir"
            name="place_of_birth"
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
            <CustomInput placeholder="Kota / Kabupaten" className="input" disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="Tanggal Lahir"
            name="date_of_birth"
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
              style={{width: "100%"}}
              disabled={disabled}
              placeholder="Pilih tanggal"
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
            <Select placeholder="Pilih Jenis Kelamin Anda" disabled={disabled}>
              <Option value="male">Laki - Laki</Option>
              <Option value="female">Perempuan</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status_in_family"
            label="Hubungan dalam Keluarga"
            rules={[
              {
                required: true,
                message: "Masukkan Apa Hubungan Anda dengan Keluarga",
              },
            ]}
          >
            <Select placeholder="Pilih Hubungan dalam Keluarga Anda" disabled={disabled}>
              <Option value="Ayah">Ayah</Option>
              <Option value="Ibu">Ibu</Option>
              <Option value="Anak">Anak</Option>
              <Option value="Saudara">Saudara</Option>
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
            <CustomInput placeholder="Masukkan Email Anda" disabled={disabled} />
          </Form.Item>

          <Form.Item
            label="Nomor Telepon"
            name="phone_number"
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
            <CustomInput placeholder="Masukkan Nomor Telepon Anda" disabled={disabled} />
          </Form.Item>

          <Form.Item
            label="Alamat KTP"
            name="id_card_address"
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
            <CustomInput placeholder="Masukkan Alamat Lengkap Anda" disabled={disabled} />
          </Form.Item>

          <Form.Item
            label="Alamat Saat ini"
            name="residence_address"
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
            <CustomInput placeholder="Masukkan Alamat Anda Saat Ini" disabled={disabled} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
