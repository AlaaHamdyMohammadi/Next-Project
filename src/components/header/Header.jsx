import Link from "next/link";

function Header() {
    return (
      <header>
        <nav>
          <img />
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/events" passHref>
            Events
          </Link>
          <Link href="/aboutUs" passHref>
            About Us
          </Link>
        </nav>
      </header>
    );
}

export default Header
