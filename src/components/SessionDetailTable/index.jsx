import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Table, Row, Col } from "antd";
import Column from "antd/lib/table/Column";
import { useEffect, useState } from "react";

import styles from "./SessionDetailTable.module.css";
import CustomButton from "../CustomButton";
import SessionDetailModal from "../SessionDetailModal";
import axiosInstance from "../../networks/apis";

export default function SessionDetailTable({ sessionId }) {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/booking", { data: "" })
      .then((response) => {
        setRawData(
          // Filter booking by schedule id
          response.data.data.filter((item) => item.schedule.id == sessionId)
        );

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredData = rawData.map((value) => {
      return {
        id: value.id,
        booking_pass: value.booking_pass,
        name: value.user.name,
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
    <>
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <CustomButton variant="primary">Download</CustomButton>
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
      <div className={styles.tableWrapper}>
        <Table
          loading={loading}
          dataSource={tableData}
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ x: 240 }}
          rowKey="id"
        >
          <Column title="Id Sesi" dataIndex="id" key="id" />
          <Column title="Nama User" dataIndex="name" key="name" />
          <Column
            title="No Antrian"
            dataIndex="booking_pass"
            key="booking_pass"
          />

          <Column
            title="Action"
            key="action"
            render={(_, record, index) => (
              <div className={styles.actionContainer}>
                <SessionDetailModal data={rawData[index]} />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
}
