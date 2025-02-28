import Image from "next/image";
export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src="/bg.jpg"
        fill
        quality={70}
        className="object-cover object-right-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal"></h1>
      </div>
    </main>
  );
}
