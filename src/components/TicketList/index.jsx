import { Row, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import { TicketModal } from "..";
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";

export default function TicketList() {
  const [loading, setLoading] = useState(false);
  const [bookingIds, setBookingIds] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/booking", { data: "" })
      .then((response) => {
        setBookingIds(
          response.data.data
            .filter((item) => item.user.id === getUserId())
            .map((item) => item.id)
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/detail", { data: "" })
      .then((response) => {
        setData(
          // Filter detail by booking id
          response.data.data.filter(
            (item) => bookingIds.indexOf(item.booking_id) !== -1
          )
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [bookingIds]);

  return (
    <>
      {loading ? (
        <Row align="middle" justify="center">
          <Spin />
        </Row>
      ) : (
        <Row gutter={[76, 48]}>
          {data.map((item) => (
            <Col xs={24} md={12} lg={8} key={item.booking_id + item.family_id}>
              <TicketModal data={item} key={item.booking_id + item.family_id} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
