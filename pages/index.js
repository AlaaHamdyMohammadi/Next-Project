import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function HomePage({data}) {
  return (
    <div>
      <Head>
        <title>Events app</title>
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
        {data.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <h2>{event.title}</h2>
            <Image src={event.image} alt={event.title} width={200} height={200}/>
            <p>{event.description}</p>
          </Link>
        ))}
        
      </main>
    </div>
  );
}

export async function getServerSideProps() {
 
  const {events_categories} = await import('./../data/data.json');
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}

export default HomePage;
