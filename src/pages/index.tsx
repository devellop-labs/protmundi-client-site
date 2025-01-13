import banners from "@/data/home/banners";
import Section from "@/components/layout/section";
import BannerSlider from "@/components/layout/banner-slider";
import QuemSomosSection from "@/components/layout/pages/home/sections/quem-somos";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import OQueFazemosSection from "@/components/layout/pages/home/sections/o-que-fazemos";
import NossosClientesSection from "@/components/layout/pages/home/sections/nossos-clientes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protmundi - Home",
};

export default function Home() {
  return (
    <DefaultPageLayout
      translucentNav
      className="flex flex-col md:gap-24 gap-16 lg:gap-24"
    >
      <Section id="hero" className="relative">
        <BannerSlider banners={banners} />
      </Section>
      <OQueFazemosSection />
      <QuemSomosSection />
      <NossosClientesSection />
    </DefaultPageLayout>
  );
}
