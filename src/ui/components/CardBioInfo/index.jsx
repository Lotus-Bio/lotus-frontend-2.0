import {
  StyledCardBioInfo,
  BlockAlign,
  Icon,
  Tag,
  Title,
  Value,
} from "./cardBioInfo.style";

const CardBioInfo = ({ icon, classify, title, value }) => {
  return (
    <StyledCardBioInfo>
      <BlockAlign>
        <Icon>{icon}</Icon>
        <Tag>{classify}</Tag>
      </BlockAlign>

      <div>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </div>
    </StyledCardBioInfo>
  );
};

export default CardBioInfo;
