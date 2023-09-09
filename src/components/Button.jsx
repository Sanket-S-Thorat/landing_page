import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg border leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white "
      } ${fullWidth && "w-full"}`}
    >
      {label}

      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
