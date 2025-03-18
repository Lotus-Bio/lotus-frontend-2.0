import "../styles/reset.css";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "@/lib/registry";
import Sidemenu from "@/ui/components/Sidemenu";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Lotus",
  description:
    "Lotus é um sistema de frontend que coleta, exibe e monitora dados de um Arduino conectado a um biodigestor. Com uma interface intuitiva, ele facilita o controle dos parâmetros do processo de biodigestão, oferecendo uma solução prática e eficiente para gestão ambiental e energética.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            <ToastContainer />

            <div style={{ display: "flex", minHeight: "100vh" }}>
              <Sidemenu />
              <div style={{ flexGrow: 1 }}>{children}</div>
            </div>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
