import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}
