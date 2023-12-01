import Image from "next/image";
import { useRef } from "react";

function SingleEvent({ eventDate }) {
  const ref = useRef();

  function handleSubmit(e){
    e.preventDefault();

  }
  return (
    <div className="event_single_page">
      <h1> {eventDate.title} </h1>
      <Image
        src={eventDate.image}
        alt={eventDate.title}
        width={1000}
        height={500}
      />
      <h1>{eventDate.title}</h1>
      <p>{eventDate.description}</p>
      <form onSubmit={handleSubmit} className="email_registration">
        <label htmlFor="email">Get Registered for this event!</label>
        <input type="email" id="email" placeholder="Enter your email" ref={ref}/>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default SingleEvent;
