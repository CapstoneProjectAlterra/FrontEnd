import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";

export default function ReactHelmet() {
  const { sessionId, id, hospitalId, profileId } = useParams();
  const location = useLocation();
  const LIST_PAGE_NAME = {
    "/": "Home",
    "/login": "Login",
    "/about": "Tentang Kami",
    "/news": "Berita Terkini",
    "/register": "Registrasi",
    "/privacy": "Kebijakan Privasi Data",
    "/profile": "Profil",
    "/faq": "FAQ",
    [`/editprofile/${id}`]: "Edit Profil",
    "/vaccine": "Fasilitas Kesehatan",
    [`/vaccineDetails/${hospitalId}`]: "Detail Fasilitas Kesehatan",
    "/ticket": "Tiket Vaksin",
    "/admin": "Dashboard Admin",
    "/admin/profile": "Profil Admin",
    [`/admin/profile/${profileId}`]: "Edit Profil Admin",
    "/admin/vaccine": "Kelola Vaksin",
    "/admin/session": "Kelola Sesi",
    [`/admin/session/${sessionId}`]: "Detail Sesi",
    "/admin/login": "Login Admin",
    "/admin/*": "Halaman Tidak Ditemukan",
    "*": "Halaman Tidak Ditemukan",
  };

  return (
    <Helmet>
      <title>{`${LIST_PAGE_NAME[location.pathname]} | GetVaccine`}</title>
    </Helmet>
  );
}
