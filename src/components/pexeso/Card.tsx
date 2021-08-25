import backside from "./cats/backside.jpg";
import styled from "styled-components";
import theme from "./theme";

const MyTd = styled.td`
  width: ${theme.sizeOfCard};
  height: ${theme.sizeOfCard};
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = {
  handleClick: () => void;
  value: number;
  turned: boolean;
  cat: string;
};

function Card(props: Props) {
  const picture = props.turned ? props.cat : backside;
  return (
    <MyTd onClick={props.handleClick}>
      <Img src={picture} />
    </MyTd>
  );
}

export default Card;
