'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import { FaInstagram, FaHandshake, FaShieldAlt } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import styles from '@/app/css/ourStory.module.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

export const OurStory: React.FC = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        
        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.badge}>
            <BsStars size={14} className={styles.badgeIcon} />
            <span>DESDE 2020</span>
          </div>
          <h2 className={`${styles.title} ${montserrat.className}`}>
            Nuestra <span className={styles.highlightText}>Historia</span>
          </h2>
          <p className={styles.subtitle}>
            Un emprendimiento familiar impulsado por la pasión de transformar hábitos en salud y sabor.
          </p>
        </motion.div>

        {/* CONTENIDO PRINCIPAL: GRID RESPONSIVE (MOBILE FIRST) */}
        <div className={styles.gridContent}>
          
          {/* TARJETA VISUAL / IMAGEN CON INSTAGRAM */}
          <motion.div 
            className={styles.imageCardWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className={styles.imageContainer}>
              <img 
                src="/dulce8.jpeg" 
                alt="Historia Tufit" 
                className={styles.storyImage} 
              />
              <div className={styles.imageOverlay} />
              
              {/* Badge Flotante en la foto */}
              <div className={styles.floatingBadge}>
                <span className={styles.yearsNumber}>+5</span>
                <span className={styles.yearsText}>Años transformando hábitos</span>
              </div>
            </div>

            {/* BARRA DE INSTAGRAM ADJUNTA A LA FOTO */}
            <a 
              href="https://www.instagram.com/tufit.laplata/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.instagramBar}
            >
              <div className={styles.instaInfo}>
                <FaInstagram size={20} className={styles.instaIcon} />
                <span>Seguinos en Instagram</span>
              </div>
              <span className={styles.instaHandle}>@tufit</span>
            </a>
          </motion.div>

          {/* NARRATIVA Y PUNTOS CLAVE */}
          <div className={styles.narrativeWrapper}>
            
            {/* FRASE DESTACADA */}
            <motion.blockquote 
              className={styles.quoteCard}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p>
                "Cuidarte es temporal, pero aprender a comer bien es un hábito que dura toda la vida."
              </p>
            </motion.blockquote>

            {/* PUNTOS DE LA HISTORIA */}
            <div className={styles.storyPoints}>
              
              <motion.div 
                className={styles.pointItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className={styles.iconBox}>
                  <FaHandshake size={20} />
                </div>
                <div>
                  <h3 className={montserrat.className}>Propuesta Familiar</h3>
                  <p>
                    Hace más de 5 años decidimos cambiar nuestros propios hábitos. De esa experiencia nació Tufit: una propuesta sana, rica y práctica para tu casa.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.pointItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className={styles.iconBox}>
                  <FaShieldAlt size={20} />
                </div>
                <div>
                  <h3 className={montserrat.className}>Calidad e Inclusión</h3>
                  <p>
                    Demostramos que se puede comer sano y delicioso sin prohibirte de nada, eligiendo ingredientes de calidad y 100% nutritivos para tu cuerpo.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* FOOTER DE LA SECCIÓN */}
            <motion.div 
              className={styles.storyFooter}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span>Estamos para acompañarte en cada paso.</span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}