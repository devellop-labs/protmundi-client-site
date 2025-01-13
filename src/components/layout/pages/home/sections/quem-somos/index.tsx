import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Image from "next/image";
import quemSomosImg from "/public/img/quem-somos-section-img.png";
import Button from "@/components/button";
import manWithLogoImg from "/public/img/protmundi-man-with-logo.png";
import OnViewSlideInAnimation from "@/components/animations/on-view-animation";
import check from "/public/img/check.png";
import numbersBg from "/public/img/numbers-bg.png";

import { Carousel } from "@/components/carousel";
import Link from "next/link";

export default function QuemSomosSection() {
  return (
    <Section id="quem-somos" className="flex flex-col gap-24 md:gap-0">
      <Container className="md:pb-[64px]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex pb-12 flex-col gap-10 md:w-5/12 lg:pr-6">
            <OnViewSlideInAnimation initialX={-200} finalX={0} delay={0.1}>
              <h1 className="text-[34px] leading-[36px] md:leading-[60px] md:text-[60px] text-primary font-[700]">
                Quem <br /> Somos
              </h1>
            </OnViewSlideInAnimation>

            <OnViewSlideInAnimation initialX={-200} finalX={0} delay={0.3}>
              <p className=" text-dark text-[16px] font-[400] leading-[28px]">
                A Protmundi é especialista em buscar soluções de fabricação
                específicas para nossos clientes, entregando produtos e serviços
                de alta qualidade com baixo investimento e prazo: prototipagem e
                produção em série. Nosso objetivo é proporcionar uma jornada
                eficiente e sem complicações de ponta a ponta, do design ao
                protótipo e à produção. Com uma equipe de engenharia altamente
                capacitada, garantimos sigilo, agilidade, qualidade e
                atendimento personalizado para cada projeto, sempre focando na
                inovação e na excelência.
              </p>
            </OnViewSlideInAnimation>
            <OnViewSlideInAnimation
              initialY={200}
              finalY={0}
              delay={0.3}
              className="lg:pt-8"
            >
              <Link
                href="/quem-somos"
                className="border-[2px] rounded-full px-8 transition-all hover:shadow-button py-2 text-primary border-primary hover:bg-primary hover:text-white"
              >
                Saiba mais
              </Link>
            </OnViewSlideInAnimation>
          </div>
          <div className="flex w-full justify-center md:justify-end md:items-end sm:w-1/2 md:w-1/2 lg:w-6/12">
            <div className="w-[75vw] sm:w-auto">
              <OnViewSlideInAnimation initialX={200} finalX={0}>
                <Image {...quemSomosImg} alt="" />
              </OnViewSlideInAnimation>
            </div>
          </div>
        </div>
      </Container>
      <Container className="relative pt-24 sm:pt-0">
        <div className="w-full md:h-[690px] flex flex-col gap-24 items-center justify-between font-[500] text-primary">
          <h1 className="text-primary text-[22px] font-semibold md:text-[30px] text-center">
            Por que escolher a Protmundi
          </h1>
          <div className="flex gap-12 flex-col md:flex-row h-full">
            <div className="lg:w-1/3">
              <OnViewSlideInAnimation initialX={-200} finalX={0} delay={0.3}>
                <div className="h-full flex flex-col gap-12 sm:justify-center md:justify-between text-start md:text-end justify-end">
                  {firstBlockTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex gap-6 lg:gap-2 lg:flex-col lg:items-end h-fit w-full"
                    >
                      <div>
                        <Image
                          {...check}
                          alt=""
                          className="text-secondary w-[28px]"
                        />
                      </div>
                      <div className="w-[89%] lg:text-end">
                        <p className="font-[500] text-dark text[35px] sm:text-[22px]">
                          {topic.title}
                        </p>
                        <p className="font-[400] text-dark text-[15px] sm:text-[16px]">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </OnViewSlideInAnimation>
            </div>
            <div className="hidden md:flex items-end relative self-end">
              <OnViewSlideInAnimation duration={1}>
                <Image src={manWithLogoImg} alt="" />
              </OnViewSlideInAnimation>
            </div>
            <div className="lg:w-1/3">
              <OnViewSlideInAnimation initialX={-200} finalX={0} delay={0.3}>
                <div className="h-full flex flex-col gap-6 sm:justify-center md:justify-between text-start md:text-end justify-end">
                  {secondBlockTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex gap-6 lg:gap-2 lg:flex-col lg:items-start h-full w-full"
                    >
                      <div>
                        <Image
                          {...check}
                          alt=""
                          className="text-secondary w-[28px]"
                        />
                      </div>
                      <div className="text-start w-[90%]">
                        <p className="font-[500] text-dark text[35px] sm:text-[22px]">
                          {topic.title}
                        </p>
                        <p className="font-[400] text-dark text-[15px] sm:text-[16px]">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </OnViewSlideInAnimation>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full md:h-fit h-[455px] flex pb-[480px] relative">
        <Image
          alt=""
          className="w-full h-full object-cover object-center inset-80 absolute top-0 z-0"
          src={numbersBg.src}
          fill
        />
        <Container
          className={`flex flex-col z-10 justify-center items-center w-full gap-10 absolute left-0 right-0`}
        >
          <div className="flex flex-col gap-4 items-center">
            <div>
              <h1 className="text-primary text-[22px] sm:text-[30px] font-[500]">
                Histórico comprovado
              </h1>
            </div>
            <div>
              <p className="text-white text-center sm:text-start text-[15px] sm:text-[16px] font-[400]">
                Resultados que falam por si no Brasil e no exterior.
              </p>
            </div>
          </div>

          <div className="hidden md:flex w-full justify-between items-end text-white">
            <OnViewSlideInAnimation initialY={200} finalY={0} delay={0.1}>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-[400]">Desde</p>
                <p className="text-[60px] leading-[42px]">2016</p>
                <p className="text-[16px]">sendo referência no segmento</p>
              </div>
            </OnViewSlideInAnimation>
            <OnViewSlideInAnimation initialY={200} finalY={0} delay={0.2}>
              <div className="flex flex-col gap-4">
                <p className="text-[60px] leading-[42px]">+600</p>
                <p className="text-[16px]">clientes satisfeitos</p>
              </div>
            </OnViewSlideInAnimation>
            <OnViewSlideInAnimation initialY={200} finalY={0} delay={0.3}>
              <div className="flex flex-col gap-4">
                <p className="text-[60px] leading-[42px]">+2.500</p>
                <p className="text-[16px]">projetos entregues</p>
              </div>
            </OnViewSlideInAnimation>
            <OnViewSlideInAnimation initialY={200} finalY={0} delay={0.4}>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-[400]text-white">
                  Profissionais com
                </p>
                <p className="text-[60px] leading-[42px]">+30</p>
                <p className="text-[16px]">anos de experiência na área</p>
              </div>
            </OnViewSlideInAnimation>
          </div>
          <div className="w-full md:hidden">
            <Carousel
              autoplay
              indicators
              dotsClass="-bottom-12"
              className=" text-white text-center"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-[400]">Desde</p>
                <p className="text-[60px] leading-[42px]">2016</p>
                <p className="text-[16px]">sendo referência no segmento</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[60px] leading-[42px]">+600</p>
                <p className="text-[16px]">clientes satisfeitos</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[60px] leading-[42px]">+2.500</p>
                <p className="text-[16px]">projetos entregues</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-[400]text-white">
                  Profissionais com
                </p>
                <p className="text-[60px] leading-[42px]">+30</p>
                <p className="text-[16px]">anos de experiência na área</p>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    </Section>
  );
}

const firstBlockTopics: Topic[] = [
  {
    title: "Experiência e expertise",
    description:
      "Conhecimento de projeto que proporciona assertividade para a produção, evitando retrabalho.",
  },
  {
    title: "Atendimento personalizado",
    description: "Serviços sob medida para você.",
  },
  {
    title: "Melhor custo-benefício",
    description: "Qualidade que cabe no seu orçamento.",
  },
];

const secondBlockTopics: Topic[] = [
  {
    title: "Confidencialidade",
    description: "Segurança para sua ideia e/ou projeto.",
  },
  {
    title: "Inovação constante",
    description: "Tecnologia avançada a cada passo.",
  },
  {
    title: "Agilidade nas operações",
    description: "Rapidez que faz a diferença.",
  },
  {
    title: "Soluções completas",
    description: "Tudo o que você precisa em um só lugar.",
  },
];

type Topic = {
  title: string;
  description: string;
};
