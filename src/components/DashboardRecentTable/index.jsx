import React, { useState } from "react";
import style from "./DashboardRecentTable.module.css";
import { Table } from "antd";
import moment from "moment";
import { useEffect } from "react";

const columns = [
  {
    title: "Sesi Waktu",
    dataIndex: ["operational_hour_start", "operational_hour_end"],
    key: ["operational_hour_start", "operational_hour_end"],
    render: (_, record) => (
      <span>
        {moment(record.operational_hour_start, "hh:mm").format("HH:mm") +
          " - " +
          moment(record.operational_hour_end, "hh:mm").format("HH:mm")}
      </span>
    ),
  },
  {
    title: "Jenis Vaksin",
    dataIndex: ["vaccine", "vaccine_name"],
    key: ["vaccine", "vaccine_name"],
  },
  {
    title: "Kuota",
    dataIndex: "quota",
    key: "quota",
  },
];

export default function DashboardRecentTable({ schedule }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(
      schedule.filter(
        (item) => item.vaccination_date === moment().format("DD-MM-YYYY")
      )
    );
  }, [schedule]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>Sesi Hari Ini</h3>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ hideOnSinglePage: true }}
        scroll={{ x: 240 }}
        rowKey="id"
      />
    </div>
  );
}
