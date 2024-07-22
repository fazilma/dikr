import React from "react";
import { Button, Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="nav">
      <ul className="inline-list">
        <li>
          <Button className="link-button">
            <Link to="section1" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button className="link-button">
            <Link to="section2" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
