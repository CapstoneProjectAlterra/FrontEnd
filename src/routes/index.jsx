import { Route, Routes } from "react-router-dom";
import {
  About,
  DataPrivacy,
  EditProfile,
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
  AdminSessionDetail,
  AdminVaccine,
} from "../pages/Admin";

import PrivateRouteAdmin from "./PrivateRouteAdmin";
import PrivateRouteCitizen from "./PrivateRouteCitizen";
import ProtectedRouteCitizen from "./ProtectedRouteCitizen";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";

export default function RouteList() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
      <Route path='/privacy' element={<DataPrivacy />} />

      {/* Protected Routing for Citizen */}
      <Route element={<ProtectedRouteCitizen />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

      {/* Private Routing for Citizen */}
      <Route element={<PrivateRouteCitizen />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile/:id' element={<EditProfile />} />
        <Route path='/vaccine' element={<Vaccine />} />
        <Route path='/ticket' element={<Ticket />} />
      </Route>

      {/* Private Routing for Admin */}
      <Route element={<PrivateRouteAdmin />}>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin/vaccine' element={<AdminVaccine />} />
        <Route path='/admin/session' element={<AdminSession />} />
        <Route
          path='/admin/session/:sessionId'
          element={<AdminSessionDetail />}
        />
      </Route>

      <Route element={<ProtectedRouteAdmin />}>
        <Route path='/admin/login' element={<AdminLogin />} />
      </Route>

      <Route path='/admin/*' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
