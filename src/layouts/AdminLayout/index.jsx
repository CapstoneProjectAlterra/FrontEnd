import {Col, Dropdown, Menu, Row} from "antd";
import Cookies from "js-cookie";
import {useEffect} from "react";
import {useState} from "react";
import {BiUserCircle} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import {BreadCrumbAdmin, Sidebar, ReactHelmet} from "../../components";

export default function AdminLayout(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", setWidth(window.innerWidth));
    };
  }, [width]);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/admin/login");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span onClick={() => logout()}>Logout</span>,
        },
      ]}
    />
  );
  return (
    <Row className="layout-admin">
      <ReactHelmet />
      <Col
        lg={5}
        md={3}
        sm={3}
        xs={3}
        style={{background: "var(--color-primary)", height: "100vh"}}
      >
        <Sidebar />
      </Col>
      <Col lg={19} md={21} sm={21} xs={21} style={{position: "relative"}}>
        <main className="layout-main-admin">
          <Row>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
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
