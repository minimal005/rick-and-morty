import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src="/bg.jpg"
        fill
        quality={70}
        className="object-cover object-left-top md:object-right-top "
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 w-auto block text-center md:hidden md:w-0 top-6">
        <h1 className="text-8xl mb-10 inline-block border-1 border-primary-400 rounded-2xl text-primary-200 hover:text-secondary-400 hover:border-secondary-400 transition-colors py-2 px-8">
          <Link href="/characters/" className="text-7xl">
            Forward
          </Link>
        </h1>
      </div>
    </main>
  );
}
