export const metadata = {
  title: "Web Academy"
};

import BootstrapClient from "./components/BootstrapCliente";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar/Navbar";
import { ReactQueryClienteProvider } from "./components/ReactQueryClient";
import FavoritosProvider from "./state/FavoritosProvider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryClienteProvider>
          <FavoritosProvider>
            <Navbar />
            {children}
            <BootstrapClient />
          </FavoritosProvider>
        </ReactQueryClienteProvider>
      </body>
    </html>
  );
}
