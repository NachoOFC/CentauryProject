import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Piedras Preciosas | Venta de Piedras Naturales",
  description: "Venta de piedras naturales. Las mejores piedras para jardines, macetas, acuarios y decoración.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
