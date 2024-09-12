import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="md:flex flex-wrap justify-center w-[334px] h-[473px] hidden">
      <div className="flex gap-3 ">
        <div className="relative rounded-full h-[182.84px] w-[73.76px]">
          <Image
            src="/images/image.png"
            alt="image 1"
            width={100}
            height={100}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="relative rounded-full h-[182.84px] w-[73.76px]">
          <Image
            src="/images/image.png"
            alt="image 1"
            width={100}
            height={100}
            className="absolute top-8 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="relative rounded-full h-[182.84px] w-[73.76px]">
          <Image
            src="/images/image.png"
            alt="image 1"
            width={100}
            height={100}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="relative rounded-full h-[182.84px] w-[73.76px]">
          <Image
            src="/images/image.png"
            alt="image 1"
            width={100}
            height={100}
            className="absolute top-8 left-0 w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-[-40px]">
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>{" "}
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-10 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>{" "}
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-10 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-[-40px]">
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>{" "}
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-10 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>{" "}
        <div className="relative rounded-full h-[73.97px] w-[73.76px]">
          <img
            src="/images/avatar.jpeg"
            alt="image 10"
            width={1000}
            height={1000}
            className="absolute top-10 left-0 w-full object-cover rounded-full h-[73.97] aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
