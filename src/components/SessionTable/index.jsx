import { SearchOutlined } from "@ant-design/icons";
import { BiDetail } from "react-icons/bi";
import { Button, Form, Input, Table, Tooltip, Row, Col } from "antd";
import Column from "antd/lib/table/Column";
import { useState } from "react";
import { Link } from "react-router-dom";
import SessionModalAdd from "../SessionModalAdd";
import SessionModalDelete from "../SessionModalDelete";
import SessionModalEdit from "../SessionModalEdit";

import styles from "./SessionTable.module.css";

const dataList = [];

for (let i = 1; i <= 100; i++) {
  dataList.push({
    id: i,
    vaccine_id: 1,
    vaccine_name: "Sinovac",
    vaccination_date: "02-04-2022",
    operational_hour_start: "08:00",
    operational_hour_end: "09:00",
    quota: 200,
    dose: "DOSIS_1",
    // doseText: () => {
    //   if (this.dose === "DOSIS_1") return "Dosis 1";
    //   if (this.dose === "DOSIS_2") return "Dosis 2";
    //   if (this.dose === "BOOSTER") return "Booster";
    // },
  });
}

for (let i = 101; i <= 151; i++) {
  dataList.push({
    id: i,
    vaccine_id: 2,
    vaccine_name: "Astra Zeneca",
    vaccination_date: "02-04-2022",
    operational_hour_start: "10:00",
    operational_hour_end: "11:00",
    quota: 200,
    dose: "DOSIS_2",
    // doseText: () => {
    //   if (this.dose === "DOSIS_1") return "Dosis 1";
    //   if (this.dose === "DOSIS_2") return "Dosis 2";
    //   if (this.dose === "BOOSTER") return "Booster";
    // },
  });
}

export default function SessionTable() {
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
    <>
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <SessionModalAdd />
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
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ x: 240 }}
          rowKey="id"
        >
          <Column title="Id Sesi" dataIndex="id" key="id" />
          <Column
            title="Jenis Vaksin"
            dataIndex="vaccine_name"
            key="vaccine_name"
          />
          <Column
            title="Tanggal"
            dataIndex="vaccination_date"
            key="vaccination_date"
          />
          <Column
            title="Jam Operasional"
            dataIndex={["operational_hour_start", "operational_hour_end"]}
            key="operational_hour"
            render={(_, record) =>
              record.operational_hour_start +
              " - " +
              record.operational_hour_end
            }
          />
          <Column title="Kuota" dataIndex="quota" key="quota" />
          <Column
            title="Dosis"
            dataIndex="dose"
            key="dose"
            render={(_, record) => {
              if (record.dose === "DOSIS_1") return "Dosis 1";
              if (record.dose === "DOSIS_2") return "Dosis 2";
              if (record.dose === "BOOSTER") return "Booster";
            }}
          />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <div className={styles.actionContainer}>
                <Tooltip placement="top" title="Detail">
                  <Button className={styles.button + " " + styles.secondary}>
                    <Link to={"/admin/session/" + record.id}>
                      <BiDetail />
                    </Link>
                  </Button>
                </Tooltip>

                <SessionModalEdit data={record} />

                <SessionModalDelete data={record.id} />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
}
