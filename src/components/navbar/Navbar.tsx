import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import homeIcon from "./img/home.png";
import personIcon from "./img/person.png";

const PaddingDiv = styled.div`
  padding-bottom: 20px;
`;

const MyNavbar = styled(Navbar)`
  background-color: #2a55cc;
`;

const IconA = styled.a`
  padding-right: 30px;
`;

const MyNavLink = styled(NavLink)`
  font-size: 20px;
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <PaddingDiv>
      <MyNavbar dark expand="lg" className="p-3">
        <NavbarBrand>
          <IconA href="/">
            <img src={homeIcon} style={{ width: "60px" }}></img>
          </IconA>
          <IconA href="/aboutme">
            <img src={personIcon} style={{ width: "60px" }}></img>
          </IconA>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto " navbar>
            <NavItem>
              <Link to="/hacker-typer">
                <MyNavLink>Hacker typer</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/counter">
                <MyNavLink>Counter</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/todo">
                <MyNavLink>Todo</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tic-tac-toe">
                <MyNavLink>Tic Tac Toe</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pexeso">
                <MyNavLink>Pexeso</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/counter-redux">
                <MyNavLink>Counter-Redux</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/jokes">
                <MyNavLink>Chuck Norris Jokes</MyNavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">
                <MyNavLink>Markdown Blog</MyNavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </MyNavbar>
    </PaddingDiv>
  );
};

export default Header;
