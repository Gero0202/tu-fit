'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from "@/app/css/landing.module.css"
import { FaWhatsappSquare } from 'react-icons/fa'
import { Archivo_Black } from 'next/font/google';
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion"


const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: '400',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: 'variable'
})

export const Landing = () => {

    const buttonRef = useRef(null)
    const [showFloating, setShowFloating] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setShowFloating(!entry.isIntersecting)
                })
            },
            { threshold: 0.1 }
        )

        if (buttonRef.current) observer.observe(buttonRef.current)

        return () => {
            if (buttonRef.current) observer.unobserve(buttonRef.current)
        }
    }, [])
    return (
        <>
            <div className={styles["div-height"]}>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className={`${styles["div-logo"]}`}>
                        <img src="/tufit-logo.png" alt="Logo" className={styles["logo-principal"]} />
                        <div className={styles["div-lazos"]}>
                            <img src="/pinzeladapistacho.svg" alt="Pinzelada" className={styles["lazoVerde"]} />
                            <img src="/pinzeladanaranja.svg" alt="Pinzelada" className={styles["lazoNaranja"]} />
                        </div>
                    </div>
                </motion.div>

                <div className={`${styles["div-textos"]}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        <p className={`${styles["titulo-principal"]}  ${archivoBlack.className}`}>TU-FIT</p>
                        <p className={`${styles["texto-principal"]}  ${montserrat.className}`}>
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
                            ref={buttonRef}
                            href="https://wa.me/542215766067"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles["enlace-wsp"]} ${styles["middle"]}`}
                        >
                            <FaWhatsappSquare className={styles["icono-wsp"]} />
                        </a>
                    </motion.div>

                    {showFloating && (
                        <a
                            href="https://wa.me/542215766067"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles["enlace-wsp"]} ${styles["bottom"]}`}
                        >
                            <FaWhatsappSquare className={styles["icono-wsp"]} />
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

