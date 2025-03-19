import { Construction } from "lucide-react";
import { StyledModalBlur, Container, BlockIcon } from "./modalBlur.style";

const ModalBlur = ({}) => {
  return (
    <StyledModalBlur>
      <Container>
        <BlockIcon>
          <Construction />
        </BlockIcon>
        <h3>Em construção</h3>
        <p>Está página está sendo atualizada. Em breve estará disponível!</p>
      </Container>
    </StyledModalBlur>
  );
};

export default ModalBlur;
