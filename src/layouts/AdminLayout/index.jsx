import {Col, Dropdown, Menu, Row} from "antd";
import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import {BreadCrumbAdmin, Sidebar} from "../../components";

export default function AdminLayout(props) {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/admin/login">Logout</Link>,
        },
      ]}
    />
  );
  return (
    <Row className="layout-admin">
      <Col span={5} style={{background: "var(--color-primary)", height: "100vh"}}>
        <Sidebar />
      </Col>
      <Col span={19}>
        <main className="layout-main-admin">
          <Row>
            <Col
              span={24}
              style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
            >
              <BreadCrumbAdmin />
              <Dropdown
                overlay={menu}
                style={{marginTop: "var(--space-s)"}}
                placement="bottomRight"
              >
                <BiUserCircle style={{fontSize: "var(--space-xl)"}} />
              </Dropdown>
            </Col>
            <Col span={24}>{props.children}</Col>
          </Row>
        </main>
      </Col>
    </Row>
  );
}
