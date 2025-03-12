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
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSection = ({ message, setMessage }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const notify = (e) => {
    e.preventDefault();
    toast.success("Sua mensagem foi enviado com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setEmail("");
    setName("");
    setMessage("");
    router.push("#header");
  };
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
            value={name}
            label="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="email"
            placeholder="Seu E-mail"
            value={email}
            label="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            name="message"
            placeholder="Mensagem"
            value={message}
            label="Sua mensagem"
            isTextarea
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button onClick={notify} ghost={false}>
            Enviar mensagem
          </Button>
        </Form>
      </ContainerForm>
    </StyledFormSection>
  );
};

export default FormSection;
