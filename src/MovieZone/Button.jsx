import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({ title, btn, onClick }) => {
  return (
    <div className="mt-3 mb-2">
      <button className={btn} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
