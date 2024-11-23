import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import TableRow from "./tableRows";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import LabWork from "../Labs";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="row">
        <div className="col" />
        <div className="col-6">
          <div className="headings-card">
            <h1>Shrivarshini Narayanan</h1>
            <h2>CS5610 sec-03</h2>
          </div>
        </div>
        <div className="col" />
      </div>
      <div className="button-container">
        <a href="https://github.com/Varsh1009">
          <button className="button">
            {" "}
            Source Code Repository <FaGithub />
          </button>
        </a>

        <Link to="/">
          <button className="button">
            Go to Landing Page <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/labwork/*">
          <button className="button">
            Go to Lab Work <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/kanbas">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            name="A1"
            description="Created a landing page for CS5610 that will contain the hyperlinks to all the following assignments as well as implemented the lab-work which includes getting familiar with headings, paragraphs, lists, links, tables and routing."
            // url="./#/labwork"
            url="https://a1--cs5610-shreyansmulkutkar-assignments.netlify.app/"
          />
          <TableRow
            name="A2"
            description="Gained familiarity with different concepts of CSS and Bootstrap through lab work and utilized these skills to style our website. Additionally, I improved the UI of my Kanbas application by integrating CSS, Bootstrap, and React Icons, making it look more like the original Canvas web app."
            url="https://a2--cs5610-shreyansmulkutkar-assignments.netlify.app/"
          />
          <TableRow name="A3" description="Coming Soon..." url="" />
          <TableRow name="A4" description="Coming Soon..." url="" />
          <TableRow name="A5" description="Coming Soon..." url="" />
          <TableRow name="A6" description="Coming Soon..." url="" />
        </tbody>
      </table> */}

      {/* <LabWork /> */}
    </div>
  );
};

export default LandingPage;
