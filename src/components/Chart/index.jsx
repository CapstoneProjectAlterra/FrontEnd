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
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getLastSevenDays = (format) => {
  const lastSevenDays = [];
  for (let i = 6; i >= 0; i--) {
    lastSevenDays.push(moment().subtract(i, "d").format(format));
  }
  return lastSevenDays;
};

const getLastSevenDaysQuota = (lastSevenDays, schedule) => {
  let quota = [];
  for (let i = 0; i < lastSevenDays.length; i++) {
    let value = 0;
    schedule
      .filter((item) => item.vaccination_date === lastSevenDays[i])
      .forEach((item) => {
        value += item.quota;
      });

    quota.push(value);
  }
  return quota;
};

const getLastSevenDaysRegistrant = (lastSevenDays, activities) => {
  let registrant = [];
  for (let i = 0; i < lastSevenDays.length; i++) {
    let value = activities.filter(
      (item) => item.booking.schedule.vaccination_date === lastSevenDays[i]
    ).length;
    registrant.push(value);
  }
  return registrant;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  tension: 0.2,
};

export default function Chart({ schedule, activities }) {
  const lastSevenDays = getLastSevenDays("DD-MM-YYYY");

  const data = {
    labels: getLastSevenDays("DD MMM"),
    datasets: [
      {
        label: "Aktivitas Pendaftar",
        data: getLastSevenDaysRegistrant(lastSevenDays, activities),
        borderColor: "#06799D",
        backgroundColor: "#06799D",
      },
      {
        label: "Kuota Harian",
        data: getLastSevenDaysQuota(lastSevenDays, schedule),
        borderColor: "#06919D",
        backgroundColor: "#06919D",
      },
    ],
  };

  return (
    <div className={style.container}>
      <h5 className={style.title}>Aktivitas 7 Hari Terakhir</h5>
      <Line options={options} data={data} updateMode="resize" />
    </div>
  );
}
