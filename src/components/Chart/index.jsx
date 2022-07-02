import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import style from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  tension: 0.2,
};

const labels = [
  "1 Juni",
  "2 Juni",
  "3 Juni",
  "4 Juni",
  "5 Juni",
  "6 Juni",
  "7 Juni",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Aktivitas Pendaftar",
      data: [300, 160, 220, 160, 150, 100, 80],
      borderColor: "#06799D",
      backgroundColor: "#06799D",
    },
    {
      label: "Kuota Harian",
      data: [300, 320, 240, 180, 160, 140, 120],
      borderColor: "#06919D",
      backgroundColor: "#06919D",
    },
  ],
};

export default function Chart() {
  return (
    <div className={style.container}>
      <h5 className={style.title}>Aktivitas 7 Hari Terakhir</h5>
      <Line options={options} data={data} updateMode="resize" />
    </div>
  );
}
