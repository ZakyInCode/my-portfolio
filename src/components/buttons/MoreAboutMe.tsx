import Link from "next/link";

const MoreAboutMe = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-2 m-4 z-1">
      <div className="absolute top-0 w-full border-t border-l border-r h-[40%] border-valorantWhite"></div>
      <Link
        href={"/about"}
        className="z-10 py-1 px-5 text-xl md:text-2xl text-center transition-all text-valorantWhite bg-valorant hover:bg-valorantBlue md:px-10 md:py-2"
      >
        MORE ABOUT ME
      </Link>
      <div className="absolute bottom-0 w-full border-b border-l border-r h-[40%] border-valorantWhite"></div>
    </div>
  );
};

export default MoreAboutMe;
