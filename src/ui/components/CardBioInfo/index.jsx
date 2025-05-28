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
        <BlockAlign>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
        </BlockAlign>
        <Tag>{classify}</Tag>
      </BlockAlign>
      <div>
        <Value>{value}</Value>
      </div>
    </StyledCardBioInfo>
  );
};

export default CardBioInfo;
