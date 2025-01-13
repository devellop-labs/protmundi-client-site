import Section from "@/components/layout/section";
import OQueFazemosComponent from "./component";
import Container from "@/components/layout/container";
import OnViewSlideInAnimation from "@/components/animations/on-view-animation";

export default function OQueFazemosSection() {
  return (
    <Section title="O que fazemos" id="o-que-fazemos" className="w-full">
      <Container className="flex flex-col gap-48">
        <div className="flex flex-col md:flex-row sm:justify-between md:items-center gap-10 md:gap-12">
          <OnViewSlideInAnimation initialX={-200} finalX={0}>
            <h1 className="w-fit md:leading-[60px] text-[34px] leading-[36px] md:text-[60px] text-primary font-[700]">
              O que <br /> fazemos
            </h1>
          </OnViewSlideInAnimation>
          <OnViewSlideInAnimation initialX={200} finalX={0}>
            <p className="lg:w-[730px] sm:w-[700px] w-full text-[15px] sm:text-[16px] text-dark font-[400] lg:leading-[28px]">
              Oferecemos uma ampla gama de serviços de prototipagem, como, por
              exemplo, mockups, protótipos funcionais, impressão 3D, usinagem,
              moldes de injeção e produção em série. Tudo para transformar suas
              ideias em produtos reais.
            </p>
          </OnViewSlideInAnimation>
        </div>
        <OQueFazemosComponent />
      </Container>
    </Section>
  );
}
