import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col w-full px-3 py-5 md:px-20 items-center justify-between font-poppins text-base md:text-xl">
      <div className="row-start-3 flex gap-3 md:gap-6 flex-wrap">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          mission statement
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          terms
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          FAQs
        </a>
      </div>
      <div>
        <p className="font-clash font-normal text-sm md:text-base text-[#101623]">
          copyrights © 2024 The Incc Incorporated
        </p>
      </div>
    </footer>
  );
};

export default Footer;
