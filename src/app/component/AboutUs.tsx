import styles from "@/app/css/aboutus.module.css"
import { FaInstagram } from "react-icons/fa6";


export default function AboutUs() {
    return (
        <>
            <div className={styles["div-general"]}>
                <p className={`${styles["title"]} `}>NUESTRA HISTORIA</p>
                <p className={`${styles["text"]} `}>En un pueblo olvidado por los mapas, donde las montañas se curvaban como gigantes dormidos y los ríos murmuraban
                    Nadie sabía con certeza de dónde había llegado; algunos decían que apareció una mañana junto al pozo central, envuelta en un manto azul y con una miradae.
                    En un pueblo olvidado por los mapas, donde las montañas se curvaban como gigantes dormidos y los ríos murmuraban
                    Nadie sabía con certeza de dónde había llegado; algunos decían que apareció una mañana junto al pozo central, envuelta en un manto azul y con una miradae.</p>
                <img src="/budin-sol.png" alt="" className={styles["class-img"]} />
                <a href="https://www.instagram.com/tufit.laplata/">
                    <FaInstagram className={styles["instagram"]} />
                </a>
            </div>
        </>
    )
}