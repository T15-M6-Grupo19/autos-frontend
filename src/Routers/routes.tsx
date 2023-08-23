import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ProfileViewUser from "../pages/Profile/ProfileViewUser";
import Ad from "../pages/Ad";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:userId" element={<ProfileViewUser />} />
      <Route path="/ad/:adId" element={<Ad />} />
    </Routes>
  );
}
