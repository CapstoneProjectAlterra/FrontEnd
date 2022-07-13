/** React */
import React, { useState, useEffect } from "react";

/** Components */
import VaccineModalAdd from "../VaccineModalAdd";
import VaccineModalEdit from "../VaccineModalEdit";
import VaccineModalDelete from "../VaccineModalDelete";

/** Axios */
import axiosInstance from "../../networks/apis";

/** Auth */
import { getUserId } from "../../utils/helpers/Auth";

/** Antd Design */
import { Form, Input, Button, Table, Col, Row } from "antd";
import Column from "antd/lib/table/Column";

/** Antd Design Icons */
import { SearchOutlined } from "@ant-design/icons";

/** Style */
import style from "./VaccineTable.module.css";

const VaccineTable = () => {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetchToggle, setRefetchToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/stock", { data: "" })
      .then((response) => {
        setLoading(false);
        setRawData(response.data.data.filter((item) => item.facility.profile.user_id === getUserId()));
        // console.log(response.data.data.filter((item) => item.facility.profile.user_id === getUserId() && item.stock >= 0));
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [refetchToggle]);

  useEffect(() => {
    const filteredData = rawData.map((value) => {
      return { id: value.vaccine.id, vaccine_name: value.vaccine.vaccine_name, stock: value.stock };
    });

    setData(filteredData);
    setTableData(filteredData);
  }, [rawData]);

  const search = (values) => {
    const lowerCaseValue = values.keyword.toLowerCase().trim();
    const filteredData = data.filter((value) => Object.keys(value).some((key) => value[key].toString().toLowerCase().includes(lowerCaseValue)));
    setTableData(filteredData);
  };

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <VaccineModalAdd setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} />
        </Col>
        <Col xs={24} md={6}>
          <div className={style.searchWrapper}>
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
        </Col>
      </Row>

      <div className={style.tableWrapper}>
        <Table dataSource={tableData} pagination={{ position: ["bottomCenter"] }} scroll={{ x: 240 }} rowKey="id" loading={loading}>
          <Column title="Id Vaksin" dataIndex="id" key="id" />
          <Column title="Jenis Vaksin" dataIndex="vaccine_name" key="vaccine_name" />
          <Column title="Stock" dataIndex="stock" key="stock" />
          <Column
            title="Action"
            key="action"
            render={(_, record, index) => (
              <div className={style.actionContainer}>
                <VaccineModalEdit data={rawData[index]} setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} />

                <VaccineModalDelete id={record.id} setRefetchToggle={setRefetchToggle} refetchToggle={refetchToggle} data={rawData[index]} />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default VaccineTable;
