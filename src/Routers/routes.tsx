import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>

  );
}
