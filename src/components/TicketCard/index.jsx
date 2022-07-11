import styles from "./Ticket.module.css";

import { Row, Col } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { FaPrescriptionBottleAlt, FaSyringe } from "react-icons/fa";
import dateFormat from "../../utils/helpers/dateFormat";
import moment from "moment";

export default function TicketCard({ data, onClick, vaccine, facility }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.ticketHeader}>
        <h5>{data?.family.name}</h5>
        <span>No Antrian: </span>
        <h5 className={styles.queue}>{data?.booking.booking_pass}</h5>
      </div>
      <div className={styles.ticketBody}>
        <Row gutter={[0, 16]}>
          <Col span={15}>
            <div className={styles.content}>
              <FaSyringe className={styles.icon} />
              <span>{vaccine?.vaccine_name}</span>
            </div>
          </Col>
          <Col span={9}>
            <div className={styles.content}>
              <FaPrescriptionBottleAlt className={styles.icon} />
              <span>
                {data?.booking.schedule.dose === "DOSIS_1"
                  ? "Dosis 1"
                  : data?.booking.schedule.dose === "DOSIS_2"
                  ? "Dosis 2"
                  : "Booster"}
              </span>
            </div>
          </Col>
          <Col span={15}>
            <div className={styles.content}>
              <CalendarOutlined className={styles.icon} />
              <span>{dateFormat(data?.booking.schedule.vaccination_date)}</span>
            </div>
          </Col>
          <Col span={9}>
            <div className={styles.content}>
              <ClockCircleOutlined className={styles.icon} />
              <span>
                {moment(
                  data?.booking.schedule.operational_hour_start,
                  "hh:mm"
                ).format("HH:mm")}{" "}
                -{" "}
                {moment(
                  data?.booking.schedule.operational_hour_end,
                  "hh:mm"
                ).format("HH:mm")}
              </span>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.content}>
              <EnvironmentOutlined className={styles.icon} />
              <span>{facility?.facility_name}</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
