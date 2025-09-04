import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Tu-Fit",
  description: "Productos saludables, integrales y caseros viandas diarias, frescas y sanas",
  icons:{
    icon: "/tufit-logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
