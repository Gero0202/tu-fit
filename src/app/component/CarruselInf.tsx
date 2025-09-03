import React from "react";
import styles from "@/app/css/carruselinf.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: 'variable'
})

export default function CarruselInfinito() {
    return (
        <>
            <div className={styles["div-general"]}>
                <div className={styles["div-dulce-title"]}>
                    <img src="/pincelada-salado.svg" alt="title" className={styles["pincelada-title"]} />
                    <p className={montserrat.className}>¡PEDINOS EL CATALOGO DE VIANDAS A NUESTRO WHATSAPP! </p>
                </div>
                <div className={styles["slider"]}>
                    <div className={styles["slide-track"]}>
                        <div className={styles["slide"]}>
                            <img src="/salado8.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado9.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado14.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado7.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado16.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado17.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado20.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado24.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado22.jpeg" alt="" />
                        </div>





                        {/* REPEAT */}
                        <div className={styles["slide"]}>
                            <img src="/salado8.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado9.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado14.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado7.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado16.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado17.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado20.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado24.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado22.jpeg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
