import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export default function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}
