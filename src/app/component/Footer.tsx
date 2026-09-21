import styles from "@/app/css/footer.module.css"
import { FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Marca / Logotipo */}
        <div className={styles.brandSection}>
          <h2 className={styles.title}>TU-FIT</h2>
          <p className={styles.tagline}>Nutrición y energía real para tu día a día.</p>
        </div>

        {/* Contacto & Redes */}
        <div className={styles.linksSection}>
          <a
            href="https://wa.me/542215766067?text=¡Hola!%20Quiero%20hacer%20una%20consulta%20para%20Tu-Fit"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={styles.iconWhatsapp} size={20} />
            <span>+54 221 576-6067</span>
          </a>

          <a
            href="https://instagram.com/tufit.laplata"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.iconInstagram} size={20} />
            <span>@tufit.laplata</span>
          </a>
        </div>
      </div>

      {/* Separador y Copyright */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © 2026 <span className={styles.brandHighlight}>Tu-Fit</span>. Todos los derechos reservados.
        </p>
        <p className={styles.madeWith}>
          Hecho con <FaHeart className={styles.heartIcon} /> en La Plata
        </p>
      </div>
    </footer>
  )
}