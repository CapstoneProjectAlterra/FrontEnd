  import { Col, Row } from "antd";
  import React from "react";
  import {LogoPrimary} from "../../assets"
  import styles from "./index.module.css";
  import { MailOutlined, PhoneOutlined, InstagramOutlined, EnvironmentOutlined, AndroidFilled } from '@ant-design/icons';
  import { Link } from "react-router-dom";
  import { useState } from "react";

  function Footer(){
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    return(
    <>
      <Row className={styles.footer}>
        <Col span={12} push={1}>
          <Col span={8}>
            <img src={LogoPrimary} alt="logo" />
            <p>Dapatkan vaksin dengan mudah tanpa mengganggu kesibukanmu</p>
            <p>Tesedia juga untuk: </p>
            <button icon={<AndroidFilled/>}>Android</button>
          </Col>
        </Col> 
        <Col span={6}>
          <p>
            <strong>
              Information
            </strong>
          </p>

          <p>
          <Link
            to="/news"
            className="nav-links"
            onClick={()=>handleClick()}>
            Berita
          </Link>
          </p>
          <p>
          <Link
              to="/about"
              className="nav-links"
              onClick={()=>handleClick()}>
              Tentang Kami
          </Link>
          </p>
          <p>
          <Link
              to="faq"
              className="nav-links"
              onClick={()=>handleClick()}>
              FAQ
          </Link>
          </p>
          <p>
          <Link
              to="/kebijakan"
              className="nav-links"
              onClick={()=>handleClick()}>
              Kebijakan Privasi Data
          </Link>
          </p>
        </Col>
        <Col span={6}>
          <p>
            <strong>
              Hubungi Kami 
            </strong>
          </p>
          <p> <MailOutlined /> getvaccine@gmail.com</p>
          <p> <PhoneOutlined /> 089723829832</p>
          <p> <EnvironmentOutlined /> Jalan HR Rasuna Said Kav 4-9, Jakarta Selatan 12950</p>
          <p> <InstagramOutlined /> Get Vaccine</p>
        </Col>
        <div className={styles.copyright}>
            <span className={styles.span}><h5>Kelompok 16 - Copyright 2022</h5></span>
        </div>
      </Row> 
    </>
  );}


  export default Footer;
