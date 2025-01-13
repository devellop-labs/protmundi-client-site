import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import Progress from "@/components/progress";
import { getArticles } from "@/services/articles";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@/contexts/navigation";
import ArticlePreview from "@/components/article-preview";
import OnViewSlideInAnimation from "@/components/animations/on-view-animation";
import Pagination from "@/components/pagination";
import rectangleBanner from "/public/img/cta-background.png";
import { fetchMediaById } from "@/services/media";
import filterImg from "/public/img/filter.png";
import Link from "next/link";
import { ChevronRight, ImageOff } from "lucide-react";
import CTA from "@/components/layout/cta";

export default function BlogPageComponent() {
  const {} = useNavigation();

  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(6);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<Article[]>();
  const [isLoading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number>();
  const [latestArticleImg, setLatestArticleImg] = useState<string>();

  useEffect(() => {
    fetchArticles();
  }, [page, search, per_page]);

  const { enqueueSnackbar } = useSnackbar();

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    await getArticles({ params: { page, per_page, search } })
      .then((data) => {
        setArticles(data.articles);
        setTotalCount(data.totalCount);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          enqueueSnackbar({
            variant: "error",
            message: error.response.data.message,
          });
        }

        setLoading(false);
      });
  }, [page, per_page, search]);

  const fetchLatestArticleImg = useCallback(
    async (id: number) => {
      setLoading(true);
      const imgUrl = await fetchMediaById(id);
      setLatestArticleImg(imgUrl);
      setLoading(false);
    },
    [articles]
  );

  useEffect(() => {
    if (!articles) return;
    fetchLatestArticleImg(articles[0].featured_media);
  }, [articles]);

  return (
    <DefaultPageLayout
      translucentNav
      className="bg-light_bg flex flex-col gap-32"
    >
      <Section
        id="banner"
        className="relative overflow-visible flex flex-col gap-24"
      >
        <div className="h-[458px] bg-dark_bg relative " />
        {articles ? (
          <Container className="flex absolute -bottom-[40%] justify-center left-0 rela right-0 text-white h-full rounded-[20px] overflow-clip">
            <Link href={`/blog/${articles[0].slug}`} className="group">
              <Image
                fill
                src={filterImg}
                alt=""
                className="object-cover z-10"
              />
              {isLoading ? (
                <Progress className="mx-auto top-[40%] absolute" />
              ) : latestArticleImg ? (
                <Image
                  fill
                  src={latestArticleImg}
                  alt=""
                  className="object-cover group-hover:scale-110 transition-transform "
                />
              ) : (
                <div className="w-full flex items-center justify-center">
                  <ImageOff className="" />
                </div>
              )}

              <div className="w-full absolute left-0 p-16 bottom-0 flex flex-col gap-4 z-10">
                <h1 className="text-[32px] font-[700] leading-[42px] max-w-[700px]">
                  {articles[0].title.rendered}
                </h1>
                <div className="flex items-center gap-1">
                  <a>Saiba mais</a>
                  <span>
                    <ChevronRight className="size-[16px]" />
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        ) : (
          <Progress className="mx-auto" />
        )}
      </Section>
      <Section id="featured-articles" className="pt-40">
        <Container>
          {isLoading ? (
            <Progress />
          ) : (
            <div className="flex flex-col gap-12 md:gap-12 z-10">
              <h1 className="text-[32px] text-dark font-[700]">
                Destaques do blog
              </h1>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 w-full">
                {articles ? (
                  articles.length > 0 ? (
                    articles?.map((article, i) => {
                      return (
                        <OnViewSlideInAnimation
                          initialX={-100}
                          finalX={0}
                          delay={i / 10}
                          key={article.id}
                        >
                          <ArticlePreview article={article} />
                        </OnViewSlideInAnimation>
                      );
                    })
                  ) : (
                    <h1>Nenhum artigo foi encontrado.</h1>
                  )
                ) : (
                  <h1>Nenhum artigo foi encontrado.</h1>
                )}
              </div>
              <Pagination
                currentPage={page}
                onPageChange={(p) => setPage(p)}
                totalPages={Math.ceil(Number(totalCount) / per_page)}
              />
            </div>
          )}
        </Container>
      </Section>

      <Section id="contact" className="pb-32 px-3 sm:pb-48">
        <CTA
          external
          href="/fale-conosco"
          title={
            <>
              Fale conosco e vamos juntos <br /> concretizar suas ideias!
            </>
          }
          actionTitle="Fale com nossos especialistas"
        />
      </Section>
    </DefaultPageLayout>
  );
}
