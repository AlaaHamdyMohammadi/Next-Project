import Footer from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";
import HomePage from "@/src/components/home/HomePage";
import Head from "next/head";

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events app</title>
      </Head>

      

      <HomePage data={data} />

      
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
