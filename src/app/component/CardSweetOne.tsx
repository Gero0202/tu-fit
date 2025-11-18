import styles from "@/app/css/cardssweetone.module.css"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { motion } from "framer-motion"

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: 'variable'
})

interface CardProp {
    img: string
    title: string
    text: string
    texTwo?: string
    bottomText: string
}

export default function CardSweetOne(props: CardProp) {
    return (
        <>
            <motion.div
                className={styles["div-general"]}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Image
                    src={props.img}
                    alt={props.title}
                    className={styles["img-left"]}
                    width={120}
                    height={120}
                />
                <div className={styles["div-text-right"]}>
                    <p className={`${styles["title-card"]} ${montserrat.className}`}>{props.title}</p>
                    <p className={`${styles["first-text"]} ${montserrat.className}`}>{props.text}</p>
                    {props.texTwo && (
                        <p className={`${styles.textSecondary} ${montserrat.className}`}>
                            {props.texTwo}
                        </p>
                    )}
                    <p className={`${styles["bottom-text"]} ${montserrat.className}`}>{props.bottomText}</p>
                </div>
            </motion.div>
        </>
    )
}