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
  const dateObj = new Date(date);
  const day = days[dateObj.getDay()];
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  switch (format) {
    case "day":
      return day;
    case "date":
      return `${dateObj.getDate()}`;
    case "month":
      return month;
    case "year":
      return year;
    case "date-month":
      return `${dateObj.getDate()} ${month}`;
    case "date-month-year":
      return `${dateObj.getDate()} ${month} ${year}`;
    default:
      return `${day}, ${dateObj.getDate()} ${month} ${year}`;
  }
}
