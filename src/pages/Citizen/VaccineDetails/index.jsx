import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Row, Col, DatePicker, Breadcrumb, Modal, Button, Form, Input} from "antd";
import {
  CardBooking,
  CustomButton,
  ListFamily,
  CustomInput,
  AddFamily,
  SubmitFormButton,
} from "../../../components";
import moment from "moment";
import {imgCard} from "../../../assets";
import {AiOutlineUserAdd} from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi";
import style from "./VaccineDetails.module.css";

export default function VaccineDetails() {
  // change background color only on this page with useEffect
  useEffect(() => {
    document.body.style.backgroundColor = "#f5fdfe";
  }, []);

  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [session, setSession] = useState();
  const [listFams, setListFams] = useState([]);

  //Logic Modal Add Family
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    console.log("Success:", values);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  //sessionDetail
  let {HospitalId} = useParams();

  //data dummy
  const data = {
    src: imgCard,
    title: "Rumah Sakit Umum Majalaya",
  };

  //Logic DatePicker
  const onChangeDate = (date, dateString) => {
    // console.log(date);
    // console.log(dateString);
    setDate(dateString);
  };

  //logic handleClick
  const handleClickFams = () => {
    // console.log(values);
    console.log(session);
    console.log(date);
    console.log(listFams);
  };

  return (
    <div>
      <Row justify="center">
        <Row justify="start">
          <Col>
            <Breadcrumb style={{marginTop: "48px", marginLeft: "48px"}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Vaksinasi</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Fasilitas Kesehatan</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <h5 style={{color: "#06919d"}}>Rumah Sakit Majalaya</h5>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Col span={20} className={style.body}>
          <Row justify="space-between" style={{margin: "40px 20px"}}>
            <Col span={7}>
              <img src={imgCard} alt="Image" className={style.image} />
            </Col>
            <Col span={16}>
              <div className={style.detail}>
                <h2>Rumah Sakit Umum Majalaya</h2>
                <span className={style.location}>
                  <HiLocationMarker className={style.icon} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </span>
              </div>
              <div>
                <div>
                  <DatePicker
                    className="input"
                    defaultValue={moment()}
                    format="DD-MM-YYYY"
                    style={{width: "638px"}}
                    onChange={onChangeDate}
                  />
                </div>
                <div className={style.cardVaccine}>
                  <Row gutter={[52, 30]}>
                    <Col span={23} className="gutter-row">
                      <CardBooking book={session} setBook={setSession} />
                      <div className={style.family}>
                        <h4>Daftar Anggota Keluarga</h4>
                        <div>
                          <ListFamily list={listFams} setListFams={setListFams} />
                        </div>
                      </div>
                      <div style={{marginTop: "32px"}}>
                        <Button type="primary" onClick={showModal}>
                          Tambah Keluarga
                        </Button>
                        <Modal
                          visible={visible}
                          title="Tambahkan Anggota Keluarga"
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={[
                            <Button key="submit" type="primary" onClick={handleOk}>
                              Tambahkan
                            </Button>,
                          ]}
                        >
                          <AddFamily />
                        </Modal>
                        <CustomButton variant="secondary" block>
                          <AiOutlineUserAdd
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600px",
                            }}
                          >
                            Tambah Anggota Keluarga
                          </span>
                        </CustomButton>
                        <CustomButton
                          variant="primary"
                          block
                          style={{marginTop: "24px"}}
                          onClick={handleClickFams}
                        >
                          Pesan Vaksinasi
                        </CustomButton>
                        <SubmitFormButton handleClickFams={handleClickFams}>
                          Pesan Vaksinasi
                        </SubmitFormButton>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
