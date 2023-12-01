import Image from "next/image";
import Link from "next/link";

function EventsPage({ data }) {
  return (
    <div className="events_page">
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} passHref>
          <div className="card">
            <h2>{event.title}</h2>
            <Image
              src={event.image}
              alt={event.title}
              width={390}
              height={400}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EventsPage;
