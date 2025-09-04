'use client'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "@/app/css/modal.module.css"
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})

interface ModalProps {
    img: string
    img2: string
    title: string
}

export default function Modal(props: ModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div>
                <button className={styles["open-btn"]} onClick={() => setIsOpen(true)}>
                    VER CARTA COMPLETA
                </button>

                {isOpen && (
                    <div className={styles["modal-overlay"]}>
                        <div className={styles["modal-content"]}>
                            <h2 className={`${montserrat.style}`}>{props.title}</h2>
                            <button className={styles["close-btn"]} onClick={() => setIsOpen(false)}>
                                <IoMdClose />
                            </button>
                            <div className={styles["images-container"]}>
                                <img src={props.img} alt="Carta Dulce 1" />
                                <img src={props.img2} alt="Carta Dulce 2" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}