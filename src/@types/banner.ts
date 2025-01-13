import { StaticImageData } from "next/image";

export type BannerType = {
  title: string;
  bg_img: StaticImageData;
  img: StaticImageData;
  content: string;
  button: {
    color: "primary" | "secondary";
    href: string;
    label: string;
  };
};
