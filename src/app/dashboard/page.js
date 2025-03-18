"use client";
import { Container } from "./dashboardPage.style";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  console.log(user);
  return (
    <Container>
      <h1>dashboard</h1>

      {user && (
        <>
          <p>Nome: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </Container>
  );
}
