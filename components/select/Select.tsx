"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { useOutsideClickDetector } from "@/hooks/useOutsideClickDetector";

import DiceIcon from "@/public/icons/dice.svg";
import ArrowIcon from "@/public/icons/arrow.svg";

export interface IOption {
  label: string;
  value: string;
}

type TSelectProps = {
  label: string;
  icon: string;
  options: IOption[];
  onChange: (value: string) => void;
  value: string[];
};

const Select = ({ label, icon, options, value, onChange }: TSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClickDetector(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      onClick={toggleOpen}
      className="flex lg:max-w-[185px] w-full relative items-center h-[40px] border-[#273344] border-1 justify-between p-2 bg-[#10202D] rounded-md cursor-pointer"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <Image src={icon} width={16} height={16} alt={label} />
          <span className="font-semibold text-sm">{label}</span>
        </div>
        <div
          className={classNames(
            "lg:w-[24px] lg:h-[24px] w-[24px] h-[28px] p-[7px] border-[1px] border-[#253241] flex items-center justify-center  rounded-[5px] bg-[#1C2E3D]"
          )}
        >
          <Image
            src={ArrowIcon}
            className={classNames("w-full transition-transform h-full", {
              "rotate-90": isOpen,
              "rotate-270": !isOpen,
            })}
            alt="Arrow"
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-[40px] bg-[#10202D] pt-[5px] top-0 absolute rounded-[5px] border-[#273344] border-1 z-10 w-full left-0">
          {options.map((item) => {
            const isSelected = value.includes(item.value);

            return (
              <div
                key={item.value}
                onClick={() => onChange(item.value)}
                className={classNames(
                  "flex items-center border-l-[5px] gap-3 px-3 py-3 h-[40px] rounded-fmd cursor-pointer hover:bg-[#223444]",
                  {
                    "bg-[#223444] border-[#0F70DC]": isSelected,
                    "border-transparent": !isSelected,
                  }
                )}
              >
                <Image src={DiceIcon} width={14} height={14} alt={item.label} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
