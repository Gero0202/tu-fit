'use client'

import styles from "./page.module.css";
import { Archivo_Black } from 'next/font/google';
import { Montserrat } from "next/font/google";
import WindowSize from "./component/WindowSize";
import { FaWhatsappSquare } from "react-icons/fa";
import CardSweetOne from "./component/CardSweetOne";
import CardSweetTwo from "./component/CardSweetTwo";
import CardSweetThree from "./component/CardSweetThree";
import CardSweetFour from "./component/CardSweetFour";
import Carrusel from "./component/Carrusel";
import AboutUs from "./component/AboutUs";
import AboutUsDesktop from "./component/AboutUsDesktop";
import Modal from "./component/Modal";
import CarruselInfinito from "./component/CarruselInf";
import BoxMerienda from "./component/BoxMerienda";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

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
  const isDesltopAboutUs = (width ?? 0) >= 1500


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
            <span className={styles.textMobile}>
              Productos saludables, integrales y caseros.
            </span>
            <span className={styles.textDesktop}>
              PRODUCTOS SALUDABLES, INTEGRALES Y CASEROS
              <br />
              ¡VIANDAS DIARIAS, FRESCAS Y SANAS!
            </span>
          </p>
          <p className={`${styles["texto-secundario"]} ${styles.fadeIn} ${montserrat.className}`}>¡Hace tu pedido!</p>
          <a
            href="https://wa.me/542215766067"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["enlace-wsp"]} ${styles.fadeIn}`}
          >
            <FaWhatsappSquare className={`${styles["icono-wsp"]} ${styles.fadeIn}`} />
          </a>
        </div>
      </div>

      <div className={styles["container-sweet"]}>
        <div className={styles["div-dulce-title"]}>
          <img src="/pincelada_sin_fondo.svg" alt="titulo" className={styles["dulces-img"]} />
          <p className={`${styles["dulces-title"]} ${montserrat.className}`}>DULCE</p>
        </div>
        <div className={styles["card-desktop"]}>

          <CardSweetOne
            img="/pepas.png"
            title="PEPAS"
            text="100% INTEGRALES"
            bottomText="6U. (UN SOLO SABOR)"
          />

          <CardSweetTwo
            img="/dulce27.png"
            title="CUADRADO DE COCO"
            text="BASE DE MASA INTEGRAL, DULCE DE LECHE Y CRUMBLE DE COCO"
            bottomText="1U."
          />

          <CardSweetThree
            img="/dulce5.jpeg"
            title="ALFAPISTACHO"
            text="ALFAJOR SIN GLUTEN - NO APTO PARA CELIACOS - MASA A BASE DE PISTACHOS Y HARINA DE FRUTOS SECOS
          , SIN AZUCAR. DOBLE RELLENO: CHOCOLATE Y PISTACHO Y PISTACHO CREAMY.
          COBERTURA CHOCOLATE 70% CACO Y PISTACHOS TOSTADOS"
            bottomText="1U."
          />

          <CardSweetTwo
            img="/dulce4.png"
            title="BUDINES"
            text="100% INTEGRALES SIN CONSERVANTES"
            bottomText="1U. 400grs"
          />

          <CardSweetOne
            img="/dulce21.jpeg"
            title="ALFAJOR DE MAICENA"
            text="SUAVES, LIVIANOS Y LLENOS DE SABOR"
            bottomText="6U."
          />

          <CardSweetTwo
            img="/dulce26.png"
            title="PASTAFROLA"
            text="PASTAFROLA 100% INTEGRAL DE MEMBRILLO, BATATA O DULCE DE LECHE"
            bottomText="PORCION MEDIANA"
          />

          <CardSweetThree
            img="/dulce6.jpeg"
            title="ALFAMARROC"
            text="TAPAS DE HARINA INTEGRAL, RELLENO DE QUESO CREMA LIGHT, 
            PASTA DE MANI SIN AZUCAR, ENDULZADO CON EDULCORANTE"
            bottomText="4U."
          />

          <CardSweetTwo
            img="/dulce29.png"
            title="HAVANNET FIT SALUDABLES"
            text="BASE DE HARINA INTEGRAL Y CHOCALET SEMI AMARGO SIN AZUCAR"
            bottomText="4U."
          />

          <CardSweetOne
            img="/dulce2.png"
            title="ALFAJORES SALUDABLES"
            text="SALVADO DE AVENA, HARINA DE ALMENDRAS, HUEVOS, GHEE, CACAO AMARGO, AZUCAR MASCABO , DULCE DE LECHE Y CACAO AMARGO"
            bottomText="4U."
          />

          <CardSweetTwo
            img="/dulce31.png"
            title="ALFAJORES MARPLATENSE"
            text="TAMAÑO XL"
            texTwo="HARINA INTEGRAL, HUEVO, AZUCAR MASCABO, GHEE, CACAO AMARGO Y DULCE DE LECHE"
            bottomText="4U."
          />

          <CardSweetOne
            img="/dulce32.png"
            title="ALFACOOKIE"
            text="GALLETITA INTEGRAL DE VAINILLA Y CHIPS DE CHOCOLATE , RELLENO DE DULCE DE LECHE"
            bottomText="4U."
          />

          <CardSweetTwo
            img="/dulce14.jpeg"
            title="WAFFLES PROTEICOS"
            text="SIN HARINAS REFINADAS, SIN AZUCAR, SIN COLORANTES, NI CONSERVANTES"
            bottomText="6U."
          />

        </div>
        <div className={styles["modal"]}>
          <Modal
            title="CARTA"
            img="/carta1.jpeg"
            img2="/carta2.jpeg"
          />
        </div>
      </div>
      {isDesktop ? <CarruselInfinito /> : <Carrusel />}
      {isDesltopAboutUs ? <AboutUsDesktop /> : <AboutUs />}
      <BoxMerienda />

      <Footer />
    </>
  );
}
