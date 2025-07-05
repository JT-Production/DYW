import Image from "next/image";
import React from "react";

const Thumbnails = () => {
  const wears = [
    {
      type: "T-Shrit",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/tshirts-224aad0d33bdda94bb1e2739a8b9e517a4b3fb2a95f6f9783300ced077463ecb.webp",
    },
    {
      type: "Performance T-Shrit",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/performance-231d6c733afd608e085356fdf7f258b480204bf27e7f2bb35ccd58571c9c0d5e.webp",
    },
    {
      type: "Hats",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/hats-0f6dded35083d05c725aa21360f67c337d19d366eca518a590cdfe637c919116.webp",
    },
    {
      type: "Polo & Buisness wears",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/polo-4160348db87751029d7bc2e7a000e6a4e17e030461ed1317dade0a45db9fd015.webp",
    },
    {
      type: "Sweatshirts",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/sweatshirts-8c92fca59aff856c6a86c60aa82378660384e4cbc69f86e52f679500096f957e.webp",
    },
    {
      type: "Long Sleeve T-Shirt",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/longsleeve-82ef1875fde765b7057659b9f100a2a1d09f82ac543f4439313f7abdbad8ad87.webp",
    },
    {
      type: "Athletic Apparel",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/athletic-e7feb9513bd2b967ed8da73865022f0d5c49e44bd8c24d40a67aadf69786bf1f.webp",
    },
    {
      type: "T-Shrit",
      img: "https://www.customink.com/assets/site_content/pages/home/three_box_element/tshirts-224aad0d33bdda94bb1e2739a8b9e517a4b3fb2a95f6f9783300ced077463ecb.webp",
    },
  ];
  return (
    <div className="flex flex-col flex-1 py-20">
      <div className="px-30">
      <h1 className="text-4xl font-sharp font-semibold text-center">
        Custom Wears for Your Group
      </h1>
      <div className="grid grid-cols-4 gap-8 py-8 font-sharp overflow-hidden">
        {wears.map((wear, index) => {
          return (
            <div
              key={index}
              className="rounded-lg group duration-500 hover:shadow-2xl p-2 cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={wear.img}
                  alt=""
                  width={280}
                  height={400}
                  className="rounded-lg duration-500 group-hover:scale-[1.2] "
                />
              </div>
              <p className="text-center font-bold text-xl mt-2 ">{wear.type}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Thumbnails;
