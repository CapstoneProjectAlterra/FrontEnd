/** React */
import React, { useState } from "react";

/** Ant Design */
import { Breadcrumb, Col, Row } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";

/** Layout */
import CitizenLayouts from "../../../layouts/CitizenLayout";

import { ProfileSaya, ProfileKeluarga, ProfileUbahPassword } from "../../../components";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";
import { isAuthenticatedUser } from "../../../utils/helpers/Auth";

const Profile = () => {
  const [sideBar, setSidebar] = useState({ components: <ProfileSaya />, name: "ProfileSaya" });

  return (
    <CitizenLayouts auth={isAuthenticatedUser()}>
      <Row style={{ marginTop: "36px" }}>
        <Col span={20} offset={2}>
          <Breadcrumb className={style.linkPath}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem className={style.linkPathBold}>Profile Saya</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row style={{ minHeight: "100vh" }}>
        <Col span={20} offset={2}>
          <Row>
            <Col span={4}>
              <ul>
                <li className={sideBar.name === "ProfileSaya" ? style.active : undefined}>
                  <Link to="/profile" onClick={() => setSidebar({ components: <ProfileSaya />, name: "ProfileSaya" })}>
                    <h5 className="h4-sb">Profile Saya</h5>
                  </Link>
                </li>
                <li className={sideBar.name === "ProfileKeluarga" ? style.active : undefined}>
                  <Link to="/profile" onClick={() => setSidebar({ components: <ProfileKeluarga />, name: "ProfileKeluarga" })}>
                    <h5 className="h4-sb">Anggota Keluarga</h5>
                  </Link>
                </li>
                <li className={sideBar.name === "ProfileUbahPassword" ? style.active : undefined}>
                  <Link to="/profile" onClick={() => setSidebar({ components: <ProfileUbahPassword />, name: "ProfileUbahPassword" })}>
                    <h5 className="h4-sb">Ubah Password</h5>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col span={19} offset={1}>
              {sideBar.components}
            </Col>
          </Row>
        </Col>
      </Row>
    </CitizenLayouts>
  );
};

export default Profile;
