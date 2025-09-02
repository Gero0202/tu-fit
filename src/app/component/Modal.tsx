'use client'

import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div>
            <button>
                <IoMdClose/>
            </button>
        </div>
        </>
    )
}