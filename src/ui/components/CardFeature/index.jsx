import {
  StyledCardFeature,
  Icon,
  Title,
  Description,
} from "./cardFeature.style";

const CardFeature = ({ icon, title, description }) => {
  return (
    <StyledCardFeature>
      <Icon>{icon}</Icon>

      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </StyledCardFeature>
  );
};

export default CardFeature;
