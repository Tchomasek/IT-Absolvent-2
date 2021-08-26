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
                <NavLink>Hacker typer</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/counter">
                <NavLink>Counter</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/todo">
                <NavLink>Todo</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tic-tac-toe">
                <NavLink>Tic Tac Toe</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pexeso">
                <NavLink>Pexeso</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/counter-redux">
                <NavLink>Counter-Redux</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/jokes">
                <NavLink>Chuck Norris Jokes</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">
                <NavLink>Markdown Blog</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </MyNavbar>
    </PaddingDiv>
  );
};

export default Header;
const Img = styled.img`
  margin-left: 0.5rem;
`;

// import { Burger } from "./Burger";
// import { TopNav } from "./TopNav";
// import styled from "styled-components";

// const Nav = styled.nav``;

// export const Navbar = () => {
//   return (
//     <Nav>
//       <Burger />
//     </Nav>
//   );
// };
