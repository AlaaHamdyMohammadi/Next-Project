import SingleEvent from "@/src/components/events/SingleEvent";

function EventDetailPage({ eventDate }) {

  return <div>
    <SingleEvent eventDate={eventDate}/>
  </div>
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
        params: {
            cat: event.city,
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
