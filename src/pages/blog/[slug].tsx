import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getArticleBySlug } from "@/services/articles";

import ArticlePageComponent from "@/components/pages/blog/single-component";
import Loading from "@/pages/loading";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState<Article>();
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    getArticleBySlug({ slug: slug as string })
      .then((data) => {
        if (data) {
          setArticle(data);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (error) {
    return <div>Post not found</div>;
  }

  if (!article) {
    return <Loading />;
  }

  return <ArticlePageComponent article={article} />;
}
