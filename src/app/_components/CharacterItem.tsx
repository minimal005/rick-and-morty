import Image from "next/image";
import Link from "next/link";
import image_1 from "@/public/1.jpeg";

export const CharacterItem = () => {
  return (
    <div className="w-full tablet:w-[600px] tablet:flex bg-gray-800 rounded-xl border-1 border-primary-400/20 overflow-hidden">
      <div className="md:shrink-0 relative h-72 tablet:h-56 tablet:aspect-square overflow-hidden">
        <Image
          className="w-full object-cover hover:scale-110 transition-transform duration-300 ease-linear"
          fill
          src={image_1}
          alt="add name characters'"
        />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div className="mobile:mb-3">
          <h2>
            <Link
              href="/characters/character"
              className="block text-3xl leading-6 font-bold hover:text-accent-400 transition-colors"
            >
              Alien Rick
            </Link>
          </h2>
          <span>🟢 Unknown - Alien</span>
        </div>

        <div className="mobile:mb-3">
          <span className="block text-slate-500 font-bold">
            Last known location:
          </span>
          <Link
            href="#"
            className="text-lg hover:text-accent-400 transition-colors"
          >
            📍 Citadel of Ricks
          </Link>
        </div>
        <div>
          <span className="block text-slate-500 font-bold">First seen in:</span>
          <Link
            href="#"
            className="text-lg hover:text-accent-400 transition-colors"
          >
            Close Rick-counters of the Rick Kind
          </Link>
        </div>
      </div>
    </div>
  );
};
