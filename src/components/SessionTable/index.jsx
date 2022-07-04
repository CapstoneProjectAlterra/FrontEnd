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
import { useEffect } from "react";
import axiosInstance from "../../networks/apis";
import moment from "moment";
import { getUserId } from "../../utils/helpers/Auth";

export default function SessionTable() {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetchToggle, setRefetchToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/schedule", { data: "" })
      .then((response) => {
        setLoading(false);
        setRawData(
          response.data.data.filter(
            (item) => item.facility.profile.user_id === getUserId()
          )
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [refetchToggle]);

  useEffect(() => {
    const filteredData = rawData.map((value) => {
      return {
        id: value.id,
        vaccine_id: value.vaccine.id,
        vaccine_name: value.vaccine.vaccine_name,
        vaccination_date: value.vaccination_date,

        operational_hour:
          moment(value.operational_hour_start, "hh:mm").format("HH:mm") +
          " - " +
          moment(value.operational_hour_end, "hh:mm").format("HH:mm"),
        quota: value.quota,
        dose:
          value.dose === "DOSIS_1"
            ? "Dosis 1"
            : value.dose === "DOSIS_2"
            ? "Dosis 2"
            : "Booster",
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
          <SessionModalAdd
            setRefetchToggle={setRefetchToggle}
            refetchToggle={refetchToggle}
          />
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
          dataSource={tableData}
          pagination={{ position: ["bottomCenter"] }}
          scroll={{ x: 240 }}
          rowKey="id"
          loading={loading}
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
            dataIndex="operational_hour"
            key="operational_hour"
          />
          <Column title="Kuota" dataIndex="quota" key="quota" />
          <Column title="Dosis" dataIndex="dose" key="dose" />
          <Column
            title="Action"
            key="action"
            render={(_, record, index) => (
              <div className={styles.actionContainer}>
                <Tooltip placement="top" title="Detail">
                  <Button className={styles.button + " " + styles.secondary}>
                    <Link to={"/admin/session/" + record.id}>
                      <BiDetail />
                    </Link>
                  </Button>
                </Tooltip>

                <SessionModalEdit
                  data={rawData[index]}
                  setRefetchToggle={setRefetchToggle}
                  refetchToggle={refetchToggle}
                />

                <SessionModalDelete
                  id={record.id}
                  setRefetchToggle={setRefetchToggle}
                  refetchToggle={refetchToggle}
                />
              </div>
            )}
          />
        </Table>
      </div>
    </>
  );
}
