import { Route, Routes } from "react-router";
import "./lab2.css";
import CSSPractice from "./csspractice";
import Navbar from "./navbar";
import BootstrapPractice from "./bootstrap";
import ReactIconsSampler from "./reacticons";

const Lab2 = () => {
  return (
    <div id="wd-lab2">
      <Navbar />
      <Routes>
        <Route path="/" element={<CSSPractice />} />
        <Route path="icons" element={<ReactIconsSampler />} />
        <Route path="bootstrap" element={<BootstrapPractice />} />
      </Routes>
    </div>
  );
};

export default Lab2;
