import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-7 text-xl font-bold font-mono py-7 bg-black text-white">
      <Link href={"/"}>HOME</Link>
      <Link href={"/about"}>ABOUT</Link>
      <Link href={"/skill/all"}>SKILL</Link>
      <Link href={"/project"}>PROJECT</Link>
      <Link href={"/contact"}>CONTACT</Link>
    </div>
  );
};

export default Navbar;
