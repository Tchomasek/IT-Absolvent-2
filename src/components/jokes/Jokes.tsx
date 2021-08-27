import { Category } from "./Category";
import { ErrorDiv } from "./ErrorDiv";
import { Helmet } from "react-helmet";
import {
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
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
      <Nav variant="tabs">
        <Nav.Item>
          <MyNavLink
            to={"/jokes"}
            activeStyle={{ textShadow: "1px 0px 0px black" }}
            exact
          >
            Random
          </MyNavLink>
        </Nav.Item>
        {categories.map((category, index) => (
          <Nav.Item key={index}>
            <MyNavLink
              to={"/jokes/" + category}
              activeStyle={{
                textShadow: "1px 0px 0px black",
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </MyNavLink>
          </Nav.Item>
        ))}
      </Nav>

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

const MyNavLink = styled(NavLink)`
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
