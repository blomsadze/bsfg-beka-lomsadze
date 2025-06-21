"use client";
import React from "react";
import Logo from "@/components/Logo";
import { additionalIcons, footerLinks } from "@/utils/footerUtils";
import FooterCryptoItems from "./FooterCryptoItems";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#10202D] pb-20 text-[#A6B0C3] px-4 py-8 text-sm">
      <div className="max-width flex flex-col">
        <div className="flex flex-col pb-[35px] lg:flex-row justify-between gap-8">
          <div className="lg:max-w-[300px] border-b lg:border-none border-[#273344] w-full flex flex-col pb-[15px] lg:pb-0 gap-3">
            <Logo />
            <p className="text-sm font-base text-[#8898B0]">
              Strike it rich at CASINO! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[40px] lg:gap-6 w-full">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-base font-bold mb-[15px]">
                  {section.title}
                </h4>
                <ul className="space-y-[10px]">
                  {section.items.map((item) => (
                    <li key={item}>
                      <p className="text-[#C1C9E5] text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-[13px] lg:hidden">
              <Image
                src="/images/footer-img-1.png"
                className="w-full h-full"
                width={130}
                height={75}
                alt="footer-img-1"
              />
              <Image
                src="/images/footer-img-2.png"
                className="w-full h-full"
                width={130}
                height={75}
                alt="footer-img-1"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#273344] py-5 flex items-center justify-center">
          <FooterCryptoItems />
        </div>

        <div className="text-center text-sm text-[#66788C] border-t-[1.5px] pt-5 border-[#282F48]">
          <div className="flex items-center justify-center lg:justify-between mb-[25px]">
            <div className="hidden lg:block lg:w-[170px]" />
            <p className="text-center text-xs lg:text-sm">
              © 2025 <span className="text-white font-bold">CASINO.COM</span>.
              All Rights Reserved.
            </p>
            <ul className="lg:flex hidden items-center gap-[10px]">
              {additionalIcons.map((icon) => (
                <li key={icon.id}>
                  <Image
                    src={icon.src}
                    alt={`footer-icon-${icon.id}`}
                    width={35}
                    height={35}
                    className="inline-block"
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#748095] text-xs lg:text-sm mb-[20px]">
            GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
          </p>
          <p className="w-full text-xs lg:text-sm mx-auto text-[#6C798A]">
            CASINO casino is operated by CASINO B.V., ensuring a secure and fair
            gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our
            commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL
            encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at
            CASINO Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our customer support team is
            available 24/7 to assist you with any questions or issues you may
            have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
