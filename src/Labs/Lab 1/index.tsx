import HeadingsAndParagraphs from "./headingsandpara";
import Lists from "./lists";
import Forms from "./forms";
import Navbar from "./navbar";
import Table from "./tables";
import Images from "./images";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

const Lab1 = () => {
  return (
    <div className="lab1">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<h3>Use the above navbar to view different components.</h3>} /> */}
        <Route path="/" element={<HeadingsAndParagraphs />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/tables" element={<Table />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </div>
  );
};

export default Lab1;
