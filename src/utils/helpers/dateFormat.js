import moment from "moment";
/*
 * Function to change date format
 *
 * @params {string} date
 * @params {string} format
 * @return {string}
 */

export default function dateFormat(date, format) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dateObj = moment(date, "DD-MM-YYYY");
  const day = days[dateObj.day()];
  const month = months[dateObj.get("month")];
  const year = dateObj.get("year");

  switch (format) {
    case "day":
      return day;
    case "date":
      return `${dateObj.get("date")}`;
    case "month":
      return month;
    case "year":
      return year;
    case "date-month":
      return `${dateObj.get("date")} ${month}`;
    case "date-month-year":
      return `${dateObj.get("date")} ${month} ${year}`;
    default:
      return `${day}, ${dateObj.get("date")} ${month} ${year}`;
  }
}
