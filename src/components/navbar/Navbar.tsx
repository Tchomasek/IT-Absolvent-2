import { Burger } from "./Burger";
import { TopNav } from "./TopNav";
import styled from "styled-components";

const Nav = styled.nav``;

export const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};
