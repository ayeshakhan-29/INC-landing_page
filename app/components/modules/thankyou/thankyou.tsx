import React from "react";
import ImageGridLarge from "../join-waitlist/image-grid-large";
import Image from "next/image";

const Thanks = () => {
  return (
    <div className="flex font-clash w-full min-h-screen">
      <div className="flex flex-col items-center justify-center border w-full xl:w-1/2">
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
        <p className="text-xl xl:text-[25px] text-center px-12 xl:px-32 text-[#101623] mt-2">
          We will send you a link to download The Incc app when avail
        </p>
      </div>
      <div className="w-1/2 border border-red-500 xl:block hidden">
        <ImageGridLarge />
      </div>
    </div>
  );
};

export default Thanks;
