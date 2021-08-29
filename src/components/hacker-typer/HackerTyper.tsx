import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import templateText from "./Text";
interface State {
  text: string;
  counter: number;
  modalIsOpen: boolean;
  speed: number;
}

export class HackerTyper extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
    this.myHandler = this.myHandler.bind(this);
    this.openSettings = this.openSettings.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.state = {
      text: "",
      counter: 0,
      modalIsOpen: false,
      speed: 5,
    };
  }

  myHandler() {
    this.setState((prevState) => {
      return {
        text:
          prevState.text +
          templateText.slice(
            this.state.counter,
            this.state.counter + this.state.speed
          ),
        counter: prevState.counter + this.state.speed,
      };
    });
    const div = document.getElementById("cont")!;
    div.innerHTML = this.state.text;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.myHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.myHandler);
  }

  openSettings() {
    this.setState({ modalIsOpen: true });
    document.removeEventListener("keydown", this.myHandler);
  }

  closeSettings() {
    this.setState({ modalIsOpen: false });
    document.addEventListener("keydown", this.myHandler);
  }

  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        background-color: black;
        color: #0cee0c;
        overflow: visible;
      }
    `;
    return (
      <>
        <Helmet>
          <title>HacterTyper</title>
        </Helmet>
        <GlobalStyle />
        <Modal
          isOpen={this.state.modalIsOpen}
          style={{
            content: {
              color: "black",
              top: "35%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              width: "60%",
              transform: "translate(-40%, -10%)",
            },
          }}
        >
          <SpeedInputDiv>
            <SpeedDiv>Speed:</SpeedDiv>
            <SpeedInput
              type="number"
              value={this.state.speed}
              onChange={(e) =>
                this.setState({ speed: parseInt(e.target.value) })
              }
            />
            <ModalButton onClick={this.closeSettings}>x</ModalButton>
          </SpeedInputDiv>
        </Modal>
        <ContainerDiv id="cont">Start typing on your keyboard...</ContainerDiv>
        <SettingsButtonDiv>
          <Button id="settingsButton" onClick={this.openSettings}>
            Settings
          </Button>
        </SettingsButtonDiv>
      </>
    );
  }
}

const SpeedDiv = styled.div`
  padding-right: 10px;
`;

const SpeedInputDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const SpeedInput = styled.input`
  height: 30px;
`;

const ModalButton = styled.button`
  height: 30px;
  border: none;
  background-color: grey;
  border-radius: 0px 10px 10px 0px;
`;

const ContainerDiv = styled.div`
  white-space: pre;
  font-size: 20px;
`;

const SettingsButtonDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
