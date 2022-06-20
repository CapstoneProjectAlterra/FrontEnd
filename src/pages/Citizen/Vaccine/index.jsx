import { Col, Row, Input, Card } from "antd";
import React from "react";
import banner from "../../../assets/illustration/banner.png";
import faskes from "../../../assets/illustration/faskes.png";
import { CustomInput, CustomButton } from "../../../components";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineBank, AiOutlineSearch } from "react-icons/ai";
import style from "./Vaccine.module.css";

export default function Vaccine() {
  // Data Card
  const { Meta } = Card;
  const data = [
    {
      src: faskes,
      title: "Rumah Sakit A",
      kuota: "kuota tersedia",
    },
    {
      src: faskes,
      title: "Rumah Sakit B",
      kuota: "kuota sudah habis",
    },
    {
      src: faskes,
      title: "Rumah Sakit C",
      kuota: "kuota tersedia",
    },
    {
      src: faskes,
      title: "Rumah Sakit D",
      kuota: "kuota sudah habis",
    },
    {
      src: faskes,
      title: "Rumah Sakit E",
      kuota: "kuota tersedia",
    },
    {
      src: faskes,
      title: "Rumah Sakit F",
      kuota: "kuota tersedia",
    },
  ];

  // //Logic Search
  // const { Search } = Input;
  // const onSearch = (value) => console.log(value);

  return (
    <div className="container">
      <div className="content">
        <div className={style.banner}>
          <img src={banner} alt="Banner" className={style.imageBanner} />
        </div>
        <div className={style.title}>
          <h2>
            Temukan Fasilitas Kesehatan Terdekat
            <br />
            Untuk Vaksinasi Covid - 19
          </h2>
        </div>

        <div className={style.search}>
          <CustomInput
            placeholder="Search by city, province, postal code..."
            style={{
              width: "883px",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
          <CustomButton
            variant="primary"
            style={{
              width: "56px",
              height: "56px",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <AiOutlineSearch className={style.iconSearch} />
          </CustomButton>
        </div>

        {/* {data.map((card) => {
          return (
            <div className={style.cardContent}>
              <Card
                cover={<img src={card.src} alt="Image Card" />}
                className={style.testCard}
              >
                <Meta title={card.title} description={card.kuota} />
              </Card>
            </div>
          );
        })} */}

        {data.map((card) => {
          return (
            <Row className={style.mainCard}>
              {/* <Col span={24} className={style.mainCard}> */}
              <div className={style.card}>
                <section>
                  <div className={style.cardImage}>
                    <img src={card.src} alt="card image" />
                  </div>
                  <span className={style.titleCard}>
                    <AiOutlineBank className={style.icon1} />
                    <h4>{card.title}</h4>
                  </span>
                  <span className={style.descriptionCard}>
                    <IoDocumentTextOutline className={style.icon1} />
                    <p>{card.kuota}</p>
                  </span>
                </section>
              </div>
              {/* </Col> */}
            </Row>
          );
        })}
      </div>
    </div>
  );
}
