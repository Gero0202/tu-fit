'use client'

import styles from "./page.module.css";
import { Archivo_Black } from 'next/font/google';
import { Montserrat } from "next/font/google";
import WindowSize from "./component/WindowSize";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})


export default function Home() {
  const { width } = WindowSize()
  const isDesktop = (width ?? 0) >= 700

  const firstTextDesktop = (
    <>
     PRODUCTOS SALUDABLES, INTEGRALES Y CASEROS
     <br/>
     ¡VIANDAS DIARIAS, FRESCAS Y SANAS!
    </>
  )

  const firstTextMobile = (
    <>
     Productos saludables, integrales y caseros.
    </>
  )

  return (
    <>

      <div className={styles["div-logo"]}>
        <img src="/tufit-logo.png" alt="Logo" className={styles["logo-principal"]} />
        <div className={styles["div-lazos"]}>
          <img src="/pinzeladapistacho.svg" alt="Pinzelada" className={styles["lazoVerde"]} />
          <img src="/pinzeladanaranja.svg" alt="Pinzelada" className={styles["lazoNaranja"]} />
        </div>
      </div>
      <div className={styles["div-textos"]}>
        <p className={`${styles["titulo-principal"]} ${archivoBlack.className}`}>TU-FIT</p>
        <p className={`${styles["texto-principal"]} ${montserrat.className}`}>
          { isDesktop ? firstTextDesktop : firstTextMobile }
        </p>
        <p className={`${styles["texto-secundario"]} ${montserrat.className}`}>¡Hace tu pedido!</p>
        <a
          href="https://wa.me/542216008877"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["enlace-wsp"]}
        >
          <FaWhatsappSquare className={styles["icono-wsp"]} />
        </a>
      </div>
    </>
  );
}
