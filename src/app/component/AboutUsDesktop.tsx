import styles from "@/app/css/aboutusdesktop.module.css"
import { FaInstagram } from "react-icons/fa6";


export default function AboutUsDesktop() {
    return (
        <>
            <div className={styles["div-general"]}>
                <p className={`${styles["title"]} `}>NUESTRA HISTORIA</p>
                <div className={styles["div-contenido"]}>
                    <div className={styles["div-text"]}>
                        <p className={`${styles["text"]} `}>En un pueblo olvidado por los mapas, donde las montañas se curvaban como gigantes dormidos y los ríos murmuraban
                            Nadie sabía con certeza de dónde había llegado; algunos decían que apareció una mañana junto al pozo central, envuelta en un manto azul y con una miradae.
                            En un pueblo olvidado por los mapas, donde las montañas se curvaban como gigantes dormidos y los ríos murmuraban
                            Nadie sabía con certeza de dónde había llegado; algunos decían que apareció una ma
                             había llegado; algunos decían que apareció una mañana junto al pozo central, envuelta en un manto azul y con una miradae.
                            En un pueblo olvidado por los mapas, donde las montañas se curvaban como gigantes dormidos y los ríos murmuraban
                            Nadie sabía con certeza de dónde había llegado; algunos decían que apa
                            ñana junto al pozo central, envuelta en un manto azul y con una miradae.</p>
                        <a href="https://www.instagram.com/tufit.laplata/">
                            <FaInstagram className={styles["instagram"]} />
                        </a>
                    </div>

                    <div className={styles["grid-container"]}>
                        <div className={styles["right"]}>
                            <img src="/budin-sol.png" alt="" className={`${styles["class-img"]} ${styles["img-right"]}`} />
                        </div>
                        <div className={styles["left"]}>
                            <img src="/pepas.png" alt="" className={styles["class-img"]} />
                            <img src="/budin-sol.png" alt="" className={styles["class-img"]} />
                        </div>
                        <div className={styles["right"]}>
                            <img src="/budin-sol.png" alt="" className={`${styles["class-img"]} ${styles["img-right"]}`} />
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}