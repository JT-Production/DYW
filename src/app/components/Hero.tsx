import React from "react";
import hero1 from "../assets/img/mockup.png";
import hero2 from "../assets/img/mocku.png";
import review from "../assets/img/about-reviews.png";
import like from "../assets/img/like.png";
import shirt from "../assets/img/t-shirt.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-30 font-sharp py-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <span className="px-3.5   py-1 border-green-500 border  rounded-2xl text-sm font-semibold text-green-500">
            {" "}
            Since From 2023
          </span>
          <h1 className="text-5xl mt-7 font-medium">
            Selling custom printed <br />
            Wears{" "}
            <span className="underline cursor-pointer text-green-500 font-semibold">
              Online.
            </span>
          </h1>
          <p className="font-medium text-gray-600 my-5">
            It may sound easy, but there’s a lot that can go wrong if you
            haven’t fully prepared an effective online store. To ensure the
            success of your t-shirt printing.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-15">
            <div className="">
              <Image
                src={like}
                className=" "
                width={50}
                height={50}
                alt="hero"
              />
              <h1 className="text-2xl font-semibold my-2">On-demand service</h1>
              <p>An experienced builder likely has to be one of them.</p>
            </div>

            <div className="">
              <Image
                src={shirt}
                className=" "
                width={50}
                height={50}
                alt="hero"
              />
              <h1 className="text-2xl font-semibold my-2">On-demand service</h1>
              <p>An experienced builder likely has to be one of them.</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex gap-5">
            <Image
              src={hero1}
              className="object-cover h-80 "
              width={300}
              height={200}
              alt="hero"
            />
            <Image
              src={hero2}
              className="object-cover h-90 translate-y-15"
              width={300}
              height={200}
              alt="hero"
            />
          </div>
          <Image
            src={review}
            className="object-cover -translate-y-10 translate-x-20"
            width={300}
            height={200}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
