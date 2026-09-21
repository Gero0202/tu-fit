'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from "@/app/css/landing.module.css"
import { FaWhatsapp, FaLeaf, FaClock, FaHeart } from 'react-icons/fa'
import { Archivo_Black, Montserrat } from 'next/font/google'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className={styles.heroSection}>
      {/* 1. LUCES DE FONDO CÁLIDAS SOBRE LA IMAGEN */}
      <motion.div
        className={styles.glowOrange}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.glowGreen}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className={styles.container}>
        {/* LOGO INTACTO CON SUS PINZELADAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className={`${styles["div-logo"]}`}>
            <img src="/tufit-logo.png" alt="Logo" className={styles["logo-principal"]} />
            <div className={styles["div-lazos"]}>
              <img src="/pinzeladapistacho.svg" alt="Pinzelada" className={styles["lazoVerde"]} />
              <img src="/pinzeladanaranja.svg" alt="Pinzelada" className={styles["lazoNaranja"]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className={`${styles.tituloPrincipal} ${archivoBlack.className}`}>
              TU-FIT
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.badgeWrapper}>
            <span className={`${styles.badge} ${montserrat.className}`}>
              <FaLeaf className={styles.badgeIcon} /> Viandas Frescas & Nutritivas
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className={`${styles.textoPrincipal} ${montserrat.className}`}>
            <span className={styles.textMobile}>
              Productos saludables, integrales y caseros.
            </span>
            <span className={styles.textDesktop}>
              PRODUCTOS SALUDABLES, INTEGRALES Y CASEROS
              <br />
              ¡VIANDAS DIARIAS, FRESCAS Y SANAS!
            </span>
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actionWrapper}>
            <p className={`${styles.textoSecundario} ${montserrat.className}`}>
              ¡Hacé tu pedido!
            </p>

            <motion.a
              ref={buttonRef}
              href="https://wa.me/542215766067"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnWsp} ${montserrat.className}`}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(242, 152, 33, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className={styles.iconWspBtn} />
              <span>Pedir por WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- ELEMENTOS FLOTANTES RESPONSIVOS (MOBILE & DESKTOP) --- */}

        <motion.div
          className={`${styles.floatingCard} ${styles.cardLeft}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }
          }}
        >
          <div className={styles.cardIconBoxGreen}>
            <FaLeaf />
          </div>
          <div className={styles.cardText}>
            <strong>100% Casero</strong>
            <span>Sin conservantes</span>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.floatingCard} ${styles.cardRight}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.8 },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }
          }}
        >
          <div className={styles.cardIconBoxOrange}>
            <FaClock />
          </div>
          <div className={styles.cardText}>
            <strong>Envíos en el día</strong>
            <span>Frescura garantizada</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.mobileFloatingBadge}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: [0, -6, 0], scale: [1, 1.03, 1] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.7 },
            y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
            scale: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
          }}
        >
          <FaHeart className={styles.mobileHeartIcon} />
          <span>Hecho con amor</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {showFloating && (
          <motion.a
            href="https://wa.me/542215766067"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWspFloating}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className={styles.iconWspFloating} />
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  )
}