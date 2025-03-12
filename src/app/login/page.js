"use client";
import { useState } from "react";
import Logo from "@/ui/components/Logo";
import { Container, Content, LinkRegister } from "./loginPage.style";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    e.preventDefault();

    toast.success(
      "Login realizado com sucesso! Bem vindo a dashboard da Lotus",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

    console.log(email, password);
    router.push("/dashboard");
  }

  return (
    <Container>
      <Content>
        <Logo large />

        <h2>Entrar</h2>

        <form>
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
            Entrar
          </Button>
        </form>

        <LinkRegister>
          <p>Não tem uma conta?</p>
          <Link href="/register">Registro</Link>
        </LinkRegister>
      </Content>
    </Container>
  );
}
