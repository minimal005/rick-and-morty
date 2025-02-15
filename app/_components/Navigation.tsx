import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/characters"
            className="hover:text-accent-400 transition-colors"
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            href="/episode"
            className="hover:text-accent-400 transition-colors"
          >
            Episode
          </Link>
        </li>
        <li>
          <Link
            href="/location"
            className="hover:text-accent-400 transition-colors"
          >
            Location
          </Link>
        </li>
      </ul>
    </nav>
  );
}
