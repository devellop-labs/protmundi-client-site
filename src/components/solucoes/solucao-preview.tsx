import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Progress from "../progress";
import { fetchMediaById } from "@/services/media";
import InlineSVG from "../inline-svg";
import Link from "next/link";
import { hostname } from "os";

type SolucaoPreviewProps = any & {
  showDescription?: boolean;
  title: string;
  link: string;
  slug: string;
  fields: {
    descricao: string;
    icone_light: number;
    cor_do_preview: string;
  };
};

const SolucaoPreview: React.FC<SolucaoPreviewProps> = ({
  showDescription = true,
  link,
  title,
  slug,
  fields: { descricao, icone_light, cor_do_preview },
}) => {
  const [iconUrl, setIconUrl] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    if (icone_light) {
      setIconUrl(await fetchMediaById(icone_light));
    }
  }

  return (
    <Link
      href={`/solucoes/${slug}`}
      style={{ backgroundColor: cor_do_preview }}
      className={`w-full h-[76px] md:px-[42px] md:h-[110px] sm:px-[18px] sm:h-[90px]  hover:scale-105 transition-transform p-4 text-[16px] ${
        showDescription ? "h-[130px]" : "h-fit"
      } border border-gray-200 rounded-lg shadow-md flex flex-col`}
    >
      <div className="flex items-center gap-4 w-full h-full">
        {iconUrl ? (
          <div className="h-[48px] w-[48px] relative">
            <Image src={iconUrl} color="#ffff" alt={"Ícone " + title} fill />
          </div>
        ) : (
          <Progress />
        )}
        <div className="text-white text-[16px] leading-[24px] w-full">
          <h2 className="font-[600]">{title}</h2>
          {showDescription && <p className="opacity-50">{descricao}</p>}
        </div>
      </div>
    </Link>
  );
};

export default SolucaoPreview;
