"use client";
import { useState, useEffect } from "react";
import {
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { useAuth } from "@/context/AuthContext";
import {
  Container,
  Header,
  Title,
  Description,
  Tag,
  Form,
  BlockInput,
  TitleBlockInput,
} from "./profilePage.style";
import Input from "@/ui/components/Input";
import Button from "@/ui/components/Button";
import { toast } from "react-toastify";
import Loading from "@/ui/components/Loading";

export default function Profile() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleUpdateName = async () => {
    setLoading(true);

    try {
      if (user && displayName !== user.displayName) {
        await updateProfile(user, { displayName });
        toast.success("Nome atualizado com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar nome! Tente novamente mais tarde", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });

      setLoading(false);
    }
  };

  // const handleUpdateEmail = async () => {
  //   try {
  //     if (user && newEmail !== user.email) {
  //       if (!currentPassword) {
  //         toast.error("Por favor, insira sua senha atual.", {
  //           position: "top-center",
  //           autoClose: 5000,
  //           theme: "dark",
  //         });
  //         return;
  //       }

  //       const credential = EmailAuthProvider.credential(
  //         user.email,
  //         currentPassword
  //       );
  //       await reauthenticateWithCredential(user, credential); // Reautenticação

  //       // Enviar o e-mail de verificação para o novo e-mail
  //       await sendEmailVerification(user);

  //       toast.success(
  //         "E-mail de verificação enviado! Por favor, verifique seu novo e-mail.",
  //         {
  //           position: "top-center",
  //           autoClose: 5000,
  //           theme: "dark",
  //         }
  //       );

  //       // Instruir o usuário a verificar o novo e-mail antes de atualizar o e-mail
  //       // Não tentaremos atualizar o e-mail até que o e-mail seja verificado.
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Erro ao atualizar o e-mail! Verifique sua senha.", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       theme: "dark",
  //     });
  //   }
  // };

  const handleUpdatePassword = async () => {
    setLoading(true);

    if (!currentPassword || !newPassword) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    try {
      if (user && newPassword) {
        if (!currentPassword) {
          toast.error("Por favor, insira sua senha atual.", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          });
          setLoading(false);
          return;
        }
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential); // Reautenticação
        await updatePassword(user, newPassword); // Atualiza a senha
        toast.success("Senha atualizada com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar a senha! Verifique sua senha.", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });

      setLoading(false);
    }
  };

  return (
    <Container>
      <Loading loading={loading} />
      <Header>
        <div>
          <Title>Perfil</Title>
          <Description>
            Gerencie suas informações pessoais e configurações de conta.
          </Description>
        </div>

        <Tag>Sistema ativo</Tag>
      </Header>

      <Form>
        <BlockInput>
          <TitleBlockInput>Editar nome</TitleBlockInput>
          <Input
            name="name"
            placeholder="Seu Nome"
            value={displayName}
            label="Nome:"
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Button onClick={handleUpdateName} ghost={false}>
            Salvar Nome
          </Button>
        </BlockInput>

        {/* <BlockInput>
          <TitleBlockInput>Editar e-mail</TitleBlockInput>

          <Input
            name="email"
            placeholder="Seu E-mail"
            value={newEmail}
            label="Novo E-mail:"
            type="email"
            onChange={(e) => setNewEmail(e.target.value)}
          />

          <Input
            name="currentPassword"
            placeholder="Sua senha"
            value={currentPassword}
            label="Senha atual:"
            type="password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Button onClick={handleUpdateEmail} ghost={false}>
            Salvar E-mail
          </Button>
        </BlockInput> */}

        <BlockInput>
          <TitleBlockInput>Editar senha</TitleBlockInput>

          <Input
            name="currentPassword2"
            placeholder="Sua senha"
            value={currentPassword}
            label="Senha atual:"
            type="password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <Input
            name="newPassword"
            placeholder="Sua senha"
            value={newPassword}
            label="Nova senha:"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button onClick={handleUpdatePassword} ghost={false}>
            Salvar Senha
          </Button>
        </BlockInput>
      </Form>
    </Container>
  );
}
