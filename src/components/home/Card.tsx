import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

type LinkCardProps = {
  name: string;
  img: string;
  link: string;
  text: string;
};

export const LinkCard = (props: LinkCardProps) => {
  return (
    <>
      <MyLink to={props.link}>
        <Card className="h-100 shadow-sm bg-white rounded">
          <CardImage variant="top" src={props.img} />
          <Card.Body
            style={{ justifyContent: "flex-end" }}
            className="d-flex flex-column "
          >
            <Title>{props.name}</Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      </MyLink>
    </>
  );
};

const Title = styled(Card.Title)`
  font-size: 35px;
`;

const CardImage = styled(Card.Img)`
  :hover {
    opacity: 0.5;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #422f2f;
`;
