import styled from "styled-components";

export const Joke = (props: { joke: string }) => {
  return (
    <>
      <JokeDiv>{props.joke}</JokeDiv>
    </>
  );
};

const JokeDiv = styled.div`
  padding: 2px;
`;
