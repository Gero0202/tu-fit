'use client'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "@/app/css/modal.module.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})

export default function Modal() {
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
                            <h2 className={`${montserrat.style}`}>CARTA</h2>
                            <button className={styles["close-btn"]} onClick={() => setIsOpen(false)}>
                                <IoMdClose />
                            </button>
                            <div className={styles["images-container"]}>
                                <img src="/carta1.jpeg" alt="Carta Dulce 1" />
                                <img src="/carta2.jpeg" alt="Carta Dulce 2" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}