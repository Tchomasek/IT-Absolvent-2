import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LinkCard } from "./Card";
import { links } from "./data";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const HITHUB_REPO_LINK = "https://github.com/Tchomasek/IT-Absolvent-2";
const GITHUB_ICON =
  "https://www.spajk.cz/wp-content/uploads/2021/05/github-3215409-2673827.png";

const GlobalStyle = createGlobalStyle`
      body {
        overflow: visible;
      }
      `;

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <GlobalStyle />
      <WrapperDiv>
        <Container fluid>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {links.map((data) => (
              <Col key={data.id}>
                <LinkCard name={data.name} img={data.img} link={data.link} />
              </Col>
            ))}
          </Row>
          <GithubDiv className="xxx">
            Link to my Github Repo
            <a href={HITHUB_REPO_LINK} target="_blank" rel="noreferrer">
              <img src={GITHUB_ICON} style={{ width: "60px" }}></img>
            </a>
          </GithubDiv>
        </Container>
      </WrapperDiv>
    </>
  );
};

const GithubDiv = styled.div`
  flex-direction: column;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperDiv = styled.div`
  width: 80%;
  margin: auto;
`;
