  import { Col, Row } from "antd";
  import React from "react";
  import {LogoPrimary} from "../../assets"
  import style from "./index.module.css";
  import { MailOutlined, PhoneOutlined, InstagramOutlined, EnvironmentOutlined, AndroidFilled } from '@ant-design/icons';
  import { Link } from "react-router-dom";
  import { CustomButton } from '..'

  function Footer(){
    return(
    <>
      <Row className={style.footer}>
        <Col span={11} push={1}>
          <Col lg= {{span: 10}} xs={{span: 24}} className={style.span}>
            <img src={LogoPrimary} alt="logo" className={style.logo} />
            <h5>Dapatkan vaksin dengan mudah tanpa mengganggu kesibukanmu</h5>
            <h5>Tesedia juga untuk: </h5>
            <CustomButton variant="secondary" to="/android" icon={<AndroidFilled/>}>Android</CustomButton>
          </Col>
        </Col> 
        <Col lg= {{span: 6}} xs={{span: 21, push:1}} className={style.span}>
          <h4>Information</h4>
          <h5>
          <Link
            to="/news"
            className={style.link}>
            Berita
          </Link>
          </h5>
          <h5>
          <Link
            to="/about"
            className={style.link}>
            Tentang Kami
          </Link>
          </h5>
          <h5>
          <Link
            to="faq"
            className={style.link}>
            FAQ
          </Link>
          </h5>
          <h5>
          <Link
            to="/kebijakan"
            className={style.link}>
            Kebijakan Privasi Data
          </Link>
          </h5>
        </Col>
        <Col lg= {{span: 5, push:1}} xs={{span: 24, push:1}} className={style.span}>
          <h4>Hubungi Kami </h4>
          <h5><MailOutlined /> getvaccine@gmail.com</h5>
          <h5><PhoneOutlined /> 089723829832</h5>
          <h5><EnvironmentOutlined /> Jalan HR Rasuna Said Kav 4-9, Jakarta Selatan 12950</h5>
          <h5><InstagramOutlined /> getvaccine</h5>
        </Col>
        <div className={style.copyright}>
            <span className={style.span}><h5>Kelompok 16 - Copyright 2022</h5></span>
        </div>
      </Row> 
    </>
  );}


  export default Footer;
