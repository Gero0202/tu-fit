import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/css/carrusel.module.css";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable'
})

const images = [
    "/salado1.png",
    "/salado2.png",
    "/salado3.png",
    "/salado4.jpeg",
    "/salado5.jpeg",
    "/salado6.jpeg",
    "/salado7.jpeg",
    "/salado8.jpeg",
    "/salado9.jpeg",
    "/salado10.jpeg",
    "/salado11.jpeg",
    "/salado12.jpeg",
    "/salado13.jpeg",
    "/salado14.jpeg",
    "/salado15.jpeg",
    "/salado16.jpeg",
    "/salado17.jpeg",
    "/salado18.jpeg",
    "/salado19.jpeg",
    "/salado20.jpeg",
    "/salado21.jpeg",
    "/salado22.jpeg",
    "/salado23.jpeg",
    "/salado24.jpeg",
];

export default function Carrusel() {
    const settings = {
        infinite: true,
        dots: true,
        centerMode: true,       
        centerPadding: "100px",   
        slidesToShow: 1,   
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: "100px",
                }
            }
        ]
    };

    return (
        <div className={styles["div-container"]}>
            <img src="/pincelada-salado.svg" alt="title" className={styles["pincelada-title"]} />
            <p className={montserrat.className}>¡PEDINOS EL CATALOGO DE VIANDAS A NUESTRO WHATSAPP! </p>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className={styles["slide"]}>
                        <img src={src} alt={`img-${index}`} className={styles["slide-img"]} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
