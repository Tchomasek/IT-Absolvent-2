import { Image } from "./Image";
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
      <Image src={picture} />
    </MyTd>
  );
}

export default Card;
