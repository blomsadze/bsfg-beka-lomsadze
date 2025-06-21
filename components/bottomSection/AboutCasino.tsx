import React from "react";
import Button from "../ui/button/Button";

const AboutCasino = () => {
  return (
    <div className="bg-gradient-to-t from-[#1C2936] to-[#11212E] text-[#C1C9E5] py-[14px] px-[15px] lg:px-6 rounded-md border-1 mb-[21px] lg:mb-[38px] lg:h-[250px] overflow-hidden relative border-[#273344]">
      <h2 className="text-white text-xl font-medium mb-[10px]">
        CASINO <span className="font-bold text-white">Casino</span>
      </h2>
      <p className="hidden lg:block text-sm">
        CASINO is your premier online casino platform, offering a world-class
        gaming experience with hundreds of top-tier casino games, exclusive
        bonuses, and lightning-fast payouts. Whether you&#39;re a fan of classic
        slots, live dealer games, table games, or jackpot progressives, CASINO
        delivers everything you need for high-stakes excitement and non-stop fun
        — all from the comfort of your home or mobile device. Join thousands of
        players worldwide who trust CASINO for its secure, fair, and licensed
        gameplay. We partner with the industry&#39;s most reputable software
        providers to bring you an unbeatable selection of games with stunning
        graphics, realistic sound effects, and smooth gameplay. From roulette
        and blackjack to immersive live casino tables and high-RTP video slots,
        CASINO is designed to satisfy both new players and seasoned pros. At
        CASINO, new users are greeted with a generous welcome bonus and ongoing
        promotions, cashback offers, free spins, and VIP rewards for loyal
        players. Our platform supports multiple payment options, including
        credit cards, cryptocurrencies, e-wallets, and bank transfers, all
        processed with the highest level of security and privacy. Our 24/7
        customer support team ensures your questions are answered quickly —
        whenever you need assistance.
      </p>
      <p className="lg:hidden text-sm">
        Welcome to CASINO, your new destination for the ultimate online social
        casino experience. Whether you’re here to explore exclusive CASINO
        Originals or enjoy your favorite games from the world’s top iGaming
        providers, CASINO offers a polished, fair, and exciting platform that
        keeps players coming back.
      </p>
      <div>
        <Button className="lg:w-[250px] lg:absolute lg:bottom-0 lg:mb-[20px] mt-4 lg:mt-0 lg:left-1/2 lg:-translate-x-1/2 w-[95%]">
          <span className="uppercase font-semibold">read more</span>
        </Button>
      </div>
    </div>
  );
};

export default AboutCasino;
