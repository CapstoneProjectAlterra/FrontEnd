import { Route, Routes } from "react-router-dom";
import {
  About,
  EditProfile,
  Home,
  News,
  NotFound,
  Profile,
  Register,
  Ticket,
  Vaccine,
} from "../pages/Citizen";

import {
  AdminDashboard,
  AdminLogin,
  AdminProfile,
  AdminSession,
  AdminSessionDetail,
  AdminVaccine,
} from "../pages/Admin";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile/:id" element={<EditProfile />} />
      <Route path="/vaccine" element={<Vaccine />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/vaccine" element={<AdminVaccine />} />
      <Route path="/admin/session" element={<AdminSession />} />
      <Route
        path="/admin/session/:sessionId"
        element={<AdminSessionDetail />}
      />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
