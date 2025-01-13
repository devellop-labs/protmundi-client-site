import api from "@/services/api";
import Image from "next/image";
import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import Progress from "@/components/progress";
import SolucaoPreview from "@/components/solucoes/solucao-preview";
import Link from "next/link";

import { useEffect, useState } from "react";
import { fetchMediaById } from "@/services/media";
import { fetchSolutions } from "@/services/solutions";
import { useParams } from "next/navigation";
import { Carousel } from "@/components/carousel";
import { useRouter } from "next/router";

type Props = {
  solution: SolutionType;
};

export default function SolucaoPageComponent({ solution }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [featuredImg, setFeaturedImg] = useState<string>();
  const [images, setImages] = useState<string[]>();
  const [icon, setIcon] = useState<string>();
  const [expandedImg, setExpandedImg] = useState<string | null>(null); // State for expanded image
  const [solutions, setSolutions] = useState<SolutionType[]>();
  const router = useRouter();
  const slug = router.query;

  useEffect(() => {
    if (!solution) return;
    fetchData(solution);
  }, [solution]);

  async function fetchSolution() {
    const _solution = await api.get<SolutionType[]>(`/solucoes?slug=${slug}`);
    return _solution.data[0];
  }

  async function fetchData(solution: SolutionType) {
    setSolutions((await fetchSolutions()).solutions);
    setFeaturedImg(await fetchMediaById(solution.featured_media));
    setIcon(await fetchMediaById(solution.acf.icone));

    const fetchImages = async () => {
      if (!solution.acf?.galeria || !Array.isArray(solution.acf.galeria)) {
        console.error("A galeria não é válida ou está ausente.");
        setImages([]);
        return;
      }
    
      try {
        const images = await Promise.all(
          solution.acf.galeria.map(imageId => fetchMediaById(imageId.imagem))
        );
        setImages(images);
      } catch (error) {
        console.error("Erro ao buscar as imagens:", error);
        setImages([]);
      }
    };
    
    fetchImages();
    setIsLoading(false);
  }

  useEffect(() => {
    if (expandedImg) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scroll is restored on unmount
    };
  }, [expandedImg]);

  useEffect(() => {
    if (solution) document.title = "Solução - " + solution.title.rendered;
  }, [solution]);

  return (
    <DefaultPageLayout
      className={`${!isLoading && "pt-32 flex flex-col gap-24"}`}
    >
      {isLoading ? (
        <Container className="flex justify-center items-center h-screen">
          <Progress />
        </Container>
      ) : (
        <>
          <Section id="hero">
            <Container className="text-dark">
              {isLoading ? (
                <div className="flex justify-center items-center pt-12">
                  <Progress />
                </div>
              ) : (
                <div className="flex flex-col gap-32">
                  <div className="flex flex-col gap-8">
                    <div className="rounded-tl-[25px] w-[176px] h-[37px] flex items-center text-[18px] font-semibold px-12 text-white rounded-br-[25px] bg-primary">
                      <p>Solução</p>
                    </div>
                    <div className="flex justify-between pb-4 gap-24 items-center md:items-start md:justify-center flex-col md:flex-row">
                      <div className="flex flex-col gap-8 w-1/2">
                        <div className="flex gap-4">
                          <div className="w-[48px] h-[48px] relative">
                            {icon && <Image fill src={icon} alt="" />}
                          </div>
                          <div className="w-3/4">
                            <h1 className="text-[36px] text-primary leading-[42px] font-[600]">
                              {solution?.title.rendered}
                            </h1>
                            <p>{solution?.acf.descricao}</p>
                          </div>
                        </div>
                        <div
                          className="w-full md:w-[450px]"
                          id="content"
                          dangerouslySetInnerHTML={{
                            __html: solution.content.rendered,
                          }}
                        />

                        <Link
                          href="/fale-conosco"
                          target="_blank"
                          className="border-[2px] py-2 px-8 font-semibold w-fit rounded-full text-primary border-primary"
                        >
                          Faça um orçamento!
                        </Link>
                      </div>

                      {featuredImg && (
                        <div
                          className="rounded-tl-[40px] rounded-br-[40px] w-[642px] h-[425px] relative outline-[2px] overflow-clip"
                        >
                          <Image src={featuredImg} fill alt="" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full">
                    {images && (
                      <Carousel
                        slidesPerPage={1}
                        className="w-full"
                        indicators
                        responsive={{ lg: 4, md: 2, sm: 1, default: 1 }}
                      >
                        {images.map((imgurl, index) => (
                          <div
                            key={index}
                            onClick={() => setExpandedImg(imgurl)} // Set the clicked image as expanded
                            className="w-[264px] hover:scale-110 rounded-tl-[40px] rounded-br-[40px] h-[204px] relative mx-auto transition-all cursor-pointer overflow-clip"
                          >
                            <Image src={imgurl} fill alt="" />
                          </div>
                        ))}
                      </Carousel>
                    )}
                  </div>
                </div>
              )}
            </Container>
          </Section>

          {/* Full-screen Image Modal */}
          {expandedImg && (
            <div
              onClick={() => setExpandedImg(null)}
              className="fixed p-6 md:p-20 inset-0 z-50 flex items-center justify-center bg-[#002646] bg-opacity-85 cursor-pointer transition-all"
            >
            <button className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-md bg-transparent hover:bg-primary hover:text-white transition absolute top-7 right-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

              <div className="relative max-w-4xl max-h-[90vh">
                <Image
                  src={expandedImg}
                  alt="Expanded Image"
                  className="drop-shadow-xl overflow-clip border-[12px] border-white relative rounded-md"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          )}

          <Section id="outras-solucoes" className="bg-light_bg py-24 pb-48">
            <Container>
              <div className="flex flex-col gap-24">
                <div className="text-center">
                  <h1 className="text-primary text-[30px] leading-[38px] font-[500]">
                    Conheça outras soluções
                  </h1>
                </div>
                <div className="grid grid-cols-3 gap-4 z-10">
                  {solutions?.map((s) => (
                    <SolucaoPreview
                      showDescription={false}
                      slug={s.slug}
                      title={s.title.rendered}
                      link={s.link}
                      fields={s.acf}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        </>
      )}
    </DefaultPageLayout>
  );
}
