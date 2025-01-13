import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSolutionBySlug } from "@/services/solutions";
import Loading from "@/pages/loading";
import Head from "next/head";

const SolucaoPageComponent = dynamic(
  () => import("@/components/pages/solucoes/single-component"),
  { ssr: false }
);

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [solution, setSolution] = useState<SolutionType>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) {
      getSolutionBySlug({ slug: slug as string })
        .then((data) => {
          if (data) {
            setSolution(data);
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [slug]);

  if (error) {
    return <div>Este artigo não existe</div>;
  }

  return solution ? (
    <>
      <Head>
        <title>{solution.title.rendered}</title>
      </Head>
      <SolucaoPageComponent solution={solution} />
    </>
  ) : (
    <Loading />
  );
}
