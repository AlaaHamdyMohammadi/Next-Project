import Image from "next/image";
import Link from "next/link";

function HomePage({data}) {
    return (
      <main>
        {data.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id} passHref>
            <h2>{event.title}</h2>
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={200}
            />
            <p>{event.description}</p>
          </Link>
        ))}
      </main>
    );
}

export default HomePage
