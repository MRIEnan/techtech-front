import { DataProvider } from "@/Providers/DataProvider/DataProvider";
import auth from "@/firebase/firebase.auth";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [user] = useAuthState(auth);
  const [singOut] = useSignOut(auth);

  return (
    <SessionProvider session={pageProps.session}>
      <DataProvider>{getLayout(<Component {...pageProps} />)}</DataProvider>
    </SessionProvider>
  );
}
