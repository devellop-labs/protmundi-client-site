import Head from "next/head";
import SolucoesPageComponent from "@/components/pages/solucoes/component";

const metadata = {
  title: "Protmundi - Soluções",
};

export default function SolucoesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <SolucoesPageComponent />
    </>
  );
}
