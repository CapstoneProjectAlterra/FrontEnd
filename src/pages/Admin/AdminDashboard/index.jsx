import AdminLayout from "../../../layouts/AdminLayout";
import {
  Chart,
  DashboardRegistrantTable,
  ListDashboardCard,
  DashboardRecentTable,
} from "../../../components";
import { Row, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../../networks/apis";
import { getUserId } from "../../../utils/helpers/Auth";

export default function AdminDashboard() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/schedule", { data: "" })
      .then((response) => {
        setSchedule(
          response.data.data.filter(
            (item) => item.facility.profile.user_id === getUserId()
          )
        );
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/detail", { data: "" })
      .then((response) => {
        const scheduleIds = schedule.map((item) => item.id);
        setActivities(
          response.data.data.filter(
            (item) => scheduleIds.indexOf(item.booking.schedule.id) !== -1
          )
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [schedule]);

  return (
    <AdminLayout>
      <div style={{ paddingTop: "80px" }}>
        {loading ? (
          <Row align="middle" justify="center">
            <Spin />
          </Row>
        ) : (
          <Row gutter={[24, 24]}>
            <Col lg={14}>
              <Row gutter={[24, 24]}>
                <ListDashboardCard
                  schedule={schedule}
                  activities={activities}
                />
                <Col span={24}>
                  <Chart schedule={schedule} activities={activities} />
                </Col>
              </Row>
            </Col>
            <Col xs={24} lg={10}>
              <DashboardRecentTable schedule={schedule} />
            </Col>
            <Col lg={24}>
              <DashboardRegistrantTable
                schedule={schedule}
                activities={activities}
              />
            </Col>
          </Row>
        )}
      </div>
    </AdminLayout>
  );
}
