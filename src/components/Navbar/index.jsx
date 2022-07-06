import { Link } from "react-router-dom";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { LogoPrimary, LogoSecondary } from "../../assets";
import style from "./MainNavbar.module.css";
import { BiUserCircle } from "react-icons/bi";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Dropdown, Menu } from "antd";

function MainNavbar({ auth }) {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/login");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/profile">Profil Saya</Link>,
        },
        {
          key: "2",
          label: <span onClick={() => logout()}>Logout</span>,
        },
      ]}
    />
  );

  const homeMenu = [
    {
      key: "home",
      name: "Home",
      route: "/",
    },
    {
      key: "vaksinasi",
      name: "Vaksinasi",
      route: "/vaccine",
    },
    {
      key: "tiket",
      name: "Tiket",
      route: "ticket",
    },
  ];

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={style.Navbar}>
        <Link to="/">
          <img src={LogoPrimary} alt="logo" className={style.logo} />
        </Link>
        {auth === true ? (
          <nav className={style.navlink}>
            {homeMenu.map((menu) => {
              return (
                <Link to={menu.route} className={style.link} key={menu.key}>
                  {menu.name}
                </Link>
              );
            })}
            <Dropdown
              overlay={menu}
              className={style.navicon}
              style={{ marginTop: "var(--space-l)" }}
            >
              <BiUserCircle style={{ fontSize: "var(--space-xl)" }} />
            </Dropdown>
            <Drawer
              title={
                <img src={LogoSecondary} alt="logo" className={style.logo} />
              }
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              {homeMenu.map((menu) => {
                return (
                  <>
                    <Link
                      to={menu.route}
                      key={menu.key}
                      className={style.textDrawer}
                    >
                      {menu.name}
                    </Link>
                    <Divider />
                  </>
                );
              })}
              <Link to="/profile" className={style.textDrawer}>
                Profil Saya
              </Link>
              <Divider />
              <Link to="/" className={style.textDrawer}>
                Logout
              </Link>
            </Drawer>
          </nav>
        ) : (
          <nav className={style.navlink}>
            <Button className={`${style.btn} ${style.login}`}>
              <Link to="/login">Login</Link>
            </Button>
            <Button className={`${style.btn} ${style.register}`}>
              <Link to="/register">Register</Link>
            </Button>
            <Drawer
              title={
                <img src={LogoSecondary} alt="logo" className={style.logo} />
              }
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <Link to="/login" className={style.textDrawer}>
                Login
              </Link>
              <Divider />
              <Link to="/register" className={style.textDrawer}>
                Register
              </Link>
            </Drawer>
          </nav>
        )}
        <MenuOutlined className={style.hamburger} onClick={showDrawer} />
      </div>
    </>
  );
}
export default MainNavbar;
