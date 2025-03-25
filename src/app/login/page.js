"use client";
import { useState } from "react";
import Logo from "@/ui/components/Logo";
import { BackPage, Container, Content, LinkRegister } from "./loginPage.style";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from "@/ui/components/Loading";
import PublicRoute from "@/routes/publicRoutes";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(
        "Login realizado com sucesso! Bem vindo a dashboard da Lotus",
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

      if (error.code === "auth/invalid-credential") {
        toast.error(
          "E-mail ou senha incorretos. Verifique suas credenciais e tente novamente",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          }
        );

        setLoading(false);
        return;
      }

      toast.error("Erro ao fazer login! Tente novamente mais tarde", {
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
        <BackPage href="/">
          <p>
            <ArrowLeft size={32} />
            Voltar
          </p>
        </BackPage>
        <Loading loading={loading} />

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
    </PublicRoute>
  );
}
