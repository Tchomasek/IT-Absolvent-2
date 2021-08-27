import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/counter-redux/CounterRedux";
import styled, { createGlobalStyle } from "styled-components";

// components
import { AboutMe } from "./components/about-me/AboutMe";
import { BlogApp } from "./components/blog/PostApp";
import { Counter } from "./components/counter/Counter";
import { CounterRedux } from "./components/counter-redux/CounterRedux";
import { HackerTyper } from "./components/hacker-typer/HackerTyper";
import { Header } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Jokes } from "./components/jokes/Jokes";
import { Pexeso } from "./components/pexeso/Pexeso";
import { TicTacToe } from "./components/tic-tac-toe/TicTacToe";
import { Todo } from "./components/todo/Todo";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: visible;
    background-color: #ffffff//#b2bdbd
  }
`;
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <WrapperDiv>
          <Header />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/aboutme" exact>
              <AboutMe />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/hacker-typer">
              <HackerTyper />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="/pexeso">
              <Pexeso />
            </Route>
            <Route path="/blog">
              <BlogApp />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Provider store={store}>
              <Route path="/counter-redux">
                <CounterRedux />
              </Route>
            </Provider>
          </Switch>
        </WrapperDiv>
      </Router>
    </>
  );
}
