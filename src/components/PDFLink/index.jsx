import React from "react";
import CustomButton from "../CustomButton";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";

export default function PDFLink({ registrantData, scheduleData, loading }) {
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");

    doc.setFontSize(20);
    doc.text(200, 30, "Daftar Peserta Vaksin");
    doc.setFontSize(12);
    doc.text(40, 60, `Jenis Vaksin: ${scheduleData.vaccine.vaccine_name}`);
    doc.text(
      40,
      80,
      `Jam Operasional: ${moment(
        scheduleData.operational_hour_start,
        "hh:mm"
      ).format("HH:mm")} - ${moment(
        scheduleData.operational_hour_end,
        "hh:mm"
      ).format("HH:mm")}`
    );
    doc.text(40, 100, `Tanggal: ${scheduleData.vaccination_date}`);
    doc.text(40, 120, `Kuota: ${scheduleData.quota}`);

    autoTable(doc, {
      margin: { top: 140 },
      head: [["NIK", "Nama", "No Antrian"]],
      body: registrantData.map((item) => [
        item.nik,
        item.name,
        item.booking_pass,
      ]),
    });

    doc.save("laporan.pdf");
  };

  return (
    <CustomButton variant="primary" onClick={() => generatePDF()}>
      Download
    </CustomButton>
  );
}
