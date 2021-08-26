import { ErrorDiv } from "./ErrorDiv";
import { Helmet } from "react-helmet";
import { Joke } from "./Joke";
import { Spinner } from "react-bootstrap";
import { URL_RANDOM } from "./config";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const RandomJokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const NUMBER_OF_RANDOM_JOKES = 20;

  useEffect(() => {
    const getJokes = async () => {
      const jokesTemp: string[] = [];
      while (jokesTemp.length < NUMBER_OF_RANDOM_JOKES) {
        try {
          const response = await fetch(URL_RANDOM);
          const responseJson = await response.json();
          if (jokes.includes(responseJson.value)) {
            return;
          } else {
            jokesTemp.push(responseJson.value);
            setJokes([...jokesTemp]);
          }
        } catch {
          setError(true);
        }
      }
      setLoading(false);
    };

    getJokes();
  }, []);

  return (
    <>
      <Helmet>
        <title>Chuck Norris Jokes - Random</title>
      </Helmet>
      <TitleDiv>
        <TitleH2>Random Jokes</TitleH2>
        {loading ? <Spinner animation="border" /> : null}
      </TitleDiv>
      <WrapDiv>
        {error ? (
          <ErrorDiv>Unable to fetch data from ${URL_RANDOM}</ErrorDiv>
        ) : null}
        {jokes.map((joke, index) => {
          return (
            <a key={index}>
              {index === 0 ? null : <hr />}
              <Joke joke={joke} />
            </a>
          );
        })}
      </WrapDiv>
    </>
  );
};

const WrapDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding-bottom: 30px;
`;

const TitleH2 = styled.h2`
  padding: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;
