import DefaultPageLayout from "@/components/layout/pages/default-page";
import PrivacyTerms from "@/components/privacy-terms";
import Head from "next/head";

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Head>
        <title>Protmundi - Política de Privacidade</title>
      </Head>
      <DefaultPageLayout className="pt-12">
        <PrivacyTerms />
      </DefaultPageLayout>
    </>
  );
}
