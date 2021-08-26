import { Link } from "react-router-dom";
import styled from "styled-components";

const HITHUB_REPO_LINK = "https://github.com/Tchomasek/IT-Absolvent-2";
const GITHUB_ICON =
  "https://www.spajk.cz/wp-content/uploads/2021/05/github-3215409-2673827.png";

type UlProps = {
  open: any;
};

const Ul = styled.ul<UlProps>`
  display: flex;
  color: #ffffff;
  background-color: #41649b;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  @media (max-width: 768px) {
    z-index: 2;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: #41649b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(-100%)" : "translateY(0)")};
    top: 0;
    right: 0;
    height: 200px;
    width: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
const StyledLink = styled(Link)`
  padding-right: 25px;
  padding-bottom: 25px;
`;

export const TopNav = (props: { open: boolean }) => {
  return (
    <Ul open={props.open}>
      {/* <div> */}
      <StyledLink
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "25px",
          color: "white",
        }}
      >
        My Apps
      </StyledLink>
      <StyledLink
        to="/aboutme"
        style={{
          textDecoration: "none",
          fontSize: "25px",
          color: "white",
        }}
      >
        About me
      </StyledLink>
      {/* </div> */}
      <a href={HITHUB_REPO_LINK} target="_blank" rel="noreferrer">
        <img src={GITHUB_ICON} style={{ width: "60px" }}></img>
      </a>
    </Ul>
  );
};
