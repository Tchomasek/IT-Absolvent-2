import { ErrorDiv } from "./ErrorDiv";
import { Helmet } from "react-helmet";
import { Joke } from "./Joke";
import { ListGroup } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { URL_CATEGORY, URL_RANDOM } from "./config";
import { useEffect, useState } from "react";
import styled from "styled-components";

const NUMBER_OF_CATEGORY_JOKES = 5;
const NUMBER_OF_ATTEMPTS = 20;

export const Category = (props: { category: string }) => {
  const [catJokes, setCatJokes] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCatJokes = async () => {
      try {
        const jokesTemp: string[] = [];
        let counter = 0;
        while (jokesTemp.length < NUMBER_OF_CATEGORY_JOKES) {
          counter++;
          const response = await fetch(URL_CATEGORY + props.category);
          const responseJson = await response.json();
          if (counter > NUMBER_OF_ATTEMPTS) {
            setLoading(false);
            return;
          }
          if (jokesTemp.includes(responseJson.value)) {
          } else {
            jokesTemp.push(responseJson.value);
            setCatJokes([...jokesTemp]);
          }
        }
      } catch (error) {
        alert(error);
        setError(true);
      }
      setLoading(false);
    };
    getCatJokes();
  }, []);
  return (
    <>
      <Helmet>
        <title>Chuck Norris Jokes - {props.category}</title>
      </Helmet>
      <WrapDiv className="a">
        <TitleDiv>
          <TitleH2>
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
            jokes
          </TitleH2>
          {loading ? <Spinner animation="border" /> : null}
        </TitleDiv>
        {error ? (
          <ErrorDiv>
            Unable to fetch data from ${URL_CATEGORY + props.category}
          </ErrorDiv>
        ) : null}
        <JokesDiv>
          {catJokes.map((joke, index) => {
            return (
              <a key={index}>
                {index === 0 ? null : <hr />}
                <Joke joke={joke} />
              </a>
            );
          })}
        </JokesDiv>
      </WrapDiv>
    </>
  );
};

const JokesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50%;
`;

const TitleH2 = styled.h2`
  padding: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;
