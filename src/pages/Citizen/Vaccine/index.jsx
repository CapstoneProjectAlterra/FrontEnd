import { Col, Row, Input, Card, Pagination } from "antd";
import React from "react";
import banner from "../../../assets/illustration/banner.png";
import faskes from "../../../assets/illustration/faskes.png";
import { CustomInput, CustomButton } from "../../../components";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineBank, AiOutlineSearch } from "react-icons/ai";
import style from "./Vaccine.module.css";
import Item from "antd/lib/list/Item";
import { useState } from "react";

export default function Vaccine() {
  // Data Card
  const data = [
    {
      id: 1,
      src: faskes,
      title: "Rumah Sakit A",
      kuota: "kuota tersedia",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
    },
    {
      id: 2,
      src: faskes,
      title: "Rumah Sakit B",
      kuota: "kuota sudah habis",
      kota: "Semarang",
      provinsi: "Jawa Tengah",
    },
    {
      id: 3,
      src: faskes,
      title: "Rumah Sakit C",
      kuota: "kuota tersedia",
      kota: "Semarang",
      provinsi: "Jawa Tengah",
    },
    {
      id: 4,
      src: faskes,
      title: "Rumah Sakit D",
      kuota: "kuota sudah habis",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
    },
    {
      id: 5,
      src: faskes,
      title: "Rumah Sakit E",
      kuota: "kuota tersedia",
      kota: "Bandung",
      provinsi: "Jawa Barat",
    },
    {
      id: 6,
      src: faskes,
      title: "Rumah Sakit F",
      kuota: "kuota tersedia",
      kota: "Semarang",
      provinsi: "Jawa Tengah",
    },
    {
      id: 7,
      src: faskes,
      title: "Rumah Sakit G",
      kuota: "kuota tersedia",
      kota: "Semarang",
      provinsi: "Jawa Tengah",
    },
    {
      id: 8,
      src: faskes,
      title: "Rumah Sakit H",
      kuota: "kuota sudah habis",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
    },
    {
      id: 9,
      src: faskes,
      title: "Rumah Sakit I",
      kuota: "kuota tersedia",
      kota: "Bandung",
      provinsi: "Jawa Barat",
    },
    {
      id: 10,
      src: faskes,
      title: "Rumah Sakit J",
      kuota: "kuota sudah habis",
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
    },
    {
      id: 11,
      src: faskes,
      title: "Rumah Sakit K",
      kuota: "kuota tersedia",
      kota: "Bandung",
      provinsi: "Jawa Barat",
    },
    {
      id: 12,
      src: faskes,
      title: "Rumah Sakit L",
      kuota: "kuota tersedia",
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
    },
    {
      id: 13,
      src: faskes,
      title: "Rumah Sakit M",
      kuota: "kuota tersedia",
      kota: "Yogyakarta",
      provinsi: "DI Yogyakarta",
    },
    {
      id: 14,
      src: faskes,
      title: "Rumah Sakit N",
      kuota: "kuota sudah habis",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
    },
    {
      id: 15,
      src: faskes,
      title: "Rumah Sakit O",
      kuota: "kuota tersedia",
      kota: "Yogyakarta",
      provinsi: "DI Yogyakarta",
    },
    {
      id: 151,
      src: faskes,
      title: "Rumah Sakit P",
      kuota: "kuota sudah habis",
      kota: "Yogyakarta",
      provinsi: "DI Yogyakarta",
    },
    {
      id: 16,
      src: faskes,
      title: "Rumah Sakit Q",
      kuota: "kuota tersedia",
      kota: "Yogyakarta",
      provinsi: "DI Yogyakarta",
    },
    {
      id: 17,
      src: faskes,
      title: "Rumah Sakit R",
      kuota: "kuota tersedia",
    },
    {
      id: 18,
      src: faskes,
      title: "Rumah Sakit S",
      kuota: "kuota tersedia",
    },
    {
      id: 19,
      src: faskes,
      title: "Rumah Sakit T",
      kuota: "kuota sudah habis",
    },
    {
      id: 20,
      src: faskes,
      title: "Rumah Sakit U",
      kuota: "kuota tersedia",
    },
    {
      id: 21,
      src: faskes,
      title: "Rumah Sakit V",
      kuota: "kuota sudah habis",
    },
    {
      id: 22,
      src: faskes,
      title: "Rumah Sakit W",
      kuota: "kuota tersedia",
      kota: "Surabaya",
      provinsi: "Jawa Timur",
    },
    {
      id: 23,
      src: faskes,
      title: "Rumah Sakit X",
      kuota: "kuota tersedia",
    },
  ];

  //Logic Card
  // const idCard = useState()
  // const handleCard = (idx) => {
  //   console.log("Your Card Click ID", idx);
  // };

  //Logic Pagination
  const [state, setState] = useState({
    value: 0,
    minValue: 0,
    maxValue: 9,
  });

  const handleChange = (value) => {
    if (value <= 1) {
      setState({
        minValue: 0,
        maxValue: 9,
      });
    } else {
      setState({
        minValue: (value - 1) * 9,
        maxValue: value * 9,
      });
    }
  };

  //Logic Search
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // const handleClickSearch = (e) => {

  // };

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
            onChange={handleSearch}
          />
          <CustomButton
            variant="primary"
            style={{
              width: "56px",
              height: "56px",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            // onClick={handleClickSearch}
          >
            <AiOutlineSearch className={style.iconSearch} />
          </CustomButton>
        </div>

        <Row className={style.mainCardContainer}>
          {data.length > 0 &&
            data.slice(state.minValue, state.maxValue) &&
            data
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                } else {
                  console.log("Data Tidak Ada");
                  // return <p>Data Tidak Tersedia</p>;
                }
              })
              .map((item, itemTdx) => {
                return (
                  <Col
                    className={style.card}
                    key={itemTdx}
                    // onClick={handleCard}
                  >
                    <div className={style.cardImage}>
                      <img src={item.src} alt="Card Image" />
                    </div>
                    <div className={style.cardDetails}>
                      <span className={style.titleCard}>
                        <AiOutlineBank className={style.icon} />
                        <h4>{item.title}</h4>
                      </span>
                      <span className={style.descriptionCard}>
                        <IoDocumentTextOutline className={style.icon} />
                        <p style={{ paddingTop: "5px" }}>{item.kuota}</p>
                        <p>{item.id}</p>
                      </span>
                    </div>
                  </Col>
                );
              })}
        </Row>

        <div className={style.pagination}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={9}
            onChange={handleChange}
            total={data.length}
          />
        </div>
      </div>
    </div>
  );
}
