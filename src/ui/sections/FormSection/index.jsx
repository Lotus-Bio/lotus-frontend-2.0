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
import Loading from "@/ui/components/Loading";

const FormSection = ({ message, setMessage }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Verifique se os campos obrigatórios não estão vazios
    if (!name || !email || !message) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });

      setLoading(false);
      return;
    }

    try {
      // Envia a requisição para a API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "E-mail enviado com sucesso. Em breve, entraremos em contato",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          }
        );
      } else {
        toast.error(
          "Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde!",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          }
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde!",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        }
      );
      setLoading(false);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <StyledFormSection id="form">
        <Loading loading={loading} />
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

            <Button onClick={handleForm} ghost={false}>
              Enviar mensagem
            </Button>
          </Form>
        </ContainerForm>
      </StyledFormSection>
    </>
  );
};

export default FormSection;
