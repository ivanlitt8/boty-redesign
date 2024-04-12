import React from "react";
import Image from "next/image";
import BotyImg from "/public/assets/png/Boty Cuerpo_Sin Bg.png";

const Boty = () => {
  return (
    <div className="absolute bottom-0 right-10">
      <Image src={BotyImg} width={200} height={200} alt="Boty" />
    </div>
  );
};

export default Boty;
