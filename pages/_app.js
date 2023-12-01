import AppLayout from "@/src/components/layout/AppLayout";
import "@/styles/globals.css";
import "@/styles/general.sass";


export default function App({ Component, pageProps }) {
  return (
    <>
    <AppLayout>
    <Component {...pageProps} />
    </AppLayout>
    </>
  );
}
