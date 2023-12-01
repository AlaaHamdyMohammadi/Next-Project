import Image from "next/image";

function SingleEvent({ eventDate }) {
  return (
    <div>
      <Image
        src={eventDate.image}
        alt={eventDate.title}
        width={1000}
        height={500}
      />
      <h1>{eventDate.title}</h1>
      <p>{eventDate.description}</p>
      <input type="email" />
      <button>Submit</button>
    </div>
  );
}

export default SingleEvent
