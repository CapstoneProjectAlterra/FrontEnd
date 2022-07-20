import { Col, Row, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import AddFamily from "../AddFamily";
import ListFamily from "../ListFamily";
import style from "./ProfileKeluarga.module.css";
const ProfileKeluarga = () => {
  const [family, setFamily] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchToggle, setRefetchToggle] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/family", { data: "" })
      .then((response) => {
        setFamily(
          response.data.data.filter(
            (item) =>
              item.profile.user_id === getUserId() && item.id !== getUserId()
          )
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refetchToggle]);

  return (
    <>
      {loading ? (
        <Row align="middle" justify="center">
          <Spin />
        </Row>
      ) : (
        <>
          <Row justify="space-between">
            <Col>
              <div className={style.title}>
                <h1>Anggota Keluarga</h1>
              </div>
            </Col>
            <Col>
              <AddFamily
                refetchToggle={refetchToggle}
                setRefetchToggle={setRefetchToggle}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ListFamily
                dataFamily={family}
                refetchToggle={refetchToggle}
                setRefetchToggle={setRefetchToggle}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProfileKeluarga;
