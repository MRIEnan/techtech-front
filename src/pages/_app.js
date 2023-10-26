import { DataProvider } from "@/Providers/DataProvider/DataProvider";
import "@/styles/globals.css";
import { useContext } from "react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <DataProvider>{getLayout(<Component {...pageProps} />)}</DataProvider>;
}
