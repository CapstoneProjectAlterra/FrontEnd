/** React */
import React, { useState } from "react";

/** Components */
import VaccineModalAdd from "../VaccineModalAdd";

/** Antd Design */
import { Form, Input, Button, Table } from "antd";
import Column from "antd/lib/table/Column";

/** Antd Design Icons */
import { SearchOutlined } from "@ant-design/icons";

/** Style */
import style from "./VaccineTable.module.css";
import VaccineModalEdit from "../VaccineModalEdit";
import VaccineModalDelete from "../VaccineModalDelete";

const VaccineTable = () => {
  const dataList = [];
  const [data, setData] = useState(dataList);

  for (let i = 1; i <= 50; i++) {
    dataList.push({
      id: i,
      vaccine_id: 1,
      vaccine_name: "Sinovac",
      stock: 100,
    });
  }
  for (let i = 51; i <= 100; i++) {
    dataList.push({
      id: i,
      vaccine_id: 2,
      vaccine_name: "Astra Zenaca",
      stock: 200,
    });
  }
  for (let i = 101; i <= 150; i++) {
    dataList.push({
      id: i,
      vaccine_id: 3,
      vaccine_name: "Moderna",
      stock: 300,
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
      <div className={style.tableWrapper}>
        <Table dataSource={data} pagination={{ position: ["bottomCenter"] }} scroll={{ x: 240 }} rowKey="id">
          <Column title="Id Sesi" dataIndex="id" key="id" />
          <Column title="Jenis Vaksin" dataIndex="vaccine_name" key="vaccine_name" />
          <Column title="Stock" dataIndex="stock" key="stock" />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <div className={style.actionContainer}>
                <VaccineModalEdit data={record} />

                <VaccineModalDelete />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default VaccineTable;
