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
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        touchMove: false,
    };

    return (
        <div className={styles["div-contenedor"]}>
            <div className={styles["div-general"]}>
                <img src="/pincelada-salado.svg" alt="title" className={styles["pincelada-title"]} />
                <p className={montserrat.className}>¡PEDINOS EL CATALOGO DE VIANDAS A NUESTRO WHATSAPP! </p>
                <Slider {...settings}>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado4.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado5.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado6.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado7.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado8.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado9.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado10.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado11.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado12.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado13.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado14.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado15.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado16.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado17.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado18.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado19.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado20.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado21.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado22.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado23.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                    <div className={styles["div-img"]} style={{ width: 250 }}>
                        <div className={styles["slide-inner"]}>
                            <img src="/salado24.jpeg" alt="img1" className={styles["carousel-img"]} />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
