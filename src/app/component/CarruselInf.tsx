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
                <img src="/pincelada-salado.svg" alt="title" className={styles["pincelada-title"]} />
                <p className={montserrat.className}>¡PEDINOS EL CATALOGO DE VIANDAS A NUESTRO WHATSAPP! </p>
                <div className={styles["slider"]}>
                    <div className={styles["slide-track"]}>
                        <div className={styles["slide"]}>
                            <img src="/salado1.png" alt="" />
                        </div>

                        


                        <div className={styles["slide"]}>
                            <img src="/salado4.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado5.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado6.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado7.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado8.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado9.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado10.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado11.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado12.jpeg" alt="" />
                        </div>

                       

                         {/* REPEAT */}
                        <div className={styles["slide"]}>
                            <img src="/salado1.png" alt="" />
                        </div>

                        


                        <div className={styles["slide"]}>
                            <img src="/salado4.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado5.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado6.jpeg" alt="" />
                        </div>


                        <div className={styles["slide"]}>
                            <img src="/salado7.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado8.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado9.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado10.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado11.jpeg" alt="" />
                        </div>

                        <div className={styles["slide"]}>
                            <img src="/salado12.jpeg" alt="" />
                        </div>

                       
                    </div>
                </div>
            </div>
        </>
    );
}
