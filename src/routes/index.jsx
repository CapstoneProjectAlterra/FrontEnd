import { Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  News,
  NotFound,
  Profile,
  Register,
  Ticket,
  Vaccine,
  Login,
} from "../pages/Citizen";

import {
  AdminDashboard,
  AdminLogin,
  AdminProfile,
  AdminSession,
  AdminVaccine,
} from "../pages/Admin";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/vaccine" element={<Vaccine />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/vaccine" element={<AdminVaccine />} />
        <Route path="/admin/session" element={<AdminSession />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
