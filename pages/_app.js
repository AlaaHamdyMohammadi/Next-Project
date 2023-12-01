import AppLayout from "@/src/components/layout/AppLayout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <AppLayout>
    <Component {...pageProps} />
    </AppLayout>
    </>
  );
}
