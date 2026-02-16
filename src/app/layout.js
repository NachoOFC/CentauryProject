import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Piedras Preciosas | Joyería Exclusiva",
  description: "Descubre nuestra colección exclusiva de piedras preciosas y semipreciosas de la más alta calidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
