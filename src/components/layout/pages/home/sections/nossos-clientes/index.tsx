import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import rectangleBanner from "/public/img/cta-background.png";
import { useEffect, useState } from "react";
import { fetchFeaturedArticles, getArticles } from "@/services/articles";
import ArticlePreview from "@/components/article-preview";
import { Carousel } from "@/components/carousel";
import { Spinner } from "flowbite-react";
import { getClients } from "@/services/clients";
import CTA from "@/components/layout/cta";

export default function NossosClientesSection() {
  const [articles, setArticles] = useState<Article[]>();
  const [clientes, setClientes] = useState<ClientType[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clientsRes = await getClients({ params: {} });
    setClientes(clientsRes.clientes);
    const articlesRes = await getArticles({
      params: {
        page: 1,
        per_page: 3,
        meta_key: "em_destaque",
        meta_value: "true",
      },
    });
    setArticles(articlesRes.articles);
    console.log(clientsRes, articlesRes);
    console.log(clientes);
  };

  return (
    <>
      <Section id="nossos-clientes">
        <Container className="overflow-hidden">
          <div className="flex flex-col gap-24 md:gap-32 pb-32 sm:pb-16">
            <div className="flex flex-col gap-4 justify-center items-center text-center md:text-start">
              <h1 className="text-primary text-[22px] sm:text-[30px] font-[500]">
                Nossos clientes
              </h1>
              <p className="text-dark text-[15px] sm:text-[16px] font-[400]">
                Confira algumas empresas que materializam seus projetos com a
                Protmundi.
              </p>
            </div>
            {clientes && (
              <Carousel
                responsive={{
                  lg: 4,
                  sm: 4,
                  default: 1,
                }}
                indicators
                autoplay
              >
                {clientes.map((client) => (
                  <div key={client.name} className="client-logo">
                    <Image
                      src={client.logoUrl}
                      alt={client.name}
                      width={150}
                      height={100}
                      objectFit="contain"
                      className="mx-auto"
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </Container>
      </Section>
      <Section
        id=""
        className="bg-light_bg relative w-full flex flex-col gap-10 mt-12 sm:mt-52 md:mt-24"
      >
        <CTA
          className="-top-[80px]"
          subtitle="Fale conosco e descubra como podemos colaborar!"
          actionTitle="Contato"
          href="/fale-conosco"
          external
          title="Estamos prontos para tirar sua ideia do papel."
        />
        <Container className="flex flex-col gap-12 pb-32">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-[30px] leading-[38px] text-primary font-[500]">
              Destaques do blog
            </h1>
            <p className="text-dark">Aco mpanhe nossos conteúdos.</p>
          </div>
          {articles ? (
            <div className="w-full">
              <div className="hidden md:grid grid-cols-3 w-full gap-4 z-10 relative">
                {articles &&
                  articles.map((a) => (
                    <ArticlePreview article={a} key={a.id} />
                  ))}
              </div>
              {articles && (
                <Carousel
                  indicators
                  responsive={{ default: 1 }}
                  autoplay
                  className="overflow-x-clip md:hidden w-[90vw] relative"
                >
                  {articles.map((art, i) => (
                    <div className="px-12 sm:px-32">
                      <ArticlePreview key={i} article={art} />
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          ) : (
            <Spinner color="primary" />
          )}

          <div className="flex md:justify-end justify-center pt-10 pb-16">
            <Link
              href="/blog"
              className="rounded-full z-10 transition-all border-[2px] border-primary px-12 py-2 text-primary hover:bg-primary hover:shadow-button hover:text-white"
            >
              Confira outros artigos
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
