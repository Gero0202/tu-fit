'use client'

import React from 'react'
import styles from '@/app/css/sweetCard.module.css'
import { Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

interface SweetCardProps {
  img: string
  title: string
  text: string
  texTwo?: string
  bottomText: string
  index?: number
}

export const SweetCard: React.FC<SweetCardProps> = ({
  img,
  title,
  text,
  texTwo,
  bottomText,
  index = 0,
}) => {
  const isEven = index % 2 === 0

  const staggerDelay = (index % 3) * 0.15

  return (
    <motion.article
      className={`${styles.card} ${isEven ? styles.even : styles.odd}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: staggerDelay,
        ease: 'easeOut',
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className={styles.imageContainer}>
        <img src={img} alt={title} className={styles.image} loading="lazy" />
        <span className={`${styles.badge} ${montserrat.className}`}>
          {bottomText}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={`${styles.title} ${montserrat.className}`}>{title}</h3>
        
        <p className={`${styles.description} ${montserrat.className}`}>
          {text}
        </p>

        {texTwo && (
          <p className={`${styles.descriptionTwo} ${montserrat.className}`}>
            {texTwo}
          </p>
        )}
      </div>
    </motion.article>
  )
}