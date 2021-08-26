import { Category } from "./Category";
import { ErrorDiv } from "./ErrorDiv";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { RandomJokes } from "./RandomJokes";
import { URL_CATEGORIES } from "./config";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Jokes = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      try {
        const response = await fetch(URL_CATEGORIES);
        const responseJson = await response.json();
        setCategories(responseJson);
      } catch {
        setError(true);
      }
    };
    getJokes();
  }, []);

  return (
    <WrapperDiv className="xxxxxxxxxxxxxxxx">
      <Helmet>
        <title>Chuck Norris Jokes</title>
      </Helmet>
      {error ? (
        <ErrorDiv>Unable to fetch data from ${URL_CATEGORIES}</ErrorDiv>
      ) : null}
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href={"/jokes"}>Random</Nav.Link>
        </Nav.Item>
        {categories.map((category, index) => (
          <Nav.Item key={index}>
            <Nav.Link href={"/jokes/" + category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      {/* <ul>
        <li>
          <Link to={"/jokes"}>Random</Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={"/jokes/" + category}>{category}</Link>
          </li>
        ))}
      </ul> */}

      <Switch>
        <Route path={"/jokes"} exact>
          <RandomJokes />
        </Route>
        {categories.map((category, index) => (
          <Route key={index} path={"/jokes/" + category}>
            <Category category={category} />
          </Route>
        ))}
      </Switch>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
