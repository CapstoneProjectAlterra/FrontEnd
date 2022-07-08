import { Row, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import { TicketModal, CustomButton } from "..";
import { Link } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";
import style from "./TicketList.module.css";
import { TicketNotFound } from "../../assets";

export default function TicketList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTicket = async () => {
    const userId = getUserId();
    const booking = await axiosInstance
      .get("/booking", { data: "" })
      .then((res) => res.data.data);

    const bookingIds = booking
      .filter((item) => item.user.id === userId)
      .map((item) => item.id);

    if (bookingIds) {
      const ticket = await axiosInstance
        .get("/detail", { data: "" })
        .then((res) =>
          res.data.data.filter(
            (item) => bookingIds.indexOf(item.booking_id) !== -1
          )
        );

      setData(ticket);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <>
      {loading ? (
        <Row align="middle" justify="center">
          <Spin />
        </Row>
      ) : (
        <>
          {data.length === 0 ? (
            <Row align="middle" justify="center">
              <Col xs={24} md={16} lg={10} className={style.notFoundContainer}>
                <img src={TicketNotFound} alt="Ticket not found illustration" />
                <div className={style.notFoundContent}>
                  <h2>Kamu belum memiliki tiket</h2>
                  <h4>
                    Kamu akan mendapatkan tiket jika telah melakukan pemesanan
                    vaksinasi
                  </h4>
                  <CustomButton variant="primary" style={{ marginTop: "40px" }}>
                    <Link to="/vaccine">Pesan Vaksinasi</Link>
                  </CustomButton>
                </div>
              </Col>
            </Row>
          ) : (
            <Row gutter={[76, 48]} style={{ marginTop: "16px" }}>
              {data.map((item) => (
                <Col
                  xs={24}
                  md={12}
                  lg={8}
                  key={item.booking_id + item.family_id}
                >
                  <TicketModal
                    data={item}
                    key={item.booking_id + item.family_id}
                  />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
}
