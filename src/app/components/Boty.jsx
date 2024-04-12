import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BotyImg from "/public/assets/png/Boty Cuerpo_Sin Bg.png";

const Boty = () => {
  const [imageSize, setImageSize] = useState({ width: 150, height: 150 }); // Valores iniciales del tamaño de la imagen

  // Función para actualizar el tamaño de la imagen cuando cambie el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth / 5; // Define el nuevo ancho de la imagen según el ancho de la ventana
      setImageSize({ width: newWidth, height: newWidth }); // Actualiza el estado con el nuevo tamaño de la imagen
    };

    handleResize(); // Llama a handleResize al principio para establecer el tamaño inicial
    window.addEventListener("resize", handleResize); // Agrega un event listener para el evento resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remueve el event listener al desmontar el componente
    };
  }, []); // El useEffect solo se ejecuta una vez al montar el componente

  useGSAP(() => {
    gsap.from("#boty", {
      y: -13,
      repeat: -1,
      yoyo: true,
      // rotate: 360,
      duration: 1,
      //ease: "bounce.out",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="absolute -z-10 bottom-0 right-10">
      <Image
        id="boty"
        src={BotyImg}
        width={imageSize.width}
        height={imageSize.height}
        alt="Boty"
      />
    </div>
  );
};

export default Boty;
