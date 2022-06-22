import React from "react";
import style from './Alert.module.css'
import { Alert } from 'antd';
import CustomButton from "../CustomButton";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Space} from 'antd';

const onClose = (e) => {
  console.log(e, 'I was closed.');
};

function Alertt() {
    return (
        <>

        
<Alert
      message={<h4>Mau daftar vaksin?</h4>}
      description={<h5>Yuk, segera lengkapi data profilmu terlebih dahulu</h5>}
      type="info"
      action={
        <Space direction="vertical">
          <CustomButton variant="primary">Lengkapi Profilmu</CustomButton>
        </Space>
      }
      closable
    />
      </>
    );
  }

  export default Alertt;