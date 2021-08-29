import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import personIcon from "./img/person.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <PaddingDiv>
      <MyNavbar dark expand="lg" className="p-3">
        <NavbarBrand>
          <MyLink to="/">
            <a>Tomáš Hrubý</a>
          </MyLink>
          <MyLink to="/aboutme">
            {/* <IconA>
              <img src={personIcon} style={{ width: "30px" }}></img>
            </IconA> */}
          </MyLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto " navbar>
            <NavItem>
              <MyLink to="/hacker-typer" activeStyle={style}>
                Hacker typer
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/counter" activeStyle={style}>
                Counter
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/todo" activeStyle={style}>
                Todo
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/tic-tac-toe" activeStyle={style}>
                Tic Tac Toe
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/pexeso" activeStyle={style}>
                Pexeso
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/counter-redux" activeStyle={style}>
                Counter-Redux
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/jokes" activeStyle={style}>
                Chuck Norris Jokes
              </MyLink>
            </NavItem>
            <NavItem>
              <MyLink to="/blog" activeStyle={style}>
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

const PaddingDiv = styled.div`
  padding-bottom: 20px;
`;

const MyNavbar = styled(Navbar)`
  background-color: #8ba9fbc3;
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
  color: #030303;
  :hover {
    color: #595999;
  }
`;

const style = { color: "#ffffff", fontStyle: "italic" };
