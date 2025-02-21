import {
  StyledCardMission,
  Icon,
  Title,
  Description,
} from "./cardMission.style";

const CardMission = ({ icon, title, description }) => {
  return (
    <StyledCardMission>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCardMission>
  );
};

export default CardMission;
