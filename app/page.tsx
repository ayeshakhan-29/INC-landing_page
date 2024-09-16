import Image from "next/image";
import ImageGrid from "./components/shared/image-grid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full font-clash">
      <div className="flex flex-col items-center justify-center gap-16 mt-40">
        <div className="border-[#ABABAB] border-[1px] rounded-2xl w-40 h-40 flex items-center justify-center">
          <Image
            src="/icons/inc-icon.svg"
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <p className="text-5xl md:text-[80px] font-medium text-center md:leading-[80px] mx-20 xl:mx-40">
          Where Culture meets Connection
        </p>
        <button className="rounded-[30px] border-[1px] border-black w-[214px] h-14 font-medium text-xl hover:bg-black hover:text-white ease-in-out duration-[900ms]">
          Join Waitlist
        </button>
      </div>
      <div className="absolute top-0 right-20">
        <ImageGrid />
      </div>
    </div>
  );
}
