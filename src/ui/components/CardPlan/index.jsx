import { Check } from "lucide-react";
import Button from "../Button";
import {
  StyledCardPlan,
  Title,
  Value,
  Description,
  List,
  ListItem,
  IndicadoBlock,
} from "./cardPlan.style";

const CardPlan = ({ title, value, description, list, popular = false }) => {
  return (
    <StyledCardPlan popular={popular}>
      <IndicadoBlock popular={popular}>Mais Popular</IndicadoBlock>
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
      <Button ghost={!popular}>Saiba mais</Button>
    </StyledCardPlan>
  );
};

export default CardPlan;
