'use client'
import { motion } from 'framer-motion'
import styles from "./page.module.css";
import { Archivo_Black } from 'next/font/google';
import { Montserrat } from "next/font/google";
import WindowSize from "./component/WindowSize";
import Carrusel from "./component/Carrusel";
import AboutUs from "./component/AboutUs";
import AboutUsDesktop from "./component/AboutUsDesktop";
import Modal from "./component/Modal";
import CarruselInfinito from "./component/CarruselInf";
import BoxMerienda from "./component/BoxMerienda";
import Footer from "./component/Footer";
import { Landing } from "./component/Landing";
import { SweetCard } from "./component/SweetCard";
import { SaltyCarouselMobile } from './component/SaltyCarouselMobile';
import { OurStory } from './component/OurStory';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})

const saltyImages = [
  "/salado1.png",
    "/salado4.jpeg",
    "/salado6.jpeg",
    "/salado7.jpeg",
    "/salado8.jpeg",
    "/salado9.jpeg",
    "/salado10.jpeg",
    "/salado12.jpeg",
    "/salado13.jpeg",
    "/salado14.jpeg",
    "/salado15.jpeg",
    "/salado16.jpeg",
    "/salado17.jpeg",
    "/salado18.jpeg",
    "/salado19.jpeg",
    "/salado20.jpeg",
    "/salado21.jpeg",
    "/salado22.jpeg",
    "/salado23.jpeg",
    "/salado24.jpeg",
]

const sweetProducts = [
  {
    img: '/pepas.png',
    title: 'PEPAS',
    text: '100% INTEGRALES',
    bottomText: '6U. (UN SOLO SABOR)',
  },
  {
    img: '/dulce27.png',
    title: 'CUADRADO DE COCO',
    text: 'BASE DE MASA INTEGRAL, DULCE DE LECHE Y CRUMBLE DE COCO',
    bottomText: '1U.',
  },
  {
    img: '/dulce5.jpeg',
    title: 'ALFAPISTACHO',
    text: 'ALFAJOR SIN GLUTEN - NO APTO PARA CELIACOS - MASA A BASE DE PISTACHOS Y HARINA DE FRUTOS SECOS, SIN AZUCAR. DOBLE RELLENO: CHOCOLATE Y PISTACHO Y PISTACHO CREAMY. COBERTURA CHOCOLATE 70% CACAO Y PISTACHOS TOSTADOS',
    bottomText: '1U.',
  },
  {
    img: '/dulce4.png',
    title: 'BUDINES',
    text: '100% INTEGRALES SIN CONSERVANTES',
    bottomText: '1U. 400grs',
  },
  {
    img: '/dulce21.jpeg',
    title: 'ALFAJOR DE MAICENA',
    text: 'SUAVES, LIVIANOS Y LLENOS DE SABOR',
    bottomText: '6U.',
  },
  {
    img: '/dulce26.png',
    title: 'PASTAFROLA',
    text: 'PASTAFROLA 100% INTEGRAL DE MEMBRILLO, BATATA O DULCE DE LECHE',
    bottomText: 'PORCIÓN MEDIANA',
  },
  {
    img: '/dulce6.jpeg',
    title: 'ALFAMARROC',
    text: 'TAPAS DE HARINA INTEGRAL, RELLENO DE QUESO CREMA LIGHT, PASTA DE MANÍ SIN AZÚCAR, ENDULZADO CON EDULCORANTE',
    bottomText: '4U.',
  },
  {
    img: '/dulce29.png',
    title: 'HAVANNET FIT SALUDABLES',
    text: 'BASE DE HARINA INTEGRAL Y CHOCOLATE SEMI AMARGO SIN AZÚCAR',
    bottomText: '4U.',
  },
  {
    img: '/dulce2.png',
    title: 'ALFAJORES SALUDABLES',
    text: 'SALVADO DE AVENA, HARINA DE ALMENDRAS, HUEVOS, GHEE, CACAO AMARGO, AZÚCAR MASCABO, DULCE DE LECHE Y CACAO AMARGO',
    bottomText: '4U.',
  },
  {
    img: '/dulce31.png',
    title: 'ALFAJORES MARPLATENSE',
    text: 'TAMAÑO XL',
    texTwo: 'HARINA INTEGRAL, HUEVO, AZÚCAR MASCABO, GHEE, CACAO AMARGO Y DULCE DE LECHE',
    bottomText: '4U.',
  },
  {
    img: '/dulce32.png',
    title: 'ALFACOOKIE',
    text: 'GALLETITA INTEGRAL DE VAINILLA Y CHIPS DE CHOCOLATE, RELLENO DE DULCE DE LECHE',
    bottomText: '4U.',
  },
  {
    img: '/dulce14.jpeg',
    title: 'WAFFLES PROTEICOS',
    text: 'SIN HARINAS REFINADAS, SIN AZÚCAR, SIN COLORANTES, NI CONSERVANTES',
    bottomText: '6U.',
  },
]


export default function Home() {
  const { width } = WindowSize()
  const isDesktop = (width ?? 0) >= 700
  const isDesltopAboutUs = (width ?? 0) >= 1500


  return (
    <>
      <Landing />
      {/* SECCIÓN DULCE REINVENTADA */}
      <section className={styles["container-sweet"]}>
      {/* LUCES FLOTANTES DE FONDO */}
      <div className={styles.ambientLightTopLeft} />
      <div className={styles.ambientLightBottomRight} />
      <div className={styles.ambientLightCenter} />

      {/* ENCABEZADO CON ANIMACIÓN DE SCROLL */}
      <motion.div
        className={styles["div-dulce-title"]}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Badge superior */}
        {/* <div className={styles.sectionBadge}>
          <span className={styles.badgeDot} />
          <span>PASTELERÍA SALUDABLE</span>
        </div> */}

        {/* Título Principal */}
        <h2 className={`${styles["dulces-title"]} ${montserrat.className}`}>
          Línea <span className={styles.highlightText}>Dulce</span>
        </h2>

        {/* Subtítulo */}
        <p className={styles.dulceSubtitle}>
          Disfruta sin culpa con preparaciones 100% integrales, 
          endulzantes naturales y sabores reales.
        </p>

        {/* Chips decorativos */}
        <div className={styles.featureChips}>
          <span>✦ 100% Integrales</span>
          <span>✦ Sin Conservantes</span>
          <span>✦ Endulzado Natural</span>
        </div>
      </motion.div>

      {/* GRID DE CARDS */}
      <div className={styles.gridSweet}>
        {sweetProducts.map((product, index) => (
          <SweetCard
            key={index}
            index={index}
            img={product.img}
            title={product.title}
            text={product.text}
            texTwo={product.texTwo}
            bottomText={product.bottomText}
          />
        ))}
      </div>

      <div className={styles["modal"]}>
        <Modal
          title="CARTA"
          img="/cartadulce1.jpeg"
          img2="/cartadulce2.jpeg"
          img3="/cartadulce3.jpeg"
        />
      </div>
    </section>


      
        
      {isDesktop ? <CarruselInfinito /> : <SaltyCarouselMobile images={saltyImages} intervalDuration={3500} />}
      <OurStory/>
      <BoxMerienda />

      <Footer />
    </>
  );
}
