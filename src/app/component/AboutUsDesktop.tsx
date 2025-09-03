import styles from "@/app/css/aboutusdesktop.module.css"
import { FaInstagram } from "react-icons/fa6";


export default function AboutUsDesktop() {
    return (
        <>
            <div className={styles["div-general"]}>
                <p className={`${styles["title"]} `}>NUESTRA HISTORIA</p>
                <div className={styles["div-contenido"]}>
                    <div className={styles["div-text"]}>
                        <p className={`${styles["text"]} `}>Tufit desembarca en el año 2020 con el fin de invitarte a modificar tus hábitos para poder lograr una alimentación equilibrada con el
                    Compromiso nuestro de elegir productos de calidad y nutritivos para tu cuerpo.
                    Porque cuidarte es temporal pero aprender a comer bien es un hábito que dura toda la vida
                    La basa de Tufit es comprobar que se puede comer sano y rico sin tener que prohibirte de nada solo eligiendo una manera más sana y natural
                    Hace más de 5 años nosotros decidimos cambiar nuestros hábitos por eso creamos este emprendimiento familiar para poder llegar a sus casas con una propuesta sana, rica y práctica
                    Estamos para acompañarte.</p>
                        <a href="https://www.instagram.com/tufit.laplata/">
                            <FaInstagram className={styles["instagram"]} />
                        </a>
                    </div>

                    <div className={styles["grid-container"]}>
                        <div className={styles["right"]}>
                            <img src="/dulce8.jpeg" alt="" className={`${styles["class-img"]} ${styles["img-right"]}`} />
                        </div>
                        <div className={styles["left"]}>
                            <img src="/dulce33.png" alt="" className={styles["class-img"]} />
                            <img src="/salado23.jpeg" alt="" className={styles["class-img"]} />
                        </div>
                        <div className={styles["right"]}>
                            <img src="/dulce7.jpeg" alt="" className={`${styles["class-img"]} ${styles["img-right"]}`} />
                        </div>
                        
                    </div>

                </div>
                {/* <img src="/rama1.svg" alt="rama" className={styles["rama-uno"]}/>
                <img src="/rama2.svg" alt="rama" className={styles["rama-dos"]}/> */}
            </div>
        </>
    )
}