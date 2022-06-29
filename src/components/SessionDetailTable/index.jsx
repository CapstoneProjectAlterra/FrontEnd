import { SearchOutlined } from "@ant-design/icons";
import { BiDetail } from "react-icons/bi";
import { Button, Form, Input, Table, Tooltip } from "antd";
import Column from "antd/lib/table/Column";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SessionDetailTable.module.css";
import CustomButton from "../CustomButton";
import SessionDetailModal from "../SessionDetailModal";

// const initSessionData = {
//   id: 1,
//   vaccine_id: 1,
//   vaccine_name: "Sinovac",
//   vaccination_date: "02-04-2022",
//   operational_hour_start: "08:00",
//   operational_hour_end: "09:00",
//   quota: 200,
//   dose: "DOSIS_1",
// };

const initBookingData = [];
for (let i = 1; i <= 100; i++) {
  initBookingData.push({
    // Booking Table
    booking_id: i,
    booking_date: "29-11-2022",
    booking_pass: i,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "John Doe",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 2,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2022-06-18",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  });
}

export default function SessionDetailTable({ sessionId }) {
  const [data, setData] = useState(initBookingData);
  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = initBookingData.filter((value) =>
      Object.keys(value).some((key) =>
        value[key].toString().toLowerCase().includes(lowerCaseValue)
      )
    );

    setData(filteredData);
  };
  return (
    <>
      <div className={styles.searchWrapper}>
        <CustomButton variant="primary">Download</CustomButton>

        <Form className={styles.searchForm} onFinish={search}>
          <Form.Item name="keyword">
            <Input
              type="search"
              placeholder="Search"
              className={styles.search}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.tableWrapper}>
        <Table
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ x: 240 }}
          rowKey="booking_id"
        >
          <Column title="Id Sesi" dataIndex="booking_id" key="booking_id" />
          <Column title="Nama User" dataIndex="full_name" key="full_name" />
          <Column
            title="No Antrian"
            dataIndex="booking_pass"
            key="booking_pass"
          />

          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <div className={styles.actionContainer}>
                <SessionDetailModal data={record} />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
}
