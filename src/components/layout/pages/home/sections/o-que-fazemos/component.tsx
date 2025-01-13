import OnViewAnimation from "@/components/animations/on-view-animation";
import Image, { StaticImageData } from "next/image";
import img1 from "/public/img/mockup-img.png";
import img2 from "/public/img/prototipo-tecnico-img.png";
import img3 from "/public/img/lote-pecas-img.png";
import img4 from "/public/img/producao-img.png";

import { Carousel } from "@/components/carousel";

type ServiceType = {
  name: string;
  img: StaticImageData;
  category: string;
  shadowed?: boolean;
};

const services: ServiceType[] = [
  {
    category: "Visual",
    img: img1,
    name: "Mockup",
    shadowed: true,
  },
  {
    category: "Funcional",
    img: img2,
    name: "Protótipo técnico",
    shadowed: true,
  },
  {
    category: "Baixo volume",
    img: img3,
    name: "Lote de peças",
    shadowed: true,
  },
  {
    category: "Alto volume",
    img: img4,
    name: "Produção",
  },
];

export default function OQueFazemosComponent() {
  return (
    <>
      <div className="w-full grid-cols-4 gap-4 hidden lg:grid">
        {services.map(({ category, img, name, shadowed = false }, i) => (
          <OnViewAnimation duration={1}>
            <div className="flex items-center w-full gap-4">
              <div className="relative flex flex-col justify-between text-center rounded-lg bg-light_bg w-full min-h-[180px]">
                <div className="absolute -top-24 flex justify-center w-full h-full">
                  <Image
                    {...img}
                    alt={name}
                    className={`${shadowed && "drop-shadow-2xl"}`}
                  />
                </div>
                <div className="absolute flex flex-col bottom-5 w-full gap-1">
                  <h1 className="text-dark text-[22px] font-[700]">{name}</h1>
                  <p className="text-dark text-[16px] font-[400]">{category}</p>
                </div>
              </div>
              {services.length > i + 1 && (
                <div className="flex justify-center w-fit">
                  <Image src="/img/seta.png" width={20} height={30} alt="" />
                </div>
              )}
            </div>
          </OnViewAnimation>
        ))}
      </div>
      <div className="flex justify-center items-center lg:hidden pb-24">
        <Carousel
          responsive={{ default: 1, sm: 2, md: 2, lg: 3 }}
          indicators
          className="w-full"
        >
          {services.map(({ category, img, name, shadowed = false }, i) => (
            <div className="relative text-center rounded-[20px] bg-light_bg w-[240px] sm:w-[272px] sm:h-[202px] h-[180px] mx-auto">
              <Image
                {...img}
                alt=""
                className="-top-[50%] left-0 right-0 mx-auto absolute"
              />
              <div className="absolute bottom-5 w-full gap-4">
                <h1 className="text-dark text-[22px] font-[700]">{name}</h1>
                <p className="text-dark text-[16px] font-[400]">{category}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
