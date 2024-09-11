import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-full p-8 pb-20 sm:p-20 font-clash">
      <div className="flex flex-col items-center border justify-center gap-16">
        <div className="border-[#ABABAB] border-[1px] rounded-2xl w-40 h-40 flex items-center justify-center">
          <Image
            src="/icons/inc-icon.svg"
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <p className="text-[80px] font-medium text-center leading-[80px]">
          Where Culture meets Connection
        </p>
        <button className="rounded-[30px] border-[1px] border-black w-[214px] h-14 font-medium text-xl">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
