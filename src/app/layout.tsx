import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  title: "Tu-Fit",
  description: "Productos saludables, integrales y caseros viandas diarias, frescas y sanas",
  icons:{
    icon: "/tufit-logo.png"
  },
  openGraph: {
    title: "TU-FIT",
    description: "Viandas diarias, frescas y sanas",
    url: "https://www.tu-fit.com/",
    siteName: "TU-FIT",
    images: [
      {
        url: "https://www.tu-fit.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview web TU-FIT",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TU-FIT",
    description: "Viandas diarias, frescas y sanas",
    images: ["https://www.tu-fit.com/preview.png"],
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
        <Analytics/>
      </body>
    </html>
  );
}
