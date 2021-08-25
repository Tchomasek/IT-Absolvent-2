import { ArticleContext } from "./PostApp";
import { ArticleState } from "./PostApp";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { URL_BASE } from "./Navbar";
import React, { useContext } from "react";
import styled from "styled-components";

export const Overview = () => {
  const data = useContext(ArticleContext);
  const articles = data.articles;

  const ZIndexListGroupItem = styled(ListGroup.Item)`
    position: relative;
    z-index: -1;
  `;

  return (
    <>
      <h1>Overview of Blog Posts</h1>
      <Helmet>
        <title>Blog - Overview</title>
      </Helmet>
      <ListGroup>
        {articles.map((article, index) => (
          <ZIndexListGroupItem key={index}>
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
          </ZIndexListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};
