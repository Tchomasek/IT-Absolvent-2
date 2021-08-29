import { ArticleContext } from "./PostApp";
import { ArticleState } from "./PostApp";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { URL_BASE } from "./Navbar";
import React, { useContext } from "react";
import styled from "styled-components";

export const Overview = () => {
  const data = useContext(ArticleContext);
  const articles = data.articles;
  return (
    <>
      <h1>Overview of Blog Posts</h1>
      <Helmet>
        <title>Blog - Overview</title>
      </Helmet>
      <ListGroup>
        {articles.map((article, index) => (
          <PostDiv key={index}>
            <PostName>
              <PostLink
                key={article.id}
                to={URL_BASE + "article/" + article.id}
              >
                {article.header}
              </PostLink>
            </PostName>
            <DeleteButton
              variant="secondary"
              onClick={() => data.deleteArticle(article.id)}
            >
              Delete
            </DeleteButton>
          </PostDiv>
        ))}
      </ListGroup>
    </>
  );
};

const PostLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: black;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const DeleteButton = styled(Button)`
  border-radius: 0px;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const PostName = styled(ListGroup.Item)`
  width: 60%;
`;

const PostDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
