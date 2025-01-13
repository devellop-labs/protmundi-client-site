import DefaultPageLayout from "@/components/layout/pages/default-page";
import Progress from "@/components/progress";
import Container from "@/components/layout/container";
import ArticlePreview from "@/components/article-preview";
import SolucaoPreview from "@/components/solucoes/solucao-preview";
import Pagination from "@/components/pagination";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { fetchSolutions } from "@/services/solutions";
import { getArticles } from "@/services/articles";

function SearchResults() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") ?? undefined;
  const category = searchParams?.get("category") ?? undefined;
  const per_page = 6;
  const [articles, setArticles] = useState<Article[]>();
  const [solucoes, setSolutions] = useState<SolutionType[]>();
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [page, setPage] = useState<number>(1);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const _articlesRes = await getArticles({
        params: {
          category,
          page,
          search,
          per_page,
        },
      });
      const solutions = await fetchSolutions({ search });
      setArticles(_articlesRes.articles);
      setTotalCount(_articlesRes.totalCount);
      setSolutions(solutions.solutions);
      setTotalPages(_articlesRes.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [search, category, page]);

  useEffect(() => {
    document.title = "Resultados para " + `"${search}"`;
    fetchData();
  }, [search, category, page]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Progress />
      </div>
    );

  return (
    <Container className="py-12 flex flex-col gap-12 pb-48">
      <div className="flex items-baseline gap-2">
        {search && (
          <>
            <h1 className="text-[20px] font-[500]">Resultados para </h1>
            <p className="text-[20px] font-[700]">"{search}"</p>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-[700] text-[18px]">Artigos</h2>
        <div className="flex flex-col gap-12">
          {articles ? (
            <div className="w-full grid-cols-1 gap-6 md:grid-cols-3 grid md:gap-4">
              {articles.map((article) => (
                <ArticlePreview key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p>Nenhum artigo encontrado</p>
          )}
          {totalPages && totalPages > 1 && (
            <Pagination
              currentPage={page}
              onPageChange={(p) => setPage(p)}
              totalPages={totalPages ?? 1}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 z-10">
        <h2 className="font-[700] text-[18px]">Soluções</h2>
        {solucoes && solucoes.length > 0 ? (
          <ul className="gap-4 flex flex-col">
            {solucoes.map((solucao) => (
              <SolucaoPreview
                key={solucao.id}
                fields={solucao.acf}
                link={solucao.link}
                slug={solucao.slug}
                title={solucao.title.rendered}
              />
            ))}
          </ul>
        ) : (
          <p>Nenhuma solução encontrada</p>
        )}
      </div>
    </Container>
  );
}

export default function SearchPageComponent() {
  return (
    <DefaultPageLayout className="pt-24 text-dark bg-light_bg">
      <Suspense fallback={<Progress />}>
        <SearchResults />
      </Suspense>
    </DefaultPageLayout>
  );
}
