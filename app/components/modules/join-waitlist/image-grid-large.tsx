"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageGridLarge = () => {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<any>(null);
  const [hoveredIndex3, setHoveredIndex3] = useState<any>(null);
  const [hoveredIndex4, setHoveredIndex4] = useState<any>(null);

  return (
    <div className="lg:flex flex-wrap items-center justify-center w-full h-[700px] my-10 hidden">
      <div className="flex gap-5 ">
        <div className="flex flex-col gap-10">
          <div
            className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
              hoveredIndex === null ? "h-[300px]" : "h-[115px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Other images - Hover effect */}
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "h-[300px]" : "h-[115px]"
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

        <div className="flex flex-col relative top-28 gap-10">
          <div
            className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
              hoveredIndex2 === null ? "h-[300px]" : "h-[115px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Other images - Hover effect */}
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
                hoveredIndex2 === index ? "h-[300px]" : "h-[115px]"
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
        <div className="flex flex-col gap-10">
          <div
            className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
              hoveredIndex3 === null ? "h-[300px]" : "h-[115px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Other images - Hover effect */}
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
                hoveredIndex3 === index ? "h-[300px]" : "h-[115px]"
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
        <div className="flex flex-col relative top-28 gap-10">
          <div
            className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
              hoveredIndex4 === null ? "h-[300px]" : "h-[115px]"
            }`}
          >
            <Image
              src="/images/image.png"
              alt="image 1"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Other images - Hover effect */}
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`relative rounded-full w-[115px] transition-all duration-300 ease-in-out ${
                hoveredIndex4 === index ? "h-[300px]" : "h-[115px]"
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

export default ImageGridLarge;
