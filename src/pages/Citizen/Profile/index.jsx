/** React */
import React, { useState } from "react";

/** Ant Design */
import { Breadcrumb, Col, Row } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";

/** Layout */
import CitizenLayouts from "../../../layouts/CitizenLayout";

import {
  ProfileSaya,
  ProfileKeluarga,
  ProfileUbahPassword,
} from "../../../components";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";
import { getUserId, isAuthenticatedUser } from "../../../utils/helpers/Auth";

const Profile = () => {
  const [sideBar, setSidebar] = useState({
    components: <ProfileSaya />,
    name: "ProfileSaya",
  });

  return (
    <CitizenLayouts auth={isAuthenticatedUser()}>
      <Row style={{ paddingTop: "36px" }}>
        <Col span={20}>
          <Breadcrumb className={style.linkPath}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className={style.linkPathBold}>
              <Link to="/profile">Profile Saya</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row gutter={[80, 32]} style={{ padding: "16px 0 48px" }}>
        <Col xs={24} md={4}>
          <ul className={style.menuContainer}>
            <li
              className={
                sideBar.name === "ProfileSaya" ? style.active : undefined
              }
            >
              <Link
                to="/profile"
                onClick={() =>
                  setSidebar({
                    components: <ProfileSaya />,
                    name: "ProfileSaya",
                  })
                }
              >
                <h5 className="h4-sb">Profile Saya</h5>
              </Link>
            </li>
            <li
              className={
                sideBar.name === "ProfileKeluarga" ? style.active : undefined
              }
            >
              <Link
                to="/profile"
                onClick={() =>
                  setSidebar({
                    components: <ProfileKeluarga />,
                    name: "ProfileKeluarga",
                  })
                }
              >
                <h5 className="h4-sb">Anggota Keluarga</h5>
              </Link>
            </li>
            <li
              className={
                sideBar.name === "ProfileUbahPassword"
                  ? style.active
                  : undefined
              }
            >
              <Link
                to="/profile"
                onClick={() =>
                  setSidebar({
                    components: <ProfileUbahPassword />,
                    name: "ProfileUbahPassword",
                  })
                }
              >
                <h5 className="h4-sb">Ubah Password</h5>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={20}>
          {sideBar.components}
        </Col>
      </Row>
    </CitizenLayouts>
  );
};

export default Profile;
