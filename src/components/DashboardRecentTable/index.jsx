import React from "react";
import style from "./DashboardRecentTable.module.css";
import { Table } from "antd";

const columns = [
  {
    title: "Sesi Waktu",
    dataIndex: "sesiWaktu",
    key: "sesiWaktu",
  },
  {
    title: "Jenis Vaksin",
    dataIndex: "jenisVaksin",
    key: "jenisVaksin",
  },
  {
    title: "Kuota",
    dataIndex: "kuota",
    key: "kuota",
  },
];

const data = [
  {
    key: "1",
    sesiWaktu: "08:00 - 08:30",
    jenisVaksin: "Vaksin 1",
    kuota: "100",
  },
  {
    key: "2",
    sesiWaktu: "08:30 - 09:00",
    jenisVaksin: "Vaksin 2",
    kuota: "200",
  },
  {
    key: "3",
    sesiWaktu: "09:00 - 09:30",
    jenisVaksin: "Vaksin 3",
    kuota: "300",
  },
  {
    key: "4",
    sesiWaktu: "09:30 - 10:00",
    jenisVaksin: "Vaksin 4",
    kuota: "400",
  },
];

export default function DashboardRecentTable() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Sesi Hari Ini</h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true }}
        scroll={{ x: 240 }}
      />
    </div>
  );
}
