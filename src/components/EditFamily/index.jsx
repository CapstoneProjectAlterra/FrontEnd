import { DatePicker, Form, message, Modal, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import moment from "moment";
import styles from "./EditFamily.module.css";

export default function EditFamily({
  member,
  refetchToggle,
  setRefetchToggle,
}) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [disabled, setDisabled] = useState(true);

  const [viewVisible, setviewVisible] = useState(false);

  const handleCancel = () => {
    setviewVisible(false);
  };

  // Logic Modal Edit Family

  const showModal = () => {
    setviewVisible(true);
  };

  const onFormLayoutChange = ({ disabled }) => {
    setDisabled(disabled);
  };

  const editMode = () => {
    setDisabled(false);
  };
  const handleOk = (values) => {
    const updateFamily = {
      date_of_birth: values.date_of_birth.format("DD-MM-YYYY"),
      email: values.email,
      name: values.name,
      gender: values.gender,
      id_card_address: values.id_card_address,
      nik: values.NIK,
      phone_number: values.phone_number,
      place_of_birth: values.place_of_birth,
      residence_address: values.residence_address,
      status_in_family: values.status_in_family,
      profile: {
        user_id: getUserId(),
      },
    };
    axiosInstance.put(`/family/${member.id}`, updateFamily).then((res) => {
      message.success("Data telah berhasil diupdate");
      setRefetchToggle(!refetchToggle);
    });
  };
  return (
    <div className={styles.container}>
      <CustomButton
        variant="primary"
        style={{
          width: "34px",
          height: "34px",
          padding: "0px",
          margin: "0px 26px",
        }}
        onClick={showModal}
      >
        <BiDetail style={{ width: "18px" }} />
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
                  handleCancel();
                  handleOk(values);
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
          initialValues={{
            date_of_birth: moment(member.date_of_birth, "DD-MM-YYYY"),
            email: member.email,
            name: member.name,
            gender: member.gender,
            id_card_address: member.id_card_address,
            NIK: member.nik,
            phone_number: member.phone_number,
            place_of_birth: member.place_of_birth,
            residence_address: member.residence_address,
            status_in_family: member.status_in_family,
          }}
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
            <CustomInput placeholder="Masukkan NIK Anda" disabled={disabled} />
          </Form.Item>

          <Form.Item
            label="Nama Lengkap"
            name="name"
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
            <CustomInput placeholder="Kota / Kabupaten" disabled={disabled} />
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
              format="DD-MM-YYYY"
              style={{ width: "100%" }}
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
              <Option value="LAKI_LAKI">Laki - Laki</Option>
              <Option value="PEREMPUAN">Perempuan</Option>
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
            <Select
              placeholder="Pilih Hubungan dalam Keluarga Anda"
              disabled={disabled}
            >
              <Option value="AYAH">Ayah</Option>
              <Option value="IBU">Ibu</Option>
              <Option value="ANAK">Anak</Option>
              <Option value="SAUDARA">Saudara</Option>
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
            <CustomInput
              placeholder="Masukkan Email Anda"
              disabled={disabled}
            />
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
            <CustomInput
              placeholder="Masukkan Nomor Telepon Anda"
              disabled={disabled}
            />
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
            <CustomInput
              placeholder="Masukkan Alamat Lengkap Anda"
              disabled={disabled}
            />
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
            <CustomInput
              placeholder="Masukkan Alamat Anda Saat Ini"
              disabled={disabled}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
