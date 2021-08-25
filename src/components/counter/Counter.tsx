import "./App.css";
import { Helmet } from "react-helmet";
import React from "react";
import randomColor from "randomcolor";
import styled from "styled-components";

interface State {
  counter: number;
  color: string;
}

export class Counter extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
    this.state = { counter: 0, color: "blue" };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let rColor = randomColor();
    this.setState({
      color: rColor,
    });
  }
  increment() {
    this.changeColor();
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  decrement() {
    this.changeColor();
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Counter</title>
        </Helmet>
        <WrapperDiv color={this.state.color}>
          <a>{this.state.counter}</a>
          <ButtonWrapper>
            <Button onClick={this.decrement}>-1</Button>
            <Button onClick={this.increment}>+1</Button>
          </ButtonWrapper>
        </WrapperDiv>
      </>
    );
  }
}

const ButtonWrapper = styled.div``;

const Button = styled.button`
  margin: 5px;
  border-radius: 15px;
`;

type WrappedDivProps = {
  color: string;
};

const WrapperDiv = styled.div<WrappedDivProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
`;
