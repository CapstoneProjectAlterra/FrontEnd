import React from "react";
import { Collapse, Row, Col, Breadcrumb } from "antd";
import style from "./Faq.module.css";
import { Link } from "react-router-dom";
import CitizenLayout from "../../../layouts/CitizenLayout";
import { isAuthenticatedUser } from "../../../utils/helpers/Auth";

const { Panel } = Collapse;

export default function Faq() {
  return (
    <>
      <CitizenLayout auth={isAuthenticatedUser()}>
        <Col span={20} offset={2}>
          <Breadcrumb
            className={style.breadcrumb}
            style={{ marginBottom: "16px" }}>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/faq'>Faq</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <h1 className={style.title}>FAQ</h1>
        <Row justify='center'>
          <Col span={16}>
            <Collapse defaultActiveKey={[]}>
              <Panel
                className={style.panel}
                header={
                  <h4
                    style={{
                      color: "var(  --color-white)",
                      marginBottom: "0",
                    }}>
                    Saya ingin booking sesi vaksinasi untuk anggota keluarga.
                    Bagaimana caranya?
                  </h4>
                }
                key='1'>
                <p className='body1'>
                  Untuk dapat melakukan booking vaksinasi anggota keluarga,
                  dapat memilih fasilitas kesehatan serta sesi dan jenis vaksin
                  yang akan dibooking. Anda dapat menambahkan anggota keluarga
                  anda pada tombol tambah yang tersedia di halaman booking sesi
                  vaksinasi.
                </p>
              </Panel>
              <Panel
                className={style.panel}
                header={
                  <h4
                    style={{
                      color: "var(  --color-white)",
                      marginBottom: "0",
                    }}>
                    Saya belum melengkapi profil saya, apakah saya dapat
                    melakukan booking sesi vaksinasi?
                  </h4>
                }
                key='2'>
                <p className='body1'>
                  Anda tidak dapat melakukan booking sesi vaksinasi selama
                  profil anda belum dilengkapi.
                </p>
              </Panel>
              <Panel
                className={style.panel}
                header={
                  <h4
                    style={{
                      color: "var(  --color-white)",
                      marginBottom: "0",
                    }}>
                    Apakah saya akan mendapatkan sertifikat vaksin dalam
                    aplikasi setelah melakukan vaksinasi?
                  </h4>
                }
                key='3'>
                <p className='body1'>
                  Tidak. GetVaccine hanya membantu pelayanan booking sesi
                  vaksinasi untuk mendapatkan tiket vaksin pada fasilitas
                  kesehatan terpilih.
                </p>
              </Panel>
              <Panel
                className={style.panel}
                header={
                  <h4
                    style={{
                      color: "var(  --color-white)",
                      marginBottom: "0",
                    }}>
                    Di mana saya dapat melihat detail tiket vaksin saya?
                  </h4>
                }
                key='4'>
                <p className='body1'>
                  Anda dapat melihat tiket vaksin anda pada halaman Tiket.
                </p>
              </Panel>
              <Panel
                className={style.panel}
                header={
                  <h4
                    style={{
                      color: "var(  --color-white)",
                      marginBottom: "0",
                    }}>
                    Apa saja yang akan saya dapatkan dari GetVaccine?
                  </h4>
                }
                key='5'>
                <p className='body1'>
                  GetVaccine memberikan layanan utama yaitu booking sesi
                  vaksinasi, selain itu pengguna juga dapat mendapatkan
                  informasi terkait berita vaksin, fasilitas kesehatan, serta
                  jadwal sesi vaksinasi di setiap fasilitas kesehatan.
                </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </CitizenLayout>
    </>
  );
}
