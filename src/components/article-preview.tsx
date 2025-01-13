import Image from "next/image";
import Link from "next/link";

import { fetchMediaById } from "@/services/media";
import { useCallback, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ImageOff } from "lucide-react";
import Loading from "@/pages/loading";

type Props = {
  article: Article;
};

export default function ArticlePreview({ article }: Props) {
  const [featuredImg, setFeaturedImg] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticle = useCallback(async () => {
    await fetchMediaById(article.featured_media).then((data) => {
      setFeaturedImg(data);
      setIsLoading(false);
    });
  }, [article]);

  useEffect(() => {
    fetchArticle();
  }, [article]);

  return (
    <Link
      className="text-primary group justify-center items-center gap-1 font-[700] hover:outline-secondary focus-within:outline-secondary rounded-[20px] outline-[4px] hover:outline hover:text-primary_hover outline-none focus-within:outline"
      href={`/blog/${article.slug}`}
    >
      <div className="rounded-[20px] bg-white sm:w-auto h-[500px] flex flex-col justify-between relative overflow-clip hover:shadow-sm ">
        <div className="relative h-[55%] overflow-visible overflow-y-clip">
          {!isLoading && featuredImg ? (
            <Image
              src={featuredImg}
              fill
              alt={""}
              className="object-cover group-focus-within:scale-110 group-hover:scale-110 duration-300"
            />
          ) : !featuredImg && !isLoading ? (
            <div className="w-full h-full flex justify-center items-center bg-slate-300">
              <ImageOff className="text-white size-[48px] group-focus-within:scale-125 group-hover:scale-125 duration-300 transition-transform ease-out" />
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div className="flex flex-col p-8 h-[45%] justify-between">
          <div className="w-full flex flex-col font-[700] text-dark leading-[30px]">
            {article.title.rendered}
          </div>
          <div>
            <a className=" text-primary flex items-center gap-1 font-[700] group-hover:text-primary_hover">
              <span>Saiba mais</span>
              <ChevronRight className="size-[18px] pb-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
