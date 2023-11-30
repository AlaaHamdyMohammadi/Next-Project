import Image from "next/image";
import Link from "next/link";

function EventsPage({data}) {
    
  return (
    <div>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} passHref>
          <h2>{event.title}</h2>
          <Image src={event.image} alt={event.title} width={300} height={300}/>
        </Link>
      ))}
      
    </div>
  );
}

export async function getStaticProps(){
  const {events_categories} = await import('/data/data.json');
  console.log(events_categories)

  return {
    props: {
      data: events_categories,
      revalidate: 5,
    }
  }
}



export default EventsPage;
