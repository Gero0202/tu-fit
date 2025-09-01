"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/css/carruseldesktop.module.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})

export default function CarruselDesktop() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0, // velocidad base (0 hace que sea continuo)
        speed: 6000, // cuanto más alto, más lento se mueve
        cssEase: "linear", // transición lineal para que sea continuo y sin trabas
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <div className={styles["div-contenedor"]}>
            <div className={styles["div-general"]}>
                <img src="/pincelada-salado.svg" alt="title" className={styles["pincelada-title"]} />
                <p className={montserrat.className}>¡PEDINOS EL CATALOGO DE VIANDAS A NUESTRO WHATSAPP! </p>
                <Slider {...settings}>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/pepas.png" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
