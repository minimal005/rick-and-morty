import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-decoration-none">
      <div className="flex items-center gap-4 z-10  ">
        <Image
          src="/icon.svg"
          height="70"
          width="70"
          alt="Rick and Morty"
          className="hover:-rotate-45 transition-transform duration-500"
        />
        <span className="font-semibold text-2xl text-secondary-400 transition-colors">
          Rick and Morty
        </span>
      </div>
    </Link>
  );
};

export default Logo;
