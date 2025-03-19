"use client";
import { useState } from "react";
import Logo from "@/ui/components/Logo";
import { Container, Content, LinkLogin } from "./registerPage.style";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Loading from "@/ui/components/Loading";
import PublicRoute from "@/routes/publicRoutes";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      toast.success(
        "Cadastro realizado com sucesso! Seja bem vindo a dashboard",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        }
      );
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        toast.error(
          "Ocorreu um erro de rede. Por favor, verifique sua internet e tente novamente mais tarde",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          }
        );
        setLoading(false);
        return;
      }

      if (error.code === "auth/email-already-in-use") {
        toast.error("E-mail já cadastrado. Por favor, insira outro e-mail", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });
        setLoading(false);
        return;
      }

      toast.error("Erro ao cadastrar usuário! Tente novamente mais tarde", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      setLoading(false);
    }
  }

  return (
    <PublicRoute>
      <Container>
        <Loading loading={loading} />

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
    </PublicRoute>
  );
}
