import {Breadcrumb} from "antd";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import style from "./BreadCrumbAdmin.module.css";

export default function BreadCrumbAdmin() {
  const breadcrumbNameMap = {
    "/admin": "Dashboard",
    "/admin/session": "Kelola Sesi",
    "/admin/vaccine": "Kelola Vaksin",
    "/admin/profile": "Profil Admin",
  };
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  return <Breadcrumb className={style.breadcrumb}>{breadcrumbItems}</Breadcrumb>;
}
