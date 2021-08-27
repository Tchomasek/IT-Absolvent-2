import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LinkCard } from "./Card";
import { links } from "./data";
import Github from "./img/github.png";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const HITHUB_REPO_LINK = "https://github.com/Tchomasek/IT-Absolvent-2";

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
              <GithubImg src={Github} />
            </a>
          </GithubDiv>
        </Container>
      </WrapperDiv>
    </>
  );
};

const GithubImg = styled.img`
  width: 60px;
  :hover {
    opacity: 0.5;
  }
`;

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
