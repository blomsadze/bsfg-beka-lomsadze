import React from "react";
import classNames from "classnames";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: TProps) => {
  return (
    <button
      className={classNames(
        "bg-[#0F70DC] flex h-[40px] cursor-pointer justify-center items-center rounded-[3px] text-white py-[12px]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
