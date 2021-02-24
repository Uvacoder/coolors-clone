import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar as BSNavbar,
  NavbarToggler,
  Nav as BSNav,
  NavItem
} from "reactstrap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BSNavbar color="white" light expand="sm" className="shadow-sm">
      <Link to="/" className="navbar-brand">
        Coolors
      </Link>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <BSNav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/generate">
              Generate
            </Link>
          </NavItem>
        </BSNav>
      </Collapse>
    </BSNavbar>
  );
}

export default Navbar;
