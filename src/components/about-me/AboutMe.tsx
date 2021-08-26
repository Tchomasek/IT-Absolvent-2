import { Helmet } from "react-helmet";
import styled from "styled-components";

export const AboutMe = () => {
  return (
    <WrapperDiv>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <h1>About Me</h1>
      <p>My name is Tomáš Hrubý and i love styling React apps.</p>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
