import React from "react";
import "./HorizontalNavBar.scss";
import { Link } from "react-router-dom";
import manSwimming from "../../assets/manSwimming.svg";
import manSitted from "../../assets/manSitted.svg";
import manBiking from "../../assets/manBiking.svg";
import musculation from "../../assets/musculation.svg";

/**
 * The navbar of the top
 * @component
 */
const HorizontalNavBar = () => {
  return (
    <div className="secNavBar">
      <div></div>
      <nav className="navBar">
        <ul className="navBarContainer">
          <li className="navBarItem">
            <Link to="/">
              <img
                src={manSitted}
                alt="swimming activity"
                className="navBarItemIcon"
              />
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/">
              {" "}
              <img
                src={manSwimming}
                alt="swimming activity"
                className="navBarItemIcon"
              />
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/">
              {" "}
              <img
                src={manBiking}
                alt="swimming activity"
                className="navBarItemIcon"
              />
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/">
              {" "}
              <img
                src={musculation}
                alt="swimming activity"
                className="navBarItemIcon"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <p className="copyrights">Copiryght, SportSee 2020</p>
    </div>
  );
};

export default HorizontalNavBar;
