import React from "react";
import Image from "next/image";
import classNames from "classnames";

const FooterNavItem = ({
  icon,
  label,
  className,
}: {
  icon: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <Image src={icon} alt={label} width={24} height={24} />
      <span className="text-[10px] text-white mt-1">{label}</span>
    </div>
  );
};

const BottomTabs = () => {
  return (
    <div className="lg:hidden rounded-t-[5px] border-t-1 border-[#273344] fixed bottom-0 flex flex-row w-full gafp-[28px] justify-center h-[60px] bg-[#10212E] items-center">
      <FooterNavItem
        label="Home"
        icon="/icons/home.svg"
        className="w-[30px] h-[38px] mr-[28px]"
      />
      <FooterNavItem
        label="Search"
        icon="/icons/search.svg"
        className="w-[36px] h-[38px] mr-[28.50px]"
      />
      <div className="flex flex-col items-center mr-[30.5px] justify-center rounded-full w-[50px] h-[50px] bg-[#0F70DC]">
        <Image
          src="/icons/deposit-mobile.svg"
          alt="deposit"
          width={24}
          height={24}
        />
      </div>
      <FooterNavItem
        label="Chat"
        icon="/icons/chat.svg"
        className="w-[25px] h-[38px] mr-[39px]"
      />
      <FooterNavItem
        label="Menu"
        icon="/icons/menu.svg"
        className="w-[28px] h-[38px]"
      />
    </div>
  );
};

export default BottomTabs;
