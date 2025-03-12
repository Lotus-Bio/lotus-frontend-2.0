import { Check } from "lucide-react";
import Button from "../Button";
import Link from "next/link";
import {
  StyledCardPlan,
  Title,
  Value,
  Description,
  List,
  ListItem,
  IndicadoBlock,
} from "./cardPlan.style";

const CardPlan = ({
  title,
  value,
  description,
  list,
  popular = false,
  message,
  setMessage,
}) => {
  const handleClick = (message) => {
    setMessage(message);
  };

  return (
    <StyledCardPlan $popular={popular}>
      <IndicadoBlock $popular={popular}>Mais Popular</IndicadoBlock>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Description>{description}</Description>
      <List>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <Check color="rgb(92, 156, 84)" />
              {item}
            </ListItem>
          );
        })}
      </List>
      <Link href="#form">
        <Button ghost={!popular} onClick={() => handleClick(message)}>
          Saiba mais
        </Button>
      </Link>
    </StyledCardPlan>
  );
};

export default CardPlan;
