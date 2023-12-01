import CatEvent from "@/src/components/events/catEvent";


function EventsCatPage({ data, pageName }) {
  return (
    
    
      <CatEvent data={data} pageName={pageName} />
      
    
  );
}

export default EventsCatPage;


// export async function getStaticPaths() {
//   const { events_categories } = await import("/data/data.json");
//   console.log(events_categories)
//   const allPaths = events_categories.map((event) => {
//     return {
//       params: {
//         categoriesId: event.id.toString(),
//       },
//     };
//   });

//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//     console.log(context)
//   const { allEvents } = await import("/data/data.json");
//   const categoriesId = context?.params.categoriesId;
//   console.log(categoriesId);
//   const data = allEvents.filter(event => event.city === id);

//   return {
//     props: {data, pageName: id},
//   };
// }

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}

