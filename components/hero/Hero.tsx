import React from "react";
import Image from "next/image";

import Image1 from "@/public/images/image-1.webp";
import Image2 from "@/public/images/image-2.webp";
import Image3 from "@/public/images/image-3.webp";
import Image4 from "@/public/images/image-4.webp";
import Image5 from "@/public/images/image-5.webp";
import Image6 from "@/public/images/image-6.webp";
import Image7 from "@/public/images/image-7.webp";
import Image8 from "@/public/images/image-8.webp";

const smallImages = [Image5, Image6, Image7, Image8];

const Hero = () => {
  return (
    <section>
      <div className="grid lg:mt-[15px] mt-[10px] grid-cols-1 lg:grid-cols-2 gap-[10px]">
        <Image src={Image1} alt="Image 1" className="w-full h-auto" />
        <Image
          src={Image2}
          alt="Image 2"
          className="hidden lg:block w-full h-auto"
        />
      </div>
      <div className="w-full flex pt-[5px] pb-[10px] lg:py-[10px] justify-center items-center gap-[5px]">
        <div className="border-[#0F70DC] border-1 w-[15px] h-[5px] rounded-[5px]" />
        <div className="border-[#0F70DC] border-1 w-[15px] h-[5px] rounded-[5px]" />
        <div className="border-[#0F70DC] border-1 w-[15px] h-[5px] bg-[#0F70DC] rounded-[5px]" />
        <div className="border-[#0F70DC] border-1 w-[15px] h-[5px] rounded-[5px]" />
        <div className="border-[#0F70DC] border-1 w-[15px] h-[5px] rounded-[5px]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-[10px]">
        <div className="grid grid-cols-2 lg:gap-[10px] gap-[5px]">
          <Image
            src={Image3}
            alt="Image-3"
            className="lg:w-[4f00px] lg:h-[250px] h-auto"
          />
          <Image
            src={Image4}
            alt="Image-4"
            className="lg:w-[400px] lg:h-[250px] h-auto"
          />
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 lg:gap-[10px] gap-[5px]">
          {smallImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square lg:aspect-auto w-full rounded-[3px] lg:rounded-[5px] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Image-${index + 5}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
