import { BannerType } from "@/@types/banner";

import bg1 from "/public/img/hero-banner-bg-1.png";
import bg2 from "/public/img/hero-banner-bg-2.png";
import img1 from "/public/img/hero-banner-1-img.png";
import img2 from "/public/img/hero-banner-2-img.png";

const banners: BannerType[] = [
  {
    bg_img: bg1,
    button: {
      color: "primary",
      href: "",
      label: "Veja como podemos ajudar você",
    },
    content: `
        Materialize suas
        ideias com nossas
        soluções completas
        de fabricação!
    `,
    img: img1,
    title: "Da prototipagem à produção ",
  },
  {
    bg_img: bg2,
    button: {
      color: "primary",
      href: "",
      label: "Veja como podemos ajudar você",
    },
    content: `
        Transformamos suas
        ideias em moldes rápidos
        e eficientes com o melhor
        custo-benefício
        do mercado!
    `,
    img: img2,
    title: "Peças injetadas",
  },
];

export default banners;
