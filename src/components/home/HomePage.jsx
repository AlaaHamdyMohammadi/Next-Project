import Image from "next/image";
import Link from "next/link";

function HomePage({ data }) {
  return (
    <div className="home_body">
      {data.map((event) => (
        <Link
          className="card"
          href={`/events/${event.id}`}
          key={event.id}
          passHref
        >
          <div className="image">
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={200}
            />
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
