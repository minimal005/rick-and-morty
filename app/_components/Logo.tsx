import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <Image src="/icon.svg" height="60" width="60" alt="Rick and Morty" />
      <span className="text-xl font-semibold text-primary-100">
        Rick and Morty
      </span>
    </a>
  );
};

export default Logo;
