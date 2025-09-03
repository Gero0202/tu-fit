import styles from "@/app/css/cardssweetone.module.css"
import styles2 from "@/app/css/cardssweettwo.module.css"
import { Montserrat } from "next/font/google"
import Image from "next/image"

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

export default function CardSweetTwo(props: CardProp) {
    return (
        <>
            <div className={styles2["div-general"]}>
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
                    <p className={`${styles["second-text"]} ${montserrat.className}`}>{props.texTwo}</p>
                    <p className={`${styles["bottom-text"]} ${montserrat.className}`}>{props.bottomText}</p>
                </div>
            </div>
        </>
    )
}