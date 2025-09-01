import styles from "@/app/css/aboutus.module.css"
import { FaInstagram } from "react-icons/fa6";


export default function AboutUs() {
    return (
        <>
            <div className={styles["div-general"]}>
                <p className={`${styles["title"]} `}>NUESTRA HISTORIA</p>
                <p className={`${styles["text"]} `}>Tufit desembarca en el año 2020 con el fin de invitarte a modificar tus hábitos para poder lograr una alimentación equilibrada con el
                    Compromiso nuestro de elegir productos de calidad y nutritivos para tu cuerpo.
                    Porque cuidarte es temporal pero aprender a comer bien es un hábito que dura toda la vida
                    La basa de Tufit es comprobar que se puede comer sano y rico sin tener que prohibirte de nada solo eligiendo una manera más sana y natural
                    Hace más de 5 años nosotros decidimos cambiar nuestros hábitos por eso creamos este emprendimiento familiar para poder llegar a sus casas con una propuesta sana, rica y práctica
                    Estamos para acompañarte</p>
                <img src="/budin-sol.png" alt="" className={styles["class-img"]} />
                <a href="https://www.instagram.com/tufit.laplata/">
                    <FaInstagram className={styles["instagram"]} />
                </a>
            </div>
        </>
    )
}