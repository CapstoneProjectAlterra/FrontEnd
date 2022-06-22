import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { LogoPrimary } from "../../assets"
import style from './MainNavbar.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

function MainNavbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a href="/Profile">
                  Profil Saya
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a href="/Logout">
                  Logout
                </a>
              ), 
            },
          ]}
        />
      );

    return(
    <>
        <div className={style.Navbar}>
            <img src={LogoPrimary} alt="logo" className={style.logo}/>
            <div className={style.navlink}>
            <Link    
                to="/home"
                className={style.link}
                onClick={()=>handleClick()}>
                Home
            </Link>
            <Link
                to="/vaksinasi"
                className={style.link}
                onClick={()=>handleClick()}>
                Vaksinasi
            </Link>
            <Link
                to="/home"
                className={style.link}
                onClick={()=>handleClick()}>
                Tiket
            </Link>
            <Dropdown overlay={menu} className={style.navicon}>
             <Space>
                <UserOutlined />
                </Space>
            </Dropdown>
            </div>
            </div>
  </>
);
}
export default MainNavbar;