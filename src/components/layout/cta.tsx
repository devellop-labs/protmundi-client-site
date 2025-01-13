import Image from "next/image";
import Container from "./container";
import rectangleBanner from "/public/img/cta-background.png";
import Link from "next/link";

type Props = {
  title: string | React.ReactNode;
  subtitle?: string;
  href: string;
  actionTitle: string;
  external?: boolean;
  className?: string;
};

export default function CTA({
  actionTitle,
  href,
  title,
  external = false,
  subtitle,
  className,
}: Props) {
  return (
    <Container
      className={`z-10 h-[310px] sm:h-[164px] relative w-full px-4 left-0 right-0 rounded-tl-[40px] rounded-br-[40px] overflow-clip ${className}`}
    >
      <Image
        src={rectangleBanner.src}
        fill
        className="object-center object-cover"
        alt=""
      />
      <div className="absolute w-full flex flex-col md:flex-row items-center md:justify-between justify-center px-12 md:px-32 h-full gap-12 md:gap-32">
        <div className="flex flex-col gap-2 text-center md:text-start text-white font-[500]">
          <h1 className="text-[30px] leading-[38px] text-center">{title}</h1>
          {subtitle && (
            <p className="text-dark md:text-[16px] font-[400] text-[15px]">
              {subtitle}
            </p>
          )}
        </div>
        <Link
          target={external ? "_blank" : "_self"}
          href={href}
          className="text-white bg-opacity-[0.522] border-[2px] border-white bg-primary hover:bg-white hover:text-primary py-3 px-14 rounded-full transition-all hover:shadow-button"
        >
          {actionTitle}
        </Link>
      </div>
    </Container>
  );
}
