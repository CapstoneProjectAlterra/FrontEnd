import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import { AboutUs } from "../../../assets";
import style from "./About.module.css";
import { LinkedinFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const layanan = [
  {
    key: "1",
    title: "Pemesanan Vaksin Secara Daring",
    content: "Masyarakat dapat memesan vaksin dengan mudah melalui gawainya",
    img: "assets/illustration/layanan-1.png",
  },
  {
    key: "2",
    title: "Pengelolaan Sesi Vaksinasi",
    content: "Fasilitas kesehatan dapat menjadwalkan sesi vaksinasi",
    img: "assets/illustration/layanan-2.png",
  },
  {
    key: "3",
    title: "Pengelolaan Stok Vaksin",
    content:
      "Fasilitas kesehatan dapat mengatur jumlah vaksin yang masuk dan keluar",
    img: "assets/illustration/layanan-3.png",
  },
];

const team = [
  {
    key: "1",
    name: "Muhammad Rafli",
    role: "UI Engineer",
    description:
      "Mahasiswa Teknologi Industri Pertanian Unpad. Bertanggung jawab dalam merancang design system sekaligus membuat komponennya menggunakan React dan Ant Design",
    img: "assets/illustration/rafli.png",
    linkedin: "https://www.linkedin.com/in/muhammadrafli49/",
  },
  {
    key: "2",
    name: "Cut Putri Khairani",
    role: "UI/UX Designer",
    description:
      "Mahasiswa Universitas Maritim Raja Ali Haji. Bertanggung jawab dalam membuat design wireframes serta mockup website dan mobile dengan menggunakan figma. ",
    img: "assets/illustration/icut.png",
    linkedin: "https://www.linkedin.com/in/cut-putri-khairani-5634b7241/",
  },
  {
    key: "3",
    name: "Harnanda Rafika Anjani",
    role: "Quality Engineer",
    description:
      "Mahasiswa UPNVJ. Bertanggungjawab dalam hal pengujian aplikasi secara manual dan automation menggunakan beberapa tools seperti Postman, Katalon Studio, dan Excel.",
    img: "assets/illustration/nanda.png",
    linkedin: "https://www.linkedin.com/in/harnanda-rafika-anjani-8b2547207/",
  },
  {
    key: "4",
    name: "Rizco Renova",
    role: "Mobile Engineer Flutter",
    description:
      "Mahasiswa Universitas Bina Sarana Informatika Margonda Depok. Dalam project ini saya bertanggung jawab dalam pembuatan aplikasi mobile dengan menggunakan flutter, khususnya untuk android.",
    img: "assets/illustration/rizco.png",
    linkedin: "https://www.linkedin.com/in/rizco-renova-490059240/",
  },
  {
    key: "5",
    name: "Dimas Senjani Sukma",
    role: "Back End Engineer Java Spring Boot",
    description:
      "Mahasiswa Universitas Komputer Indonesia. Dalam project ini bertanggung jawab dalam pembuatan REST API menggunakan framework Spring Boot berbasis Java.",
    img: "assets/illustration/dimas.png",
    linkedin: "https://www.linkedin.com/in/dimas-senjani-sukma-425298226/",
  },
  {
    key: "6",
    name: "Achmad Solehuddin",
    role: "Front End Developer",
    description:
      "Universitas Pembangunan Nasional Veteran Jakarta Bertanggungjawab dalam membuat tampilan front end website dengan React JS.",
    img: "assets/illustration/achmad.png",
    linkedin: "https://www.linkedin.com/in/achmad-solehuddin-4b145218b/",
  },
  {
    key: "7",
    name: "Nur Laili Amalia",
    role: "Front End React JS",
    description:
      "Mahasiswa Teknik Infomartika Universitas Brawijaya. Bertanggungjawab dalam pembuatan website dengan menggunakan React JS.",
    img: "assets/illustration/laili.png",
    linkedin: "https://id.linkedin.com/in/nur-laili-amalia-203aa5215",
  },
  {
    key: "8",
    name: "Muh Khadavy",
    role: "Back End Engineer Java Spring Boot",
    description:
      "Mahasiswa Informatika Institut Teknologi Telkom Purwokerto .Bertanggung jawab dalam Back-End JWT.",
    img: "assets/illustration/khadavy.png",
    linkedin: "https://www.linkedin.com/in/muhkhadavy/",
  },
  {
    key: "9",
    name: "Moch Nasichun Amin",
    role: "Front End React JS",
    description:
      "Mahasiswa Universitas Pembangunan Veteran Jawa Timur. Dalam Project ini saya sebagai salah satu team front end website menggunakan react js.",
    img: "assets/illustration/amin.png",
    linkedin: "https://www.linkedin.com/in/nasichun-amin-b2ba42161/",
  },
  {
    key: "10",
    name: "Muhammad Asraf Takayuma",
    role: "Front End React JS",
    description:
      "Mahasiswa Informatika Universitas Jember. Betanggung jawab dalam hal front end website dengan mengerjakan fitur, profile admin, vaksin admin, dan profile citizen",
    img: "assets/illustration/asraf.png",
    linkedin: "https://www.linkedin.com/in/takayumaja/",
  },
  {
    key: "11",
    name: "Arika",
    role: "Back End Engineer Java Spring Boot",
    description:
      "Mahasiswa Matematika Universitas Samudra. Bertanggung jawab dalam hal Back-End mengerjakan mock api.",
    img: "assets/illustration/arika.png",
    linkedin: "http://www.linkedin.com/in/arika-arika-730712241",
  },
  {
    key: "12",
    name: "M. Abdush Shidqi",
    role: "UI/UX Designer",
    description:
      "Mahasiswa Teknik Infomartika Politeknik Negeri Malang. Bertanggungjawab dalam pembuatan desain website dengan menggunakan Figma.",
    img: "assets/illustration/diki.png",
    linkedin: "http://www.linkedin.com/",
  },
];

export default function About() {
  return (
    <>
      <Col span={20} offset={2}>
        <Breadcrumb
          className={style.breadcrumb}
          style={{ marginBottom: "24px" }}>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/about'>About</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>

      <Row justify='center' style={{ marginBottom: "100px" }}>
        <Col lg={{ span: 8, offset: 1 }} xs={{ span: 20 }} justify='end'>
          <img src={AboutUs} alt='aboutus' className={style.img} />
        </Col>
        <Col lg={{ span: 9 }} xs={{ span: 20 }}>
          <h1 style={{ marginTop: "24px" }}>Tentang Kami</h1>
          <p className='body1' style={{ marginTop: "48px" }}>
            GetVaccine merupakan aplikasi yang dibangun untuk membantu
            pemerintah dalam penyelenggaraan vaksinasi COVID-19.
          </p>
          <p className='body1' style={{ marginTop: "30px" }}>
            GetVaccine memberikan fasilitas bagi masyarakat dalam rangka
            kemudahan pelayanan booking sesi vaksinasi. Selain itu, GetVaccine
            dibangun sebagai layanan yang dapat digunakan sesuai kebutuhan
            pengguna baik dari segi masyarakat maupun fasilitas kesehatan.
          </p>
        </Col>
      </Row>

      <span className={style.span}>
        <h2 style={{ margin: "48px" }}>Layanan</h2>{" "}
      </span>
      <Row
        className={style.layanan}
        justify='center'
        gutter={[0, 48]}
        style={{ paddingLeft: "48px", paddingRight: "48px", gap: "64px" }}>
        {layanan.map((item) => {
          return (
            <Col
              lg={{ span: 6 }}
              md={{ span: 15 }}
              xs={{ span: 20 }}
              key={item.key}
              justify='center'
              className={style.col1}>
              <Col>
                <img
                  src={require(`../../../${item.img}`)}
                  alt='layanan'
                  className={style.img}
                />
                <h4 className={style.textcontent}>{item.title}</h4>
                <p className='body1' style={{ marginBotton: "16px" }}>
                  {item.content}
                </p>
              </Col>
            </Col>
          );
        })}
      </Row>

      <h2 className={style.textabout}>Meet The Team</h2>

      <Row
        justify='center'
        gutter={[0, 48]}
        style={{ paddingLeft: "48px", paddingRight: "48px", gap: "64px" }}>
        {team.map((item) => {
          return (
            <Col
              lg={{ span: 6 }}
              md={{ span: 10 }}
              xs={{ span: 24 }}
              key={item.key}
              justify='center'>
              <Col>
                <img
                  src={require(`../../../${item.img}`)}
                  alt='team'
                  className={style.img}
                />
                <div>
                  <h4 style={{ marginTop: "16px" }}>
                    {item.name}{" "}
                    <a
                      href={item.linkedin}
                      target='_blank'
                      style={{ color: "var(--color-primary)" }}>
                      <LinkedinFilled />
                    </a>
                  </h4>
                  <p className='body1' style={{ marginTop: "4px" }}>
                    {item.role}
                  </p>
                  <p className='body2' style={{ marginTop: "8px" }}>
                    {item.description}
                  </p>
                </div>
              </Col>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
