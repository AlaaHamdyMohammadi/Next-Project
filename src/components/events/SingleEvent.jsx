import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function SingleEvent({ eventDate }) {
  const inputEmail = useRef();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  // console.log(router);



  async function handleSubmit(e){
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
      setErrorMessage("Please introduce a correct email address");
    }

    try{
      const res = await fetch('/api/emailRegistration', {
        method: "POST",
        body: JSON.stringify({email: emailValue, eventId}),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      if(!res.ok){
        throw new Error('Response Invalid')
      }
      const data = await res.json();
      console.log(data);
      inputEmail.current.value = '';

    }catch(err){
      console.log(`Error is: ${err}`)
    }

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
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          ref={inputEmail}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}

export default SingleEvent;
