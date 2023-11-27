import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Events App</title>
      </Head>
      <header>
        <nav>
          <img />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/aboutUs">About Us</Link>
        </nav>
      </header>
      <main>
        <Link href="">
          <h2>Events in London</h2>
          <img/>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
          </p>
        </Link>
        <Link href="">
          <h2>Events in San Francisco</h2>
          <img/>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
          </p>
        </Link>
        <Link href="">
          <h2>Events in Barcelona</h2>
          <img/>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
          </p>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
