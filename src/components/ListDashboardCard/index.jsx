import { Col } from "antd";
import { useEffect, useState } from "react";
import { FaSyringe, FaUsers } from "react-icons/fa";
import DashboardCard from "../DashboardCard";

export default function ListDashboardCard({ schedule, activities }) {
  const [registrant, setRegistrant] = useState([]);
  const [quota, setQuota] = useState([]);

  useEffect(() => {
    let value = 0;
    schedule.forEach((item) => {
      value += item.quota;
    });

    setRegistrant({
      title: "Total Pendaftar",
      icons: <FaUsers />,
      value: activities.length,
    });
    setQuota({ title: "Kuota Vaksin", value, icons: <FaSyringe /> });
  }, [schedule, activities]);

  return (
    <>
      <Col xs={24} lg={12}>
        <DashboardCard
          title={quota.title}
          value={quota.value}
          icons={quota.icons}
        />
      </Col>
      <Col xs={24} lg={12}>
        <DashboardCard
          title={registrant.title}
          value={registrant.value}
          icons={registrant.icons}
        />
      </Col>
    </>
  );
}
