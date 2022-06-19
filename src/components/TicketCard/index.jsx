import styles from "./Ticket.module.css";

import { Row, Col } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { FaPrescriptionBottleAlt, FaSyringe } from "react-icons/fa";
import dateFormat from "../../utils/helpers/dateFormat";

export default function TicketCard(props) {
  const { data, onClick } = props;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.ticketHeader}>
        <h5>{data.full_name}</h5>
        <span>No Antrian: </span>
        <h5 className={styles.queue}>{data.booking_pass}</h5>
      </div>
      <div className={styles.ticketBody}>
        <Row gutter={[0, 16]}>
          <Col span={15}>
            <div className={styles.content}>
              <FaSyringe className={styles.icon} />
              <span>{data.vaccine_name}</span>
            </div>
          </Col>
          <Col span={9}>
            <div className={styles.content}>
              <FaPrescriptionBottleAlt className={styles.icon} />
              <span>Dosis {data.dose}</span>
            </div>
          </Col>
          <Col span={15}>
            <div className={styles.content}>
              <CalendarOutlined className={styles.icon} />
              <span>{dateFormat(data.vaccination_date)}</span>
            </div>
          </Col>
          <Col span={9}>
            <div className={styles.content}>
              <ClockCircleOutlined className={styles.icon} />
              <span>
                {data.operational_hour_start} - {data.operational_hour_end}
              </span>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.content}>
              <EnvironmentOutlined className={styles.icon} />
              <span>{data.facility_name}</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
