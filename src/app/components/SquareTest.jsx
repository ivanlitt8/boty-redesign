import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SquareTest = ({ width, height, fill, rx }) => {
  useGSAP(() => {
    gsap.from("#square", {
      y: -350,
      //repeat: -1,
      //yoyo: true,
      // rotate: 360,
      duration: 2,
      //ease: "bounce.out",
      ease: "power1.inOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="absolute -z-10 drop-shadow-2xl">
      <div
        id="square"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: fill,
          borderRadius: `${rx}px`,
        }}
      ></div>
    </div>
  );
};

export default SquareTest;
