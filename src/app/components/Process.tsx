import React from "react";
import hw1 from "../assets/img/hw-img-01.png";
import hw2 from "../assets/img/hw-img-02.png";
import hw3 from "../assets/img/hw-img-03.png";
import icon1 from "../assets/img/hw-icon-01.png";
import icon2 from "../assets/img/hw-icon-02.png";
import icon3 from "../assets/img/hw-icon-03.png";
import Image from "next/image";

const data = [
  {
    img: hw1,
    icon: icon1,
    head: "Add your t-shirt design",
    body: "High-quality product images are essential for showcasing the product.",
  },
  {
    img: hw2,
    icon: icon2,
    head: "Select cloth quality",
    body: "High-quality product images are essential for showcasing the product.",
  },
  {
    img: hw3,
    icon: icon3,
    head: "Make your payment",
    body: "High-quality product images are essential for showcasing the product.",
  },
];

const Process = () => {
  return (
    <div className="lg:h-screen h-fit bg-green-100 ">
      <div className="flex flex-col flex-1 px-30 py-15">
        <span className="px-3.5 w-fit mx-auto  py-1 border-green-500 border  rounded-2xl text-sm font-semibold text-green-500">
          Work Process
        </span>
        <h1 className="text-[40px] font-sharp font-semibold text-center mt-5">How process all your designs to you</h1>
        <div className="grid grid-cols-3 gap-8 my-10">
          {data.map((data, index) => {
            return (
              <div key={index} className="flex flex-col space-y-5 group">
                <div className="relative overflow-hidden">
                  <Image src={data.img} alt="" width={1000} height={1000} className="group-hover:scale-[1.2] duration-500 group-hover:" />
                   <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={data.icon}
                    alt=""
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30"
                  />
                </div>
                <div className="flex flex-col gap-3">
                     <p className="text-2xl font-sharp font-semibold">{data.head}</p>
                     <p className="text-black/60">{data.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
