import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "./container";
import OnViewSlideInAnimation from "../animations/on-view-animation";
import Button from "../button";
import Link from "next/link";

import { Carousel } from "../carousel";

type BannerType = {
  bg_img: StaticImageData;
  button: {
    href: string;
    label: string;
  };
  content: string;
  img: StaticImageData;
  title: string;
};

type Props = {
  banners: BannerType[];
};

export default function BannerSlider({ banners }: Props) {
  return (
    <Carousel
      dotsClass="bottom-6"
      autoplay
      className="h-full w-full absolute top-0 md:rounded-br-[440px] lg:rounded-br-[500px] overflow-clip"
    >
      {banners.map(({ bg_img, button, content, img, title }, i) => (
        <div
          key={i}
          className="relative w-full h-[720px] sm:h-[572px] md:h-[694px] lg:h-[800px] overflow-hidden"
        >
          <Image
            src={bg_img.src}
            alt={title}
            layout="fill"
            className="object-cover lg:object-fill absolute -z-10"
          />

          <Container>
            <div className="relative px-8 flex flex-col items-center justify-center text-center sm:text-left sm:items-center lg:items-start sm:justify-between sm:flex-row md:px-0 sm:gap-24 h-full">
              <div className="flex w-full flex-col justify-center h-full items-center sm:items-start sm:w-[344px] sm:gap-6 md:w-[540px]">
                <div className="flex flex-col justify-center items-center sm:items-start gap-8 sm:gap-16">
                  <div className="flex flex-col gap-2 lg:gap-6">
                    <OnViewSlideInAnimation>
                      <h2 className="text-primary font-semibold text-lg md:text-xl lg:text-[22px]">
                        {title}
                      </h2>
                    </OnViewSlideInAnimation>
                    <OnViewSlideInAnimation
                      initialX={-200}
                      finalX={0}
                      delay={0.1}
                    >
                      <p className="text-white text-[24px] sm:text-[26px] md:text-[40px] font-[600] leading-[28px] md:leading-[50px]">
                        {content}
                      </p>
                    </OnViewSlideInAnimation>
                  </div>
                  <div className="sm:hidden flex justify-center">
                    <Image
                      {...img}
                      alt=""
                      className="h-[200px] w-auto aspect-auto"
                    />
                  </div>
                  <Link
                    href={"/solucoes"}
                    className="md:flex w-fit hover:bg-primary text-white border-white py-2 px-8 border-[2px] rounded-full transition-all hover:shadow-button font-[500]"
                  >
                    {button.label}
                  </Link>
                </div>
              </div>
              <div className="sm:flex flex-col hidden">
                <OnViewSlideInAnimation
                  className="absolute right-0 bottom-[10%] sm:bottom-32 md:bottom-[14%]"
                  initialY={0}
                  finalX={0}
                  delay={0.5}
                  initialX={200}
                  finalY={0}
                >
                  <Image
                    {...img}
                    alt=""
                    className="hidden sm:block w-full sm:w-[314px] md:w-[420px] lg:w-[638px]"
                  />
                </OnViewSlideInAnimation>
                <OnViewSlideInAnimation
                  className="flex w-full sm:hidden"
                  delay={0.2}
                  initialY={200}
                  finalY={0}
                >
                  <Button>{button.label}</Button>
                </OnViewSlideInAnimation>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </Carousel>
  );
}
