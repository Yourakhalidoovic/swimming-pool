import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "./logo.png";

const Header = () => {
  return (
    <Navbar>
      <Nav>
        <NavItem>
          <img src={logo} alt="Logo" />
        </NavItem>²
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Tracking</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Affiliation</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
