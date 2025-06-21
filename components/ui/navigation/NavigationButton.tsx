import React from "react";
import Image from "next/image";
import classNames from "classnames";

type TNavigationButtonProps = {
  isNext?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const NavigationButton = ({
  disabled,
  onClick,
  isNext,
}: TNavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "lg:w-[35px] w-[28px] h-[28px] p-[7px] border-[2px] border-[#253241] flex items-center justify-center lg:h-[35px] rounded-[5px] bg-[#141F2B]",
        {
          "bg-[#182734] cursor-not-allowed opacity-50": disabled,
          "cursor-pointer": !disabled,
        }
      )}
      disabled={disabled}
    >
      <Image
        src="/icons/arrow.svg"
        className={classNames("w-full h-full", {
          "rotate-180": isNext,
        })}
        width={16}
        height={16}
        alt="Arrow"
      />
    </button>
  );
};

export default NavigationButton;
