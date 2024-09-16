"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageGridLarge from "../join-waitlist/image-grid-large";
import Image from "next/image";

const Thanks = () => {

  return (
    <div className=" font-clash w-full flex  items-left min-h-[80vh]">
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          src="/icons/tick.svg"
          alt="done"
          width={150}
          height={114}
          className="xl:w-[150px] w-20"
        />
        <p className="text-5xl lg:text-[100px] font-normal text-[#101623] mt-7 xl:mt-12">
          Thank you!
        </p>
        <p className="text-xl xl:text-[25px] text-[#101623] mt-2">
          We will send you a link to download The Incc app when available
        </p>
      </div>
      
    </div>
  );
};

export default Thanks;
