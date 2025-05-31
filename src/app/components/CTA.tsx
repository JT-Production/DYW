import React from "react";
import hero1 from "../assets/img/hero-1.png";
import hero2 from "../assets/img/hero-2.jpeg";
import hero3 from "../assets/img/hero-3.jpeg";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="bg-green-50/80 h-screen">
      <div className="grid grid-flow-col grid-rows-3 gap-4 bg-blac py-5">
        <div className="row-span-2 row-start-2">
            <Image src={hero2} className="object-cover h-70" width={320} height={200} alt="hero"/>
        </div>
        <div className="row-span-2 row-end-3  flex flex-col justify-end items-center text-center  bg-blac h-110 w-full">
            <p className="font-sharp font-semibold text-lg text-green-500 mb-3">DESIGN YOUR OWN</p>
            <h1 className="text-8xl font-sharp font-medium">Transform <span className="font-semibold">Vision</span> Into  <span className="font-semibold">Reality</span></h1>
            <p className="font-sharp py-2">Add your company logo to custom t-shirts and promo products</p>
            <button className="px-5 py-3 bg-green-500 font-sharp font-semibold text-sm mt-3 text-white">Get Started Today</button>
        </div>
        <div className="row-start-1 row-end-4 ... ms-auto px-5 h-11/12">
            <Image src={hero1} className="object-cover h-70 " width={320} height={200} alt="hero"/>
            <Image src={hero3} className="object-cover h-65 -translate-x-60 translate-y-28" width={330} height={200} alt="hero"/>
        </div>
      </div>
    </div>
  );
};

export default CTA;
