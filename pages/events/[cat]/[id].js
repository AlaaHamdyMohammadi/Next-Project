import Image from "next/image";

function EventDetailPage({ eventDate }) {

  return <div>
    <Image src={eventDate.image} alt={eventDate.title} width={300} height={300}/>
    <h1>{eventDate.title}</h1>
    <p>{eventDate.description}</p>
  </div>;
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
        params: {
            categoriesId: event.city,
            id: event.id
        }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context){
    console.log(context);
    const id = context.params.id
    const {allEvents} = await import('/data/data.json');
    const eventDate = allEvents.find((event) => id === event.id);
    return {
        props: {eventDate}
    }
}

export default EventDetailPage;
