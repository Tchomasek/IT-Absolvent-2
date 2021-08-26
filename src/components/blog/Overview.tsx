import { ArticleContext } from "./PostApp";
import { ArticleState } from "./PostApp";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
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
              <Link
                key={article.id}
                to={URL_BASE + "article/" + article.id}
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  color: "black",
                }}
              >
                {article.header}
              </Link>
            </PostName>
            <DeleteButton onClick={() => data.deleteArticle(article.id)}>
              Delete
            </DeleteButton>
          </PostDiv>
        ))}
      </ListGroup>
    </>
  );
};

const DeleteButton = styled(Button)`
  border-radius: 0px;
  height: 95%;
`;

const PostName = styled(ListGroup.Item)`
  width: 100%;
`;

const PostDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
