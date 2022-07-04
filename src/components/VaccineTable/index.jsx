/** React */
import React, { useState } from "react";

/** Antd Design */
import { Form, Button, Input, Table } from "antd";
import Column from "antd/lib/table/Column";

/** Antd Design Icons */
import { SearchOutlined } from "@ant-design/icons";

/** Components */
import VaccineModalAdd from "../VaccineModalAdd";
import VaccineModalEdit from "../VaccineModalEdit";
import VaccineModalDelete from "../VaccineModalDelete";

/** Style */
import style from "./VaccineTable.module.css";

const VaccineTable = () => {
  const dataList = [];
  const [data, setData] = useState(dataList);

  for (let i = 1; i <= 50; i++) {
    dataList.push({
      id: i,
      vaccine_id: 1,
      vaccine_name: "Astra Zeneca",
      kuota: 200,
    });
  }
  for (let i = 51; i <= 101; i++) {
    dataList.push({
      id: 2,
      vaccine_id: 2,
      vaccine_name: "Sinovac",
      kuota: 200,
    });
  }
  for (let i = 102; i <= 153; i++) {
    dataList.push({
      id: i,
      vaccine_id: 1,
      vaccine_name: "Moderna",
      kuota: 200,
    });
  }

  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = dataList.filter((value) => Object.keys(value).some((key) => value[key].toString().toLowerCase().includes(lowerCaseValue)));

    setData(filteredData);
  };

  return (
    <>
      <div className={style.searchWrapper}>
        <VaccineModalAdd />

        <Form className={style.searchForm} onFinish={search}>
          <Form.Item name="keyword">
            <Input type="search" placeholder="Search" className={style.search} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="tableWrapper">
        <Table dataSource={data} pagination={{ position: ["bottomCenter"] }} scroll={{ x: 240 }} rowKey="id">
          <Column title="Id Sesi" dataIndex="id" key="id" />
          <Column title="Jenis Vaksin" dataIndex="vaccine_name" key="vaccine_name" />
          <Column title="Kuota" dataIndex="kuota" key="kuota" />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <div className={style.actionContainer}>
                <VaccineModalEdit data={record} />

                <VaccineModalDelete data={record.id} />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default VaccineTable;
