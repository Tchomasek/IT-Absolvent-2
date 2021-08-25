import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

type LinkCardProps = {
  name: string;
  img: string;
  link: string;
};

const ZIndexCard = styled(Card)`
  position: relative;
  z-index: -1;
`;

const ZIndexCardImage = styled(Card.Img)`
  position: relative;
  z-index: -1;
`;

export const LinkCard = (props: LinkCardProps) => {
  return (
    <>
      <Link to={props.link}>
        <ZIndexCard className="h-100 shadow-sm bg-white rounded">
          <ZIndexCardImage variant="top" src={props.img} />
          <Card.Body
            style={{ justifyContent: "flex-end" }}
            className="d-flex flex-column "
          >
            <div className="d-flex ">
              <TitleDiv>{props.name}</TitleDiv>
            </div>
          </Card.Body>
        </ZIndexCard>
      </Link>
    </>
  );
};

const A = styled.a`
  text-decoration: none;
`;

const TitleDiv = styled.div``;
