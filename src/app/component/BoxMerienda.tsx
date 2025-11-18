import styles from "@/app/css/boxmerienda.module.css"
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion"


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: 'variable'
})

export default function BoxMerienda() {
    return (
        <>
            <motion.div
                className={styles["div-general-desktop"]}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className={`${styles["div-general"]} ${montserrat.style}`}>
                    <p className={styles["primero"]}>TAMBIEN CONTAMOS CON</p>

                    <div className={styles["div-box"]}>
                        <div className={styles["left-line"]} />
                        <p className={styles["box-text"]}>BOX MERIENDA</p>
                        <div className={styles["right-line"]} />
                    </div>

                    <p className={styles["tercero"]}>PARA REGALAR O DISFRUTAR EN FAMILIA</p>
                    <div className={styles["div-text"]}>
                        <p className={styles["cuarto"]}>PASTELERIA 100% ARTESANAL SALUDABLE Y CASERA</p>
                        <p className={styles["cuarto"]}>¿QUE ESTAS ESPERANDO PARA CONOCERNOS?</p>
                    </div>
                    <p className={styles["quinto"]}>COMER SANO Y RICO NUNCA FUE TAN FACIL</p>
                    <p className={styles["sexto"]}>COME TUFIT</p>
                    <div className={styles["corner-div"]}>
                        <img src="/corner.svg" alt="" className={styles["corner1"]} />
                        <img src="/corner.svg" alt="" className={styles["corner2"]} />
                    </div>
                </div>
            </motion.div>
        </>
    )
}