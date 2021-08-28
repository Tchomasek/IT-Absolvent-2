import { ArticleContext } from "./PostApp";
import { Create } from "./Create";
import { Detail } from "./Detail";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Overview } from "./Overview";
import { useContext } from "react";
import styled from "styled-components";
export const URL_BASE = "/blog/";

export const Navbar = () => {
  const { articles } = useContext(ArticleContext);
  return (
    <>
      <Nav fill variant="tabs" className="justify-content-center ">
        <NavItem>
          <MyNavLink exact to={URL_BASE} activeStyle={{ fontWeight: "bold" }}>
            Overview
          </MyNavLink>
        </NavItem>
        <NavItem>
          <MyNavLink
            to={URL_BASE + "create"}
            activeStyle={{ fontWeight: "bold" }}
          >
            Create
          </MyNavLink>
        </NavItem>
      </Nav>
      <hr />
      <Switch>
        <Route exact path={URL_BASE}>
          <Overview />
        </Route>
        <Route exact path={URL_BASE + "create"}>
          <Create />
        </Route>
        {articles.map((article) => (
          <Route key={article.id} path={URL_BASE + "article/" + article.id}>
            <Detail article={article} />
          </Route>
        ))}
      </Switch>
    </>
  );
};

const MyNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: black;
`;
