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

const FormSection = () => {
  return (
    <StyledFormSection>
      <div className="container">
        <TitleSection>Get in Touch</TitleSection>
        <SubtitleSection>
          Ready to transform your waste management? Contact us today.
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
            // value={inputMessage}
            label="Sua mensagem"
            isTextarea
            onChange={(e) => console.log(e.target.value)}
          />

          <Button ghost={false}>Send Message</Button>
        </Form>
      </ContainerForm>
    </StyledFormSection>
  );
};

export default FormSection;
