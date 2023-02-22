import React from "react";

const Btn = ({ cl, label, getDis }) => {
  return (
    <div
      className={cl}
      onClick={() => {
        getDis(label);
      }}
    >
      {label}
    </div>
  );
};

export default Btn;
