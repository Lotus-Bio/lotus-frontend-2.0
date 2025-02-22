import { StyledItemContact, Icon, Title, Info } from "./itemContact.style";

const ItemContact = ({ icon, title, info }) => {
  return (
    <StyledItemContact>
      <Icon>{icon}</Icon>

      <div>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </div>
    </StyledItemContact>
  );
};

export default ItemContact;
