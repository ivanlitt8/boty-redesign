import React from "react";

const Square = ({ width, height, fill, rx }) => {
  return (
    <div className="absolute -z-20 drop-shadow-2xl">
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

export default Square;
