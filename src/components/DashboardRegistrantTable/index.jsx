import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Table } from "antd";
import Column from "antd/lib/table/Column";
import { useState } from "react";
import moment from "moment";

import styles from "./DashboardRegistrantTable.module.css";

const dataList = [];

for (let i = 1; i <= 100; i++) {
  dataList.push({
    id: i,
    schedule_id: i,
    full_name: "John Brown " + i,
    booking_date: "01-01-2020 08:00:00",
    booking_pass: i,
  });
}

export default function DashboardRegistrantTable() {
  const [data, setData] = useState(dataList);
  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = dataList.filter((value) =>
      Object.keys(value).some((key) =>
        value[key].toString().toLowerCase().includes(lowerCaseValue)
      )
    );

    setData(filteredData);
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <h3>Aktivitas Pendaftar Vaksinasi</h3>
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
      <Table
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: 240 }}
        rowKey="id"
      >
        <Column title="Id Pemesan" dataIndex="id" key="id" />
        <Column title="Nama Pemesan" dataIndex="full_name" key="full_name" />
        <Column
          title="Waktu Pesan"
          dataIndex="booking_date"
          key="booking_time"
          render={(value) => moment(value).format("HH:mm")}
        />
        <Column
          title="Tanggal Pesan"
          dataIndex="booking_date"
          key="booking_date"
          render={(value) => moment(value).format("DD-MM-YYYY")}
        />
        <Column title="Id Sesi" dataIndex="schedule_id" key="schedule_id" />
        <Column
          title="No Antrian"
          dataIndex="booking_pass"
          key="booking_pass"
        />
      </Table>
    </div>
  );
}
