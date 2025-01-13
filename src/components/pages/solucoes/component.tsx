import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import Progress from "@/components/progress";
import SolucaoPreview from "@/components/solucoes/solucao-preview";
import heroImg from "/public/img/solucoes-hero-img.png";
import bannerBg from "/public/img/banner-solucoes-bg.png";
import Link from "next/link";
import TopicList from "@/components/topic-list";
import step1img from "/public/img/step-1-img.png";
import step2img from "/public/img/step-2-img.png";
import step3img from "/public/img/step-3-img.png";
import setaimg from "/public/img/seta.png";
import Image, { StaticImageData } from "next/image";
import CTA from "@/components/layout/cta";

import { useEffect, useState } from "react";
import { fetchSolutions } from "@/services/solutions";
import { Carousel } from "@/components/carousel";

type Step = {
  title: string;
  img: StaticImageData;
};

const steps: Step[] = [
  {
    img: step1img,
    title: "Diga-nos o que você precisa.",
  },
  {
    img: step2img,
    title:
      "Conte com o auxílio de nossos profissionais no desenvolvimento do seu projeto.",
  },
  {
    img: step3img,
    title:
      "Contrate nossos serviços e tenha a entrega garantida de um excelente produto.",
  },
];

export default function SolucoesPageComponent() {
  const [data, setData] = useState<SolutionType[]>();

  async function fetchData() {
    const solutions = await fetchSolutions();
    console.log(solutions);
    setData(solutions.solutions.reverse());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DefaultPageLayout className="pt-44 flex flex-col gap-0 md:gap-12 lg:pb-[480px]">
      <Section id="hero">
        <Container>
          <div className="w-full flex-col md:flex-row flex justify-between gap-16 md:gap-0 pb-24 md:pb-0">
            <div className="flex flex-col gap-14 w-full sm:w-1/2 pr-16">
              <div className="rounded-tl-[25px] py-1 text-[18px] font-semibold px-12 text-white w-fit rounded-br-[25px] bg-primary">
                <p>Soluções</p>
              </div>
              <h1 className="text-[24px] leading-[28px] md:text-[32px] font-[600] md:leading-[42px] text-primary">
                A solução certa para a fabricação <br />
                do seu projeto está aqui!
              </h1>
              <div className="w-full">
                <p className="text-[16px]">
                  Somos especialistas em prototipagem e produção de peças
                  técnicas. Oferecemos soluções completas e personalizadas,
                  desde mockups e protótipos funcionais até produções em série,
                  utilizando tecnologias avançadas como, por exemplo, impressão
                  3D e usinagem de precisão. Nosso compromisso é transformar
                  suas ideias em produtos reais com qualidade e rapidez.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:pt-6 mx-auto w-[75vw] md:w-1/2">
              <Image {...heroImg} alt="Hero Image" className="" />
            </div>
          </div>
        </Container>
      </Section>
      <Section id="#" className="pb-[220px] md:pb-24">
        <Container>
          <div className="flex flex-col gap-20 md:gap-16">
            <div className="text-center">
              <h1 className="text-primary text-[22px] sm:text-[26px] sm:leading-[36px] leading-[32px] md:text-[30px] md:leading-[38px] font-[500]">
                Conheça todas as nossas soluções <br /> e veja como podemos
                ajudar seu projeto a decolar:
              </h1>
            </div>
            <div className="flex justify-center w-full">
              {data ? (
                data.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {data.map((solucao) => (
                      <SolucaoPreview
                        slug={solucao.slug}
                        title={solucao.title.rendered}
                        link={solucao.link}
                        fields={solucao.acf}
                      />
                    ))}
                  </div>
                ) : (
                  <h1 className="text-center text-dark text-[15px] md:text-[16px]">
                    Nenhuma solução foi encontrada.
                  </h1>
                )
              ) : (
                <Progress className="mx-auto pt-12" />
              )}
            </div>
          </div>
        </Container>
      </Section>
      <Section
        id=""
        className={`relative h-fit w-full flex flex-col bg-light_bg mt-52 py-32`}
      >
        <Container className="left-0 absolute right-0 w-full -top-[15%] sm:-top-[10%] md:-top-[25%]">
          <div className="relative w-full h-[494px] overflow-clip rounded-tl-[40px] rounded-br-[40px]">
            <Image src={bannerBg.src} fill alt="" className="object-cover" />
            <div className="absolute w-full md:w-1/2 px-12 md:px-24 py-12 left-0 flex flex-col items-center md:items-start h-full justify-center gap-12 lg:w-[570px] text-white">
              <p className="text-[24px] leading-[36px] text-center md:text-start w-full sm:w-[80%] md:w-fit md:text-[28px] font-[500]">
                Temos uma solução exclusiva para a produção de pequenos lotes de
                peças injetadas com alta qualidade e custos reduzidos.
              </p>
              <Link
                href="/fale-conosco"
                className="border-[2px] text-center border-white rounded-full py-3 px-8 w-fit font-[500] hover:bg-primary hover:shadow-button transition-all"
              >
                Fale conosco e peça um orçamento!
              </Link>
            </div>
          </div>
        </Container>
        <div className="pt-[240px] md:pt-[220px] md:h-fit">
          <Container className="flex flex-col gap-16 md:gap-20">
            <h1 className="md:text-[30px] text-[22px] text-primary font-[500] text-center">
              E desenvolvemos ainda:
            </h1>
            <div className="grid gap-4 px-8 md:px-0 grid-cols-1 md:grid-cols-3">
              <TopicList
                className="gap-8 md:gap-4"
                topics={[
                  "Termoformagem (vacuum forming)",
                  "Engenharia reversa/digitalização",
                  "Molde de silicone (vacuum casting)",
                  "Molde de rotomoldagem",
                  "Peças transparentes",
                  "Manutenção de molde de injeção",
                  "Fibra (modelo, fibra e corte)",
                ]}
              />
              <TopicList
                className="gap-8 md:gap-4"
                topics={[
                  "Fundidos (modelo, fundição e pós-processos)",
                  "Pintura e tratamentos",
                  "Dispositivos, gabaritos e bancadas",
                  "Impressão digital, serigrafia, adesivos, tampografia e gravações",
                  "EPS/PU (molde ou usinagem)",
                  "MDF/compensado (usinagem)",
                ]}
              />
              <div className="w-full md:flex md:justify-end md:text-end">
                <TopicList
                  className="gap-8 md:gap-4"
                  topics={[
                    "Embalagem especial de produto",
                    "Solda plástica (ultrassom e hot plate)",
                    "Montagem técnica",
                    "Molde para injeção de alumínio",
                    "Maquete",
                    "Tubos e arames (corte, dobra, solda e pintura)",
                  ]}
                />
              </div>
            </div>
          </Container>
        </div>
      </Section>
      <div className="flex flex-col gap-12 md:gap-24">
        <Section id="contact" className="pt-20">
          <Container className="flex flex-col gap-32 md:gap-24 px-0">
            <div className="text-center">
              <p className="text-primary px-12 md:px-0 leading-[32px] text-[22px] md:text-[30px] font-[500]">
                Protmundi: parceria certa para conquistar seus objetivos
              </p>
            </div>
            <div className="md:hidden flex w-full overflow-x-clip">
              <Carousel
                className="w-full"
                indicators
                responsive={{ default: 1 }}
              >
                {steps.map((step, i) => (
                  <div className="relative group mx-auto w-[342px] h-[242px] duration-100 delay-75 bg-light_bg rounded-[20px]">
                    <div className="w-full flex justify-center absolute -top-[40%] group-hover:scale-110 duration-200 transition-transform">
                      <Image {...step.img} alt="" />
                    </div>
                    <div className="absolute -bottom-12 flex h-full items-center justify-center font-[600] w-full text-center px-8">
                      <p>{step.title}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="hidden md:flex w-full items-center justify-between pt-20">
              {steps.map((step, i) => (
                <>
                  <div
                    key={i}
                    className="relative group w-[342px] h-[242px] hover:scale-105 duration-100 delay-75 bg-light_bg rounded-[20px]"
                  >
                    <div className="w-full flex justify-center absolute -top-[40%] group-hover:scale-110 duration-200 transition-transform">
                      <Image {...step.img} alt="" />
                    </div>
                    <div className="absolute -bottom-12 flex h-full items-center justify-center font-[600] w-full text-center px-8">
                      <p>{step.title}</p>
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="hidden md:flex">
                      <Image {...setaimg} alt="" />
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="w-full flex justify-center">
              <p className="text-dark text-center md:w-[720px] lg:w-[900px] text-[16px]">
                Também estamos prontos para colaborar desde os primeiros passos
                do seu projeto. Se você tem um conceito que ainda não está
                totalmente definido, nossa equipe especializada pode ajudar a
                materializá-lo.
              </p>
            </div>
          </Container>
        </Section>
        <Section id="" className="relative pb-24">
          <CTA
            href="/fale-conosco"
            actionTitle="Fale com nossos especialistas"
            title={
              <>
                Fale conosco e vamos juntos <br /> concretizar suas ideias!
              </>
            }
            external
          />
        </Section>
      </div>
    </DefaultPageLayout>
  );
}
