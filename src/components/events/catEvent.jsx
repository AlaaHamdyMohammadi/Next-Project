import Image from "next/image";
import Link from "next/link";

function catEvent({ data, pageName }) {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      {data.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.city}/${event.id}`}
          passHref
        >
          <div className="card">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default catEvent;
