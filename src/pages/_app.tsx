import "@/pages/globals.css";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Sidemenu from "@/components/layout/sidemenu";

import { NavigationProvider } from "@/contexts/navigation";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <NavigationProvider>
        <div className="bg-default_bg flex flex-col justify-between min-h-screen w-screen overflow-x-hidden overflow-y-auto">
          <Navbar />
          <Sidemenu />
          <Component {...pageProps} />
          <Footer />
        </div>
      </NavigationProvider>
    </>
  );
}
