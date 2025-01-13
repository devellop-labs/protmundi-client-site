import "./globals.css";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import { NavigationProvider } from "@/contexts/navigation";
import Sidemenu from "@/components/layout/sidemenu";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <NavigationProvider>
        <body className="bg-default_bg flex flex-col justify-between min-h-screen w-screen overflow-x-hidden overflow-y-auto">
          <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
          <Sidemenu />
          {children}
          <Footer />
        </body>
      </NavigationProvider>
    </html>
  );
}
