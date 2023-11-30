import Image from "next/image";
import Link from "next/link";

function index({ data, pageName }) {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref>
          <Image src={event.image} alt={event.title} width={300} height={300} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  );
}



export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories)
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        categoriesId: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
    console.log(context)
  const { allEvents } = await import("/data/data.json");
  const categoriesId = context.params.categoriesId;
  console.log(categoriesId);
  const data = allEvents.filter(event => event.city === id);

  return {
    props: {data, pageName: id},
  };
}

export default index;
