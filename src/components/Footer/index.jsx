import {Col, Row} from "antd";
import React from "react";
import {LogoPrimary} from "../../assets";
import style from "./index.module.css";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  AndroidFilled,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import CustomButton from "../CustomButton";

function Footer() {
  return (
    <>
      <Row className={style.footer} gutter={[0, 16]}>
        <Col lg={12} md={24} sm={24} xs={24} className="gutter-row">
          <img src={LogoPrimary} alt="logo" />
          <h5 className={style.body1}>Dapatkan vaksin dengan mudah tanpa mengganggu kesibukanmu</h5>
          <p className={style.body1}>Tesedia juga untuk: </p>
          <CustomButton icon={<AndroidFilled />} style={{color: "var(--color-primary)"}}>
            Android
          </CustomButton>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
          <h4>Information</h4>
          <p className={style.body1}>
            <Link to="/news" className={style.link}>
              Berita
            </Link>
          </p>
          <p className={style.body1}>
            <Link to="/about" className={style.link}>
              Tentang Kami
            </Link>
          </p>
          <p className={style.body1}>
            <Link to="faq" className={style.link}>
              FAQ
            </Link>
          </p>
          <p className={style.body1}>
            <Link to="/kebijakan" className={style.link}>
              Kebijakan Privasi Data
            </Link>
          </p>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
          <h4>Hubungi Kami </h4>
          <Row gutter={[0, 16]}>
            <Col className="gutter-row" span={24}>
              <Row gutter={8}>
                <Col flex="24px">
                  <MailOutlined style={{fontSize: "24px"}} className="gutter-row" />
                </Col>
                <Col flex="auto">
                  <span className={`${style.body1} gutter-row`}>getvaccine@gmail.com</span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" span={24}>
              <Row gutter={8}>
                <Col flex="24px">
                  <PhoneOutlined style={{fontSize: "24px"}} className="gutter-row" />
                </Col>
                <Col flex="auto">
                  <span className={`${style.body1} gutter-row`}>089723829832</span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" span={24}>
              <Row gutter={8}>
                <Col flex="24px">
                  <EnvironmentOutlined style={{fontSize: "24px"}} className="gutter-row" />
                </Col>
                <Col span={20}>
                  <span className={`${style.body1} gutter-row`}>
                    Jalan HR Rasuna Said Kav 4-9, Jakarta
                  </span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" span={24}>
              <Row gutter={8}>
                <Col flex="24px">
                  <InstagramOutlined style={{fontSize: "24px"}} className="gutter-row" />
                </Col>
                <Col flex="auto">
                  <span className={`${style.body1} gutter-row`}>getvaccine</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className={style.copyright}>
            <span className={style.body1}>Kelompok 16 - Copyright 2022</span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
