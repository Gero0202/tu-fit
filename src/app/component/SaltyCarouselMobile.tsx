'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/app/css/saltyCarouselMobile.module.css'
import { Montserrat } from 'next/font/google'
import Modal from './Modal'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
})

interface SaltyCarouselMobileProps {
    images: string[]
    intervalDuration?: number // Tiempo en ms (por defecto 3500ms = 3.5s)
}

export const SaltyCarouselMobile: React.FC<SaltyCarouselMobileProps> = ({
    images,
    intervalDuration = 3500,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused || images.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, intervalDuration)

        return () => clearInterval(timer)
    }, [images.length, intervalDuration, isPaused])

    if (!images || images.length === 0) return null

    return (
        <section className={styles.saltySectionMobile}>
            <motion.div
                className={styles.editorialHeader}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.titleColumn}>

                    <h2 className={`${styles.title} ${montserrat.className}`}>
                        Opción <br />
                        <span className={styles.highlightText}>Salada</span>
                    </h2>
                </div>

                <div className={styles.dividerLine} />

                <p className={styles.headerDescription}>
                    Sabores salados elaborados diariamente con harinas integrales y vegetales seleccionados.
                </p>
            </motion.div>

            <motion.div
                className={styles.carouselFrame}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Línea Salada ${currentIndex + 1}`}
                            className={styles.carouselImage}
                        />
                    </motion.div>
                </AnimatePresence>

                <div className={`${styles.counterBadge} ${montserrat.className}`}>
                    0{currentIndex + 1} / 0{images.length}
                </div>

                <div className={styles.dotsContainer}>
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Ir a la imagen ${idx + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
           <div className={styles.modal}>   
            <Modal
                title="CARTA"
                img="/cartasalado1.jpeg"
                img2="/cartasalado2.jpeg"
            />
            </div>         
            
        </section>
    )
}