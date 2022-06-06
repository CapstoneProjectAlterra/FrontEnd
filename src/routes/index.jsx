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
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
      <Route path="/news" component={<News />} />
      <Route path="/register" component={<Register />} />
      <Route path="/profile" component={<Profile />} />
      <Route path="/vaccine" component={<Vaccine />} />
      <Route path="/ticket" component={<Ticket />} />
      <Route path="/admin" component={<AdminDashboard />}>
        <Route path="/admin/profile" component={<AdminProfile />} />
        <Route path="/admin/vaccine" component={<AdminVaccine />} />
        <Route path="/admin/session" component={<AdminSession />} />
        <Route path="/admin/login" component={<AdminLogin />} />
      </Route>
      <Route path="*" component={<NotFound />} />
    </Routes>
  );
}
