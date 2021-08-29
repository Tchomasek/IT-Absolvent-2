import { Image } from "./Image";
import backside from "./cats/backside.jpg";
import styled from "styled-components";
import theme from "./theme";

type ImgProps = {
  turned: boolean;
};

type CardProps = {
  handleClick: () => void;
  value: number;
  turned: boolean;
  cat: string;
};

function Card(props: CardProps) {
  const picture = props.turned ? props.cat : backside;
  return (
    <MyTd>
      <Img src={picture} onClick={props.handleClick} />
    </MyTd>
  );
}

export default Card;

const Img = styled(Image)`
  width: ${theme.sizeOfCard};
  height: ${theme.sizeOfCard};
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const MyTd = styled.td`
  width: ${theme.sizeOfCard};
  height: ${theme.sizeOfCard};
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;
