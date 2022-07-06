import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Table } from "antd";
import Column from "antd/lib/table/Column";
import { useEffect, useState } from "react";
import moment from "moment";

import styles from "./DashboardRegistrantTable.module.css";

export default function DashboardRegistrantTable({ activities }) {
  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setRawData(activities);
  }, [activities]);

  useEffect(() => {
    const filteredData = rawData.map((value) => {
      return {
        booking_id: value.booking_id,
        nik: value.family?.nik,
        name: value.family?.name,
        booking_time: moment(value.booking?.booking_date, "hh:mm").format(
          "HH:mm"
        ),
        booking_date: moment(value.booking?.booking_date, "dd-mm-yyy").format(
          "DD-MM-YYYY"
        ),
        schedule_id: value.booking?.schedule?.id,
        booking_pass: value.booking?.booking_pass,
      };
    });

    setData(filteredData);
    setTableData(filteredData);
  }, [rawData]);

  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = data.filter((value) =>
      Object.keys(value).some((key) =>
        value[key].toString().toLowerCase().includes(lowerCaseValue)
      )
    );

    setTableData(filteredData);
  };

  return (
    <div className={styles.container}>
      <Row
        justify="space-between"
        align="middle"
        style={{ margin: "24px 0px" }}
      >
        <Col xs={24} md={12}>
          <h3>Aktivitas Pendaftar Vaksinasi</h3>
        </Col>
        <Col xs={24} md={6}>
          <div className={styles.searchWrapper}>
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
        </Col>
      </Row>
      <Table
        dataSource={tableData}
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ x: 240 }}
        rowKey="booking_id"
      >
        <Column title="NIK" dataIndex="nik" key="nik" />
        <Column title="Nama Pemesan" dataIndex="name" key="name" />
        <Column
          title="Waktu Pesan"
          dataIndex="booking_time"
          key="booking_time"
        />
        <Column
          title="Tanggal Pesan"
          dataIndex="booking_date"
          key="booking_date"
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
