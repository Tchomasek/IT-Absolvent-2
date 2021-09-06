import { ArticleContext } from "./PostApp";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { MouseEvent, useContext, useEffect, useRef, useState } from "react";
import { handleInputError } from "./handleInputError";
import styled from "styled-components";

export const Create = () => {
  const { articles, addNewArticle } = useContext(ArticleContext);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [headerError, setHeaderError] = useState("");
  const [textError, setTextError] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setHeaderError("");
    setTextError("");
    const errors = handleInputError(header, text);

    if (errors[header] || errors[text]) {
      if (errors[header]) {
        setHeaderError("Please enter a Title");
      }
      if (errors[text]) {
        setTextError("Please enter some text");
      }
      return;
    }
    addNewArticle(articles.length, header, text);
    setHeader("");
    setText("");
  };

  return (
    <WrapperDiv>
      <Helmet>
        <title>Blog - Create new Article</title>
      </Helmet>
      <h1>Create Blog Post</h1>
      <InputGroup>
        <InputGroup.Text>Title</InputGroup.Text>
        <FormControl
          ref={titleRef}
          type="text"
          name="header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
      </InputGroup>
      <ErrorP>{headerError}</ErrorP>

      <InputGroup>
        <InputGroup.Text>Enter your MD here</InputGroup.Text>
        <FormControl
          as="textarea"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </InputGroup>
      <form>
        <ErrorP>{textError}</ErrorP>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  width: 100%;
`;

const ErrorP = styled.p`
  color: red;
`;
