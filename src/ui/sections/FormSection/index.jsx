"use client";
import {
  StyledFormSection,
  ContainerForm,
  BlockContact,
  Form,
} from "./formSection.style";
import TitleSection from "@/ui/components/TitleSection";
import SubtitleSection from "@/ui/components/SubtitleSection";
import { contacts } from "@/data/contacts";
import ItemContact from "@/ui/components/ItemContact";
import Button from "@/ui/components/Button";
import Input from "@/ui/components/Input";

const FormSection = ({ message, setMessage }) => {
  return (
    <StyledFormSection id="form">
      <div className="container">
        <TitleSection>Entre em contato</TitleSection>
        <SubtitleSection>
          Pronto para transformar sua gestão de resíduos? Entre em contato
          conosco hoje mesmo.
        </SubtitleSection>
      </div>
      <ContainerForm>
        <BlockContact>
          {contacts.map((contact, index) => {
            return (
              <ItemContact
                key={index}
                icon={<contact.icon />}
                title={contact.title}
                info={contact.info}
              />
            );
          })}
        </BlockContact>

        <Form>
          <Input
            name="name"
            placeholder="Seu Nome"
            // value={inputName}
            label="Nome"
            onChange={(e) => console.log(e.target.value)}
          />

          <Input
            name="email"
            placeholder="Seu E-mail"
            // value={inputName}
            label="E-mail"
            onChange={(e) => console.log(e.target.value)}
          />

          <Input
            name="message"
            placeholder="Mensagem"
            value={message}
            label="Sua mensagem"
            isTextarea
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button ghost={false}>Enviar mensagem</Button>
        </Form>
      </ContainerForm>
    </StyledFormSection>
  );
};

export default FormSection;
