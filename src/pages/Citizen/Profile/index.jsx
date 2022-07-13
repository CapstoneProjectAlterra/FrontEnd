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

  // return (
  //   <>
  //     <Row className={style.navbar}>
  //       <Col span={24}>
  //         <Navbar />
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col span={20} offset={2}>
  //         <Breadcrumb className={style.linkPath}>
  //           <BreadcrumbItem>Home</BreadcrumbItem>
  //           <BreadcrumbItem className={style.linkPathBold}>Profile Saya</BreadcrumbItem>
  //         </Breadcrumb>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col span={16} offset={4}>
  //         <Row className={style.title}>
  //           <Col>
  //             <h1>Profile Saya</h1>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col span={24}>
  //             <div className={style.label}>
  //               <p>Nama</p>
  //               <h3>{data.nama}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>NIK</p>
  //               <h3>{data.nik}</h3>
  //             </div>
  //             <Row justify="space-between">
  //               <Col>
  //                 <div className={style.label}>
  //                   <p>Tempat Lahir</p>
  //                   <h3>{data.tempatLahir}</h3>
  //                 </div>
  //               </Col>
  //               <Col>
  //                 <div className={style.label}>
  //                   <p>Tanggal Lahir</p>
  //                   <h3>{data.tanggalLahir}</h3>
  //                 </div>
  //               </Col>
  //             </Row>
  //             <div className={style.label}>
  //               <p>Jenis Kelamin</p>
  //               <h3>{data.jenisKelamin}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>Status dalam Keluarga</p>
  //               <h3>{data.status}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>Email</p>
  //               <h3>{data.email}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>No.HP</p>
  //               <h3>{data.noHp}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>Alamat Rumah di KTP</p>
  //               <h3>{data.alamatKtp}</h3>
  //             </div>
  //             <div className={style.label}>
  //               <p>Alamat Rumah Saat ini</p>
  //               <h3>{data.alamatSekarang}</h3>
  //             </div>
  //             <Row className={style.btnEdit}>
  //               <Col span={24}>
  //                 <CustomButton variant="primary" block="true" onClick={() => handleEdit(1, data)}>
  //                   Edit Profile
  //                 </CustomButton>
  //               </Col>
  //             </Row>
  //           </Col>
  //         </Row>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col span={24}>
  //         <Footer />
  //       </Col>
  //     </Row>
  //   </>
  // );
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
