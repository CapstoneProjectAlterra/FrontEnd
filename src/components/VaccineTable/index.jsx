/** React */
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)

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
<<<<<<< HEAD
import axiosInstance from "../../networks/apis";
import { getUserId } from "../../utils/helpers/Auth";

const VaccineTable = () => {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/stock", { data: "" })
      .then((response) => {
        setLoading(false);
        setRawData(response.data.data.filter((item) => item.facility.profile.user_id === getUserId()));
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [refetchToggle]);

  useEffect(() => {
    const filteredData = rawData.map((value) => {
      return {
        id: value.vaccine.id,
        vaccine_name: value.vaccine.vaccine_name,
        stock: value.stock,
      };
    });
    setData(filteredData);
    setTableData(filteredData);
  }, [rawData]);

  console.log(tableData);

  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = data.filter((value) => Object.keys(value).some((key) => value[key].toString().toLowerCase().includes(lowerCaseValue)));

    setTableData(filteredData);
=======

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
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
  };

  return (
    <>
      <div className={style.searchWrapper}>
<<<<<<< HEAD
        <VaccineModalAdd setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} />
=======
        <VaccineModalAdd />
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)

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
<<<<<<< HEAD
        <Table dataSource={tableData} pagination={{ position: ["bottomCenter"] }} scroll={{ x: 240 }} rowKey="id" loading={loading}>
=======
        <Table dataSource={data} pagination={{ position: ["bottomCenter"] }} scroll={{ x: 240 }} rowKey="id">
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
          <Column title="Id Sesi" dataIndex="id" key="id" />
          <Column title="Jenis Vaksin" dataIndex="vaccine_name" key="vaccine_name" />
          <Column title="Stock" dataIndex="stock" key="stock" />
          <Column
            title="Action"
            key="action"
<<<<<<< HEAD
            render={(_, record, index) => (
              <div className={style.actionContainer}>
                <VaccineModalEdit data={rawData[index]} setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} />

                <VaccineModalDelete id={record.id} setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} data={rawData[index]} />
=======
            render={(_, record) => (
              <div className={style.actionContainer}>
                <VaccineModalEdit data={record} />

                <VaccineModalDelete />
>>>>>>> b344019 (slicing design and oprational function on admin vaccine)
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default VaccineTable;
