"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<any>(null);
  const [hoveredIndex3, setHoveredIndex3] = useState<any>(null);
  const [hoveredIndex4, setHoveredIndex4] = useState<any>(null);

  return (
    <div className="lg:flex flex-wrap items-center justify-center w-full my-10 hidden">
      <div className="flex gap-3 ">
        <div className="flex flex-col gap-5">
          <div
            className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
              hoveredIndex === null ? "h-[150px]" : "h-[60px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={60}
              height={60}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Other images - Hover effect */}
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "h-[150px]" : "h-[60px]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src="/images/avatar.jpeg"
                alt={`image ${index + 2}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col relative top-12 gap-5">
          <div
            className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
              hoveredIndex2 === null ? "h-[150px]" : "h-[60px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={60}
              height={60}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
                hoveredIndex2 === index ? "h-[150px]" : "h-[60px]"
              }`}
              onMouseEnter={() => setHoveredIndex2(index)}
              onMouseLeave={() => setHoveredIndex2(null)}
            >
              <img
                src="/images/avatar.jpeg"
                alt={`image ${index + 2}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div
            className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
              hoveredIndex3 === null ? "h-[150px]" : "h-[60px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={60}
              height={60}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
                hoveredIndex3 === index ? "h-[150px]" : "h-[60px]"
              }`}
              onMouseEnter={() => setHoveredIndex3(index)}
              onMouseLeave={() => setHoveredIndex3(null)}
            >
              <img
                src="/images/avatar.jpeg"
                alt={`image ${index + 2}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col relative top-12 gap-5">
          <div
            className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
              hoveredIndex4 === null ? "h-[150px]" : "h-[60px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={60}
              height={60}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[60px] transition-all duration-300 ease-in-out ${
                hoveredIndex4 === index ? "h-[150px]" : "h-[60px]"
              }`}
              onMouseEnter={() => setHoveredIndex4(index)}
              onMouseLeave={() => setHoveredIndex4(null)}
            >
              <img
                src="/images/avatar.jpeg"
                alt={`image ${index + 2}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
