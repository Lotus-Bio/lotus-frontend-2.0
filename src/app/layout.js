import "../styles/reset.css";

export const metadata = {
  title: "Lotus",
  description:
    "Lotus é um sistema de frontend que coleta, exibe e monitora dados de um Arduino conectado a um biodigestor. Com uma interface intuitiva, ele facilita o controle dos parâmetros do processo de biodigestão, oferecendo uma solução prática e eficiente para gestão ambiental e energética.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
