import React from "react";
import styles from "@/app/css/carruselinf.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Modal from "./Modal";

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
                            <Image
                                src="/salado8.jpeg"
                                alt="vianda salada"
                                width={230} 
                                height={230} 
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado9.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado14.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado7.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado16.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado17.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado20.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado24.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado22.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>





                        {/* REPEAT */}
                        <div className={styles["slide"]}>
                            <Image
                                src="/salado8.jpeg"
                                alt="vianda salada"
                                width={230} 
                                height={230} 
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado9.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado14.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado7.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado16.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado17.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado20.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado24.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                        <div className={styles["slide"]}>
                            <Image
                                src="/salado22.jpeg"
                                alt="vianda salada"
                                width={230}
                                height={230}
                            />
                        </div>

                    </div>
                </div>
                <div className={styles["modal"]}>
                <Modal
                    title="CARTA"
                    img="/carta3.jpeg"
                    img2="/carta4.jpeg"
                />
            </div>
            </div>
        </>
    );
}
