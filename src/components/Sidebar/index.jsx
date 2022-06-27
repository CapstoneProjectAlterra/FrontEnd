import {UserOutlined} from "@ant-design/icons";
import {Col, Menu, Row, Space} from "antd";
import Sider from "antd/lib/layout/Sider";
import React, {useState} from "react";
import style from "./sidebar.module.css";
import {LogoPrimary} from "../../assets";
import {Link} from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Row gutter={16}>
      <Col
        className="gutter-row"
        span={5}
        style={{background: "var(--color-primary)", minHeight: "100vh"}}
      >
        <Row>
          <Space
            direction="vertical"
            size={80}
            style={{
              display: "flex",
            }}
          >
            <Col span={18}>
              <div className={style.image} style={{width: "100%"}}>
                <img src={LogoPrimary} alt="logo" />
              </div>
            </Col>
            <Col span={24}>
              <ul style={{listStyleType: "none", margin: "0", padding: "0"}}>
                <Space
                  direction="vertical"
                  size={40}
                  style={{
                    display: "flex",
                  }}
                >
                  <li>
                    <Link to="/admin" className={style.menu}>
                      <UserOutlined />
                      <span>Overview</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/session" className={style.menu}>
                      <UserOutlined />
                      <span>Kelola Sesi</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/vaccine" className={style.menu}>
                      <UserOutlined />
                      <span>Kelola Vaksin</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/profile" className={style.menu}>
                      <UserOutlined />
                      <span>Profil Admin</span>
                    </Link>
                  </li>
                </Space>
              </ul>
            </Col>
          </Space>
        </Row>
      </Col>
    </Row>
  );
}
