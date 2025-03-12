"use client";
import { useState } from "react";
import Logo from "@/ui/components/Logo";
import { Container, Content, LinkLogin } from "./registerPage.style";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    e.preventDefault();

    console.log(name, email, password);
  }

  return (
    <Container>
      <Content>
        <Logo large />

        <h2>Cadastrar</h2>

        <form>
          <Input
            name="name"
            placeholder="Seu Nome"
            value={name}
            label="Nome completo"
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
            name="password"
            placeholder="Senha"
            value={password}
            label="Insira sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleChange} ghost={false}>
            Cadastrar
          </Button>
        </form>

        <LinkLogin>
          <p>Já tem uma conta?</p>
          <Link href="/login">Entrar</Link>
        </LinkLogin>
      </Content>
    </Container>
  );
}
