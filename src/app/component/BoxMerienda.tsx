'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import {
    FaGift,
    FaHeart,
    FaSmileBeam,
    FaCoffee,
    FaCookieBite,
    FaUtensils,

} from 'react-icons/fa'
import { BsFillCheckCircleFill, BsStars } from 'react-icons/bs'
import styles from '@/app/css/boxmerienda.module.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600', '700', '800', '900'],
})

export default function BoxMerienda() {
    return (
        <section className={styles.fullWidthSection}>

            {/* ELEMENTOS DECORATIVOS ORGÁNICOS DE FONDO (BURBUJAS / GLOW) */}
            <motion.div
                className={`${styles.glowCircle} ${styles.glowOrange}`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className={`${styles.glowCircle} ${styles.glowGreen}`}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* CARDS FLOTANTES EN EL ESPACIO (POSICIONADAS EN DESKTOP/MOBILE) */}
            <motion.div
                className={`${styles.floatingCard} ${styles.cardTopLeft}`}
                initial={{ opacity: 0, y: -30, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                animate={{
                    y: [-6, 6, -6],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.6 }
                }}
            >
                <div className={styles.floatingIconOrange}>
                    <FaCookieBite size={20} />
                </div>
                <div>
                    <h4>Dulce & Saludable</h4>
                    <p>100% Sin Culpas</p>
                </div>
            </motion.div>

            <motion.div
                className={`${styles.floatingCard} ${styles.cardBottomRight}`}
                initial={{ opacity: 0, y: 30, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                animate={{
                    y: [6, -6, 6],
                }}
                transition={{
                    y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 0.6 }
                }}
            >
                <div className={styles.floatingIconGreen}>
                    <FaCoffee size={20} />
                </div>
                <div>
                    <h4>Para Compartir</h4>
                    <p>Ideal para regalar</p>
                </div>
            </motion.div>


            {/* CONTENIDO PRINCIPAL CENTRAL */}
            <div className={styles.container}>

                {/* BADGE ANIMADO CON RECT-ICONS */}
                <motion.div
                    className={styles.topBadge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <FaGift className={styles.badgeIconOrange} size={15} />
                    <span>EDICIÓN ESPECIAL Y REGALOS</span>
                    <BsStars className={styles.badgeIconGreen} size={14} />
                </motion.div>

                {/* TITULAR CON HIGHLIGHTS Y TEXTO GRANDE */}
                <motion.div
                    className={styles.headerBox}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className={styles.preTitle}>TAMBIÉN CONTAMOS CON</p>

                    <h2 className={`${styles.mainTitle} ${montserrat.className}`}>
                        BOX <span className={styles.orangeHighlight}>MERIENDA</span>
                    </h2>

                    <p className={styles.mainSubtitle}>
                        Para regalar o disfrutar en familia con el mejor sabor casero.
                    </p>
                </motion.div>

                {/* GRID DE CARACTERÍSTICAS / BANNERS INTERACTIVOS */}
                <motion.div
                    className={styles.featuresGrid}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        className={styles.featurePill}
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <BsFillCheckCircleFill className={styles.checkIconGreen} size={18} />
                        <span>Pastelería 100% Artesanal</span>
                    </motion.div>

                    <motion.div
                        className={styles.featurePill}
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaHeart className={styles.checkIconOrange} size={18} />
                        <span>Saludable y Casera</span>
                    </motion.div>

                    <motion.div
                        className={styles.featurePill}
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaUtensils className={styles.checkIconGreen} size={16} />
                        <span>Lista para Disfrutar</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.callToActionArea}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className={`${styles.questionHeader} ${montserrat.className}`}>
                        ¿Qué estás esperando para conocernos?
                    </h3>
                    <p className={styles.sloganParagraph}>
                        Comer sano y rico nunca fue tan fácil.
                    </p>

                    <motion.a
                        href="https://wa.me/542215766067"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.brandButton} ${montserrat.className}`}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaSmileBeam size={22} className={styles.brandIcon} />
                        <span>COME TUFIT</span>
                    </motion.a>
                    </motion.div>


            </div>
        </section>
    )
}