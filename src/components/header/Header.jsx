import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            alt="Logo Image"
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" passHref>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde</p>
      </div>
    </header>
  );
}

export default Header;
