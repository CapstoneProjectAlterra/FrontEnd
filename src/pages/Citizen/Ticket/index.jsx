import { TicketList } from "../../../components";
import { Row, Col, Breadcrumb } from "antd";

import styles from "./Ticket.module.css";
import { Link } from "react-router-dom";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import { isAuthenticatedUser } from "../../../utils/helpers/Auth";

export default function Ticket() {
  return (
    <CitizenLayouts auth={isAuthenticatedUser()}>
      <Row className={styles.container}>
        <Col xs={24} md={{ span: 20, offset: 2 }}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/ticket">Tiket</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={24} md={{ span: 20, offset: 2 }}>
          <h1
            styles={{
              margin: "16px 0 28px",
            }}
          >
            Tiket
          </h1>
        </Col>
        <Col xs={24} md={{ span: 20, offset: 2 }}>
          <TicketList />
        </Col>
      </Row>
    </CitizenLayouts>
  );
}
