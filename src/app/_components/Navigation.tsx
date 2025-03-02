import Link from "next/link";
import { Stack } from "react-bootstrap";

export default function Navigation() {
  return (
    <Stack
      as="ul"
      direction="horizontal"
      gap={4}
      className="z-10 text-2xl flex-col md:flex-row text-primary-100 transition-colors ms-auto"
    >
      <Link
        href="/characters"
        className="hover:text-secondary-500 transition-colors "
      >
        Characters
      </Link>

      <Link
        href="/episode"
        className="hover:text-secondary-500 transition-colors "
      >
        Episode
      </Link>

      <Link
        href="/location"
        className="hover:text-secondary-500 transition-colors"
      >
        Location
      </Link>
    </Stack>
  );
}
