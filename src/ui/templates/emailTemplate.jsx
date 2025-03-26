import * as React from "react";

export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>Formulário enviado por, {name}!</h1>
    <p>{email}</p>
    <p>{message}</p>
  </div>
);
