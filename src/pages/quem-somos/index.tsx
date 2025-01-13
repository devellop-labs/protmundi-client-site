import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import Image from "next/image";
import heroBg from "/public/img/quem-somos-hero-bg.png";
import heroBanner from "/public/img/quem-somos-hero-banner.png";
import Container from "@/components/layout/container";
import heroImg from "/public/img/quem-somos-hero-img.png";
import img1 from "/public/img/quem-somos-img-1.png";
import img2 from "/public/img/quem-somos-img-2.png";
import img3 from "/public/img/quem-somos-img-3.png";
import img4 from "/public/img/quem-somos-img-4.png";
import check from "/public/img/check.png";
import TopicList from "@/components/topic-list";
import Link from "next/link";
import mapaMobile from "/public/img/mapa-mobile.png";
import mapa from "/public/img/mapa.png";
import Head from "next/head";

type BlockType = {
  align: "right" | "left";
  title: string;
  description: string;
  imgUrl: string;
};

const blocks: BlockType[] = [
  {
    align: "left",
    description:
      "Valorizamos cada cliente e suas necessidades únicas. Nosso compromisso é oferecer um atendimento personalizado, proporcionando soluções sob medida que atendam às expectativas e objetivos específicos de cada projeto.",
    imgUrl: img1.src,
    title: "Atendimento personalizado",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      <Head>
        <title>Protmundi - Quem somos</title>
      </Head>

      <DefaultPageLayout translucentNav className="flex flex-col gap-24">
        <Section id="hero" className="relative">
          <div className="relative w-full h-[720px] sm:h-[572px] md:h-[800px] overflow-hidden">
            <Image
              {...heroBg}
              fill
              width={undefined}
              height={undefined}
              alt=""
              className="object-cover"
            />
          </div>
          <Container className="flex flex-col gap-24 absolute top-32 md:top-[20%] left-0 right-0">
            <div className="flex flex-col gap-12">
              <div className="rounded-tl-[25px] w-fit flex items-center text-[15px] md:text-[18px] font-[700] px-8 py-1 text-white rounded-br-[25px] bg-primary">
                Quem somos
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                <div className="flex flex-col gap-6 font-semibold max-w-lg">
                  <h3 className="text-[16px] md:text-[22px] text-primary ">
                    Prototipagem e produção de alto nível
                  </h3>
                  <h1 className="text-[24px] leading-[28px] md:text-[48px] text-white md:leading-[54px] lg:w-[400px]">
                    Seu projeto nas mãos de quem entende e faz acontecer!
                  </h1>
                </div>
                <div className="md:w-[480px] text-white">
                  <p className="text-[15px] md:text-[16px]">
                    Nascemos em 2016 com o objetivo de atender à crescente
                    demanda por soluções rápidas e eficientes de prototipagem.
                    Com o passar dos anos, e conforme a necessidade dos clientes
                    em acordo com a visão da Protmundi, expandimos nossos
                    serviços para oferecer todas as etapas de fabricação, sempre
                    mantendo o foco na inovação e na excelência.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <div className="w-full relative -top-[-10%] md:-mt-40">
            <div className="w-full absolute -top-[-15%] lg:px-12">
              <Image className="hidden w-full sm:block" alt="" {...heroImg} />
            </div>
            <Container>
              <div className="flex justify-center bg-fixed">
                <Image {...heroBanner} width={930} height={318} alt="banner" />
              </div>
            </Container>
          </div>
        </Section>
        <Section id="voce-encontra">
          <Container className="flex flex-col gap-20">
            <h1 className="text-center text-primary text[22px] md:text-[30px] font-[500]">
              Na Protmundi, você encontra:
            </h1>

            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center gap-28">
                <Image {...img1} alt="" className="hidden md:flex w-1/2" />
                <div className="flex md:flex-col gap-8 text-dark flex-row">
                  <div className="pt-2 h-fit w-[104px]">
                    <Image
                      src={check.src}
                      width={104}
                      height={104}
                      className="w-full md:w-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h1 className="text-[20px] sm:text-[22px] font-[500]">
                      Atendimento personalizado
                    </h1>
                    <p className="text-[16px]">
                      Valorizamos cada cliente e suas necessidades únicas. Nosso
                      compromisso é oferecer um atendimento personalizado,
                      proporcionando soluções sob medida que atendam às
                      expectativas e objetivos específicos de cada projeto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center gap-28">
                <div className="flex md:flex-col gap-8 text-dark flex-row">
                  <div className="pt-2 h-fit w-[104px]">
                    <Image
                      src={check.src}
                      width={104}
                      height={104}
                      className="w-full md:w-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h1 className="text-[22px] font-[500]">
                      Melhor custo-benefício
                    </h1>
                    <p className="text-[16px]">
                      Nossa expertise em prototipagem e produção permite
                      oferecer soluções que combinam alta qualidade com custos
                      competitivos. Trabalhamos para maximizar o valor investido
                      pelos nossos clientes e materializar suas ideias sempre
                      prezando pela melhor relação custo-benefício.
                    </p>
                  </div>
                </div>
                <Image {...img2} alt="" className="hidden md:flex w-1/2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center gap-28">
                <Image {...img3} alt="" className="hidden md:flex w-1/2" />
                <div className="flex md:flex-col gap-8 text-dark flex-row">
                  <div className="pt-2 h-fit w-[104px]">
                    <Image
                      src={check.src}
                      width={104}
                      height={104}
                      className="w-full md:w-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h1 className="text-[22px] font-[500]">
                      Agilidade nas operações
                    </h1>
                    <p className="text-[16px]">
                      Entendemos a importância do tempo no desenvolvimento de
                      novos produtos. Por isso, nossa equipe é altamente
                      capacitada para garantir operações ágeis e entrega rápida,
                      sem comprometer a qualidade e a precisão dos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center gap-28">
                <div className="flex md:flex-col gap-8 text-dark flex-row">
                  <div className="pt-2 h-fit w-[104px]">
                    <Image
                      src={check.src}
                      width={104}
                      height={104}
                      className="w-full md:w-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h1 className="text-[22px] font-[500]">
                      Confidencialidade
                    </h1>
                    <p className="text-[16px]">
                      Prezamos pela segurança das suas ideias e projetos. Por
                      isso, garantimos tratamento interno adequado das
                      informações e conteúdos ou assinaturas de acordos
                      comerciais (NDAs). Este é um pilar de nossa empresa, pois
                      sabemos que a inovação pode representar a sustentabilidade
                      de qualquer negócio e tem alto valor.
                    </p>
                  </div>
                </div>
                <Image {...img4} alt="" className="hidden md:flex w-1/2" />
              </div>
            </div>
          </Container>
        </Section>
        <Section id="setored" className="flex flex-col items-center gap-24">
          <div className="flex flex-col gap-12 sm:gap-24 items-center bg-light_bg sm:max-w-[1300px] mx-auto sm:rounded-tl-[40px] sm:rounded-br-[40px] py-24">
            <div text-center className="text-center">
              <h1 className="text-primary text-[22px] md:text-[30px]">
                Atuação em diversos setores
              </h1>
              <p className="md:text-[16px] text-[15px]">
                Atendemos às demandas dos seguintes mercados:
              </p>
            </div>
            <TopicList
              className="grid w-full md:grid-cols-3 grid-cols-2 gap-4 md:ml-32 px-8"
              topics={setores}
            />
          </div>
          <div className="flex">
            <Link
              href="/solucoes"
              className="px-12 text-[16px] leading-[22px] font-[500] text-center py-2 w-fit rounded-full border-primary text-primary border-[2px] hover:bg-primary hover:text-white hover:shadow-button transition-all"
            >
              Conheça nossas soluções e dê o <br /> próximo passo para o
              sucesso!
            </Link>
          </div>
        </Section>
        <Section
          id="onde-estamos"
          className="min-h-[800px] lg:mb-0 bg-light_bg"
        >
          <Container className="lg:pb-0">
            <div className="flex flex-col py-24 md:py-0 md:flex-row text-dark relative h-full">
              <div className="flex flex-col gap-12 md:gap-6 text-center md:text-start md:w-[380px] absolute md:top-[20%]">
                <div className="flex flex-col gap-10 lg:pt-32">
                  <h1 className="text-primary text[22px] md:text-[30px] font-[500]">
                    Onde estamos
                  </h1>
                  <p className="text-[15px] md:text-[16px] font-[400]">
                    Nossa sede está estrategicamente localizada em Joinville/SC,
                    município que ocupa o primeiro lugar na industrialização do
                    estado e é um importante polo industrial do Brasil. Mas
                    atendemos clientes em todo o país e também no exterior,
                    garantindo ampla cobertura e relacionamento eficaz.
                  </p>
                </div>
                <div className="flex justify-center md:hidden">
                  <Image {...mapaMobile} alt="" />
                </div>
                <Link
                  target="_blank"
                  href="/fale-conosco"
                  className="px-12 text-center z-10 md:mt-10 text-[16px] leading-[22px] font-[500] py-2 w-fit rounded-full border-primary text-primary border-[2px] hover:bg-primary hover:text-white hover:shadow-button transition-all"
                >
                  Agende uma reunião agora mesmo com nossos especialistas!
                </Link>
              </div>
              <div className="justify-center hidden md:block">
                <Image
                  {...mapa}
                  alt=""
                  className="absolute -right-[120px] top-0"
                />
              </div>
            </div>
          </Container>
        </Section>
      </DefaultPageLayout>
    </>
  );
}

const setores = [
  "Engenharia",
  "Produção",
  "Inovação",
  "Sistemistas",
  "Design",
  "Startups",
  "Indústria náutica",
  "Indústria automotiva",
  "Indústria eletrodoméstica",
  "Indústria eletroeletrônica",
  "Indústria médica, hospitalar, odontológica e saúde",
  "Indústria de bebidas e plásticos",
  "Marketing e publicidade",
  "Agronegócio/agricultura",
  "Moveleira",
  "Embalagem",
  "Laboratórios",
  "Metalúrgica",
  "Incubadoras",
  "Universidades",
  "Projetos",
];

async function Block({ align, description, imgUrl, title }: BlockType) {
  return (
    <div
      className={`flex gap-32 items-center ${
        align == "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Image
        width={104}
        height={104}
        src={imgUrl}
        alt=""
        className="hidden md:flex w-1/2"
      />
      <div className="flex md:flex-col gap-4 text-dark flex-row">
        <Image {...check} alt="" />
        <div className="pt-2 h-fit w-[104px]"></div>
        <div className="flex flex-col gap-8">
          <h1 className="text-[22px] font-[500]">{title}</h1>
          <p className="text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
