import React from "react";
import Image from "next/image";
import logoImage from "/public/assets/png/logotipo_centrado.png";

const Logo = () => {
  return (
    <div className="flex justify-center z-50">
      <Image src={logoImage} width={120} height={120} alt="Logo" />
    </div>
  );
};

export default Logo;
