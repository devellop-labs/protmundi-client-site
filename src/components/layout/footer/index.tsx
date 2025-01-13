import Link from "next/link";
import logo from "/public/img/logo-protmundi.svg";
import Image from "next/image";
import bgImg from "@/components/layout/footer/img/bg-image.png";
import Container from "../container";
import { useNavigation } from "@/contexts/navigation";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import Divider from "@/components/divider";
import dunsNumber from "/public/img/duns-number.png";
import { Instagram, Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { ImFacebook, ImLinkedin, ImLinkedin2 } from "react-icons/im";

type SocialMedia = {
  url: string;
  name: string;
  icon: React.ReactNode;
};

const socialMedias: SocialMedia[] = [
  {
    name: "Facebook",
    url: "",
    icon: <ImFacebook className="size-[40px] pt-1 pb-0.5" />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <ImLinkedin2 className="size-[40px]" />,
  },
  {
    name: "Instagram",
    url: "",
    icon: <Instagram className="size-[40px] pt-1 pb-0.5" />,
  },
];

export default function Footer() {
  const { pages, currentPage } = useNavigation();

  return (
    <footer className={`relative text-white pb-4`}>
      <Image
        {...bgImg}
        alt=""
        className="bottom-0 hidden pb-12 lg:block w-full absolute object-cover"
      />
      <div className="absolute -bottom-12 min-h-[300px] bg-dark_bg left-0 right-0 pt-24 lg:pt-12">
        <Container className="flex flex-col pb-6 justify-between h-full gap-12">
          <div className="flex gap-12 lg:gap-0 flex-col lg:flex-row justify-between w-full">
            <div className="pb-12 flex w-2/3 flex-col lg:flex-row lg:items-center gap-20 lg:gap-24">
              <div className="w-fit justify-start relative">
                <Image {...logo} alt="" className="w-[151px] lg:w-[240px]" />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex w-full flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 font-bold">
                  {pages.map(
                    (p) =>
                      !["/politica-de-privacidade/", "/"].includes(p.url) && (
                        <Link
                          className={`${
                            currentPage == p &&
                            "text-[#09a5ed] drop-shadow-lg transition-colors"
                          } hover:text-[#09a5ed]`}
                          href={p.url}
                        >
                          {p.title}
                        </Link>
                      )
                  )}
                </div>
                <div className="lg:hidden absolute right-12">
                  <Image
                    {...dunsNumber}
                    alt=""
                    className="w-[120px] sm:w-[200px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-24 lg:items-center">
              <div className="hidden lg:block">
                <Image {...dunsNumber} alt="" />
              </div>
              <div className="w-fit flex flex-col gap-4">
                <p className="font-[700] text-[14px] lg:text-end">
                  Siga nossas redes
                </p>
                <div className="flex items-center lg:gap-4">
                  {socialMedias.map((sm) => (
                    <Link
                      href={sm.url}
                      className="group hover:text-white text-primary transition-colors"
                    >
                      {sm.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <Divider className="bg-[#285478] h-[1px]" />
            <div className="w-full flex flex-col items-center lg:flex-row lg:items-start gap-6 lg:gap-0 justify-between text-[12px] text-[#3c78aa]">
              <p>
                © 2024 Protmundi Solução em Fabricação. Todos direitos
                reservados.
              </p>
              <Link href="/politica-de-privacidade">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
