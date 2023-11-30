import Image from "next/image";
import Link from "next/link";

function index({data}) {
  return <div>
    {data.map((event) => <Link key={event.id} href={`/event/${event.city}/${event.id}`}>
        <Image src={event.image} alt={event.title} width={300} height={300}/>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
    </Link>)}
  </div>;
}

export default index;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
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
  const { allEvents } = await import("/data/data.json");
  const categoriesId = context.params.categoriesId;
  console.log(categoriesId);
  const data = allEvents.filter(event => event.city === id);

  return {
    props: {data},
  };
}
