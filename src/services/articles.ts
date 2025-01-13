import api from "./api";

type QueryParams = {
  page?: number;
  per_page?: number;
  search?: string;
  slug?: string;
  category?: string;
  meta_key?: string;
  meta_value?: "true" | "false";
};

type QueryResponse = {};

type GetArticlesResponse = {
  totalCount: number;
  totalPages: number;
  articles: Article[];
};

export async function getArticles({
  params = {
    per_page: 6,
    page: 1,
  },
}: {
  params: QueryParams;
}): Promise<GetArticlesResponse> {
  try {
    const response = await api.get("/posts", {
      params: {
        ...params,
        categories: params.category,
      },
    });
    const data: Article[] = await response.data;

    return {
      articles: data,
      totalCount: Number(response.headers["X-WP-Total"]),
      totalPages: Number(response.headers["X-WP-TotalPages"]),
    };
  } catch (error) {
    throw {
      error: "An error occurred",
      message: JSON.stringify(error),
    };
  }
}

export async function getArticleBySlug({ slug }: { slug: string }) {
  const response = await api.get<Article[]>(`/posts`, {
    params: {
      slug,
    },
  });

  return response.data[0];
}

export const fetchRelatedArticlesByCategories = async (
  categories: number[]
): Promise<Article[]> => {
  const response = await api.get<Article[]>(`/posts`, {
    params: {
      categories: categories.join(","),
      per_page: 3,
    },
  });
  return response.data;
};

export const fetchFeaturedArticles = async ({
  per_page = 6,
  page = 1,
}: {
  page?: number;
  per_page?: number;
}) => {
  const response = await api.get<{ data: Article[] }>("/posts", {
    params: {
      per_page,
      page,
    },
  });

  const featuredArticles = response.data.data.filter(
    (article) => article.acf && article.acf.em_destaque === true
  );

  console.log(response);

  return featuredArticles;
};
