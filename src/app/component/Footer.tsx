import styles from "@/app/css/footer.module.css"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.text}>VIANDAS DIARIAS, FRESCAS Y SANAS</p>
                <div className={styles.divText}>
                    <p className={styles.text}>Teléfono: +54 9 11 1234-5678</p>
                    <p className={styles.text}>
                        Seguinos en Instagram:{" "}
                        <a
                            href="https://instagram.com/tufit.laplata"
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tufit.laplata
                        </a>
                    </p>
                </div>
                <p className={styles.text}>© 2025 Tu-Fit. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}