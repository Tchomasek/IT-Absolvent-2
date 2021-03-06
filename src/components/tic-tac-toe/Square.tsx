import { memo } from "react";
import styled from "styled-components";
import theme from "./theme";

type squareProps = {
  handleClick: () => void;
  value: "O" | "X" | null;
};

const Square = memo((props: squareProps) => {
  return <MyTd onClick={props.handleClick}>{props.value}</MyTd>;
});

export default Square;

const MyTd = styled.td`
  width: ${theme.widthOfCell};
  height: ${theme.heightOfCell};
  border: 1px solid ${theme.cellBorderColor};
  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
  &:hover {
    background-color: ${theme.cellHoverColor};
  }
`;
