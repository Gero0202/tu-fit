'use client'

import styles from "./page.module.css";
import { Archivo_Black } from 'next/font/google';
import { Montserrat } from "next/font/google";
import WindowSize from "./component/WindowSize";
import { FaWhatsappSquare } from "react-icons/fa";
import CardSweetOne from "./component/CardSweetOne";

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
      <br />
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
      <div className={styles["div-height"]}>
        <div className={`${styles["div-logo"]} ${styles.fadeIn}`}>
          <img src="/tufit-logo.png" alt="Logo" className={styles["logo-principal"]} />
          <div className={styles["div-lazos"]}>
            <img src="/pinzeladapistacho.svg" alt="Pinzelada" className={styles["lazoVerde"]} />
            <img src="/pinzeladanaranja.svg" alt="Pinzelada" className={styles["lazoNaranja"]} />
          </div>
        </div>

        <div className={`${styles["div-textos"]}`}>
          <p className={`${styles["titulo-principal"]} ${styles.fadeIn} ${archivoBlack.className}`}>TU-FIT</p>
          <p className={`${styles["texto-principal"]} ${styles.fadeIn} ${montserrat.className}`}>
            {isDesktop ? firstTextDesktop : firstTextMobile}
          </p>
          <p className={`${styles["texto-secundario"]} ${styles.fadeIn} ${montserrat.className}`}>¡Hace tu pedido!</p>
            <a
            href="https://wa.me/542216008877"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["enlace-wsp"]} ${styles.fadeIn}`}
            >
            <FaWhatsappSquare className={`${styles["icono-wsp"]} ${styles.fadeIn}`} />
            </a>
        </div>
      </div>


      <div className={styles["div-dulce-title"]}>
        <img src="/pincelada_sin_fondo.svg" alt="titulo" className={styles["dulces-img"]} />
        <p className={`${styles["dulces-title"]} ${montserrat.className}`}>DULCE</p>
      </div>


      <div className={styles["card-desktop"]}>
        <CardSweetOne
          img="/pepas.png"
          title="PEPAS"
          text="100% INTEGRALES 
        BAÑADAS EN CHOCOLATE SEMI AMARGO 
        (MEMBRILLO, BATATA O DULCE DE LECHE)"
          bottomText="6U. (UN SOLO SABOR)"
        />

         <CardSweetOne
          img="/pepas.png"
          title="PEPAS"
          text="100% INTEGRALES 
        BAÑADAS EN CHOCOLATE SEMI AMARGO 
        (MEMBRILLO, BATATA O DULCE DE LECHE)"
          bottomText="6U. (UN SOLO SABOR)"
        />

         <CardSweetOne
          img="/pepas.png"
          title="PEPAS"
          text="100% INTEGRALES 
        BAÑADAS EN CHOCOLATE SEMI AMARGO 
        (MEMBRILLO, BATATA O DULCE DE LECHE)"
          bottomText="6U. (UN SOLO SABOR)"
        />

         <CardSweetOne
          img="/pepas.png"
          title="PEPAS"
          text="100% INTEGRALES 
        BAÑADAS EN CHOCOLATE SEMI AMARGO 
        (MEMBRILLO, BATATA O DULCE DE LECHE)"
          bottomText="6U. (UN SOLO SABOR)"
        />

      </div>
    </>
  );
}
