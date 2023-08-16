import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Sellers";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} /> 
    </Routes>

  );
}
