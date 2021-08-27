import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import homeIcon from "./img/home.png";
import personIcon from "./img/person.png";

const PaddingDiv = styled.div`
  padding-bottom: 20px;
`;

const MyNavbar = styled(Navbar)`
  background-color: #4c515f;
`;

const IconA = styled.a`
  padding-right: 30px;

  :hover {
    opacity: 0.3;
  }
`;

const MyLink = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  color: #e6dddd;
  :hover {
    color: #927676;
  }
`;

const navbarHighlightColor = "#dffdff";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <PaddingDiv>
      <MyNavbar dark expand="lg" className="p-3">
        <NavbarBrand>
          <MyLink to="/">
            <IconA>
              <img src={homeIcon} style={{ width: "35px" }}></img>
            </IconA>
          </MyLink>
          <MyLink to="/aboutme">
            <IconA>
              <img src={personIcon} style={{ width: "35px" }}></img>
            </IconA>
          </MyLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto " navbar>
            <NavItem>
              <MyLink
                to="/hacker-typer"
                activeStyle={{ color: navbarHighlightColor }}
              >
                Hacker typer
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink
                to="/counter"
                activeStyle={{ color: navbarHighlightColor }}
              >
                Counter
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/todo" activeStyle={{ color: navbarHighlightColor }}>
                Todo
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink
                to="/tic-tac-toe"
                activeStyle={{ color: navbarHighlightColor }}
              >
                Tic Tac Toe
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink
                to="/pexeso"
                activeStyle={{ color: navbarHighlightColor }}
              >
                Pexeso
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink
                to="/counter-redux"
                activeStyle={{ color: navbarHighlightColor }}
              >
                Counter-Redux
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink
                to="/jokes"
                activeStyle={{
                  color: navbarHighlightColor,
                }}
              >
                Chuck Norris Jokes
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/blog" activeStyle={{ color: navbarHighlightColor }}>
                Markdown Blog
              </MyLink>
            </NavItem>
          </Nav>
        </Collapse>
      </MyNavbar>
    </PaddingDiv>
  );
};

export default Header;
