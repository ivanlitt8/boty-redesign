import React from "react";

const Gluter = ({ children }) => {
  return (
    <div className="flex m-10 w-full border-2 border-red-900 justify-center">
      <div>{children}</div>
    </div>
  );
};

export default Gluter;
