import {UserOutlined} from "@ant-design/icons";
import {Col, Menu, Row, Space} from "antd";
import Sider from "antd/lib/layout/Sider";
import React, {useState} from "react";
import style from "./sidebar.module.css";
import {LogoPrimary} from "../../assets";
import {Link, useLocation} from "react-router-dom";
import {BiLineChart} from "react-icons/bi";
import {FaBusinessTime, FaSyringe, FaUser} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const allMenu = [
    {
      id: 1,
      route: "/admin",
      icon: <BiLineChart />,
      text: "Overview",
    },
    {
      id: 2,
      route: "/admin/session",
      icon: <FaBusinessTime />,
      text: "Kelola Sesi",
    },
    {
      id: 3,
      route: "/admin/vaccine",
      icon: <FaSyringe />,
      text: "Kelola Vaksin",
    },
    {
      id: 4,
      route: "/admin/profile",
      icon: <FaUser />,
      text: "Profil Admin",
    },
  ];

  return (
    <Row gutter={[0, 80]} className={style.nav}>
      <Col span={24}>
        <div className={style.image}>
          <img src={LogoPrimary} alt="logo" style={{width: "100%"}} />
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
            {allMenu.map((menu) => {
              return (
                <li
                  className={location.pathname === menu.route ? style.active : undefined}
                  key={menu.id}
                >
                  <Link to={menu.route} className={style.menu}>
                    {menu.icon}
                    <span className={style.textMenu}>{menu.text}</span>
                  </Link>
                </li>
              );
            })}
          </Space>
        </ul>
      </Col>
    </Row>
  );
}
