import Divider from "@/components/divider";
import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import moment from "moment";
import Image from "next/image";
import ArticlePreview from "@/components/article-preview";
import CommentForm from "@/components/forms/comment";
import CTA from "@/components/layout/cta";

import { fetchMediaById } from "@/services/media";
import { fetchCategories, getCategoryById } from "@/services/categories";
import { useEffect, useState } from "react";
import { calculateReadingTime } from "@/utils/reading";
import { fetchRelatedArticlesByCategories } from "@/services/articles";

import Loading from "@/pages/loading";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function ArticlePage({ article }: Props) {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>();
  const [readingTime, setReadingTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<string>();
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    document.title = article.title.rendered;
    setReadingTime(calculateReadingTime(article.content.rendered));
    fetchData();
  }, [article]);

  const fetchData = async () => {
    try {
      const media = await fetchMediaById(article.featured_media);
      setImage(media);
      const related = await fetchRelatedArticlesByCategories(
        article.categories
      );
      setRelatedArticles(related);
      const resC = await getCategoryById(article.categories[0]);
      setCategory(resC);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <DefaultPageLayout translucentNav className="flex flex-col">
      <Section
        id="banner"
        className="relative overflow-visible flex flex-col bg-light_bg"
      >
        <div className="h-[458px] bg-dark_bg relative w-full" />
        <div className="absolute left-0 right-0 h-full flex justify-center -bottom-[30%] w-full">
          <Container className="max-w-[864px] mx-auto h-full relative flex flex-col">
            <div className="flex flex-col gap-6">
              <h1 className="text-[24] leading-[30px] md:text-[32px] md:leading-[42px] text-center max-w-[864px] text-white font-[700]">
                {article?.title?.rendered}
              </h1>
              <div className="flex text-[14px] font-[300] flex-col gap-5">
                <Divider className="bg-primary" />
                <div className="flex justify-center gap-4 items-center text-white">
                  <p>{category?.name}</p>
                  <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                  {readingTime}
                  <div className="w-[7px] h-[7px] rounded-full bg-primary" />
                  {moment(article?.date).format("DD-MM-YYYY")}
                  <Link href="/blog" className="gap-2 flex items-center">
                    <ChevronLeft className="text-primary" />
                    Voltar
                  </Link>
                </div>
              </div>
              {image && (
                <div className="rounded-[20px] mx-auto">
                  <Image
                    className="rounded-[20px] object-cover"
                    width={864}
                    height={500}
                    src={image}
                    alt=""
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      </Section>
      <Section id="content" className="pt-52 sm:pt-[26rem] pb-32">
        <Container className="max-w-[864px]">
          {article && (
            <div
              className="max-w-[864px] mx-auto"
              dangerouslySetInnerHTML={{ __html: article.content.rendered }}
              id="content"
            />
          )}
        </Container>
      </Section>
      <Section
        id="related-articles"
        className="bg-light_bg pt-16 flex flex-col gap-24"
      >
        <Container className="flex flex-col gap-8 ">
          <h1 className="text-dark font-[700] text-[32px]">
            Artigos relacionados
          </h1>
          <div className="grid-cols-1 w-full md:grid-cols-3 gap-6 md:gap-4 grid">
            {relatedArticles &&
              relatedArticles.map((ra) => (
                <ArticlePreview key={ra.id} article={ra} />
              ))}
          </div>
        </Container>
        <CTA
          external
          href="/fale-conosco"
          actionTitle="Fale com nossos especialistas"
          title={
            <>
              Fale conosco e vamos juntos <br /> concretizar suas ideias!
            </>
          }
        />
        {article && (
          <Container className="pb-32 w-full z-10">
            <CommentForm articleId={article.id} />
          </Container>
        )}
      </Section>
    </DefaultPageLayout>
  );
}
