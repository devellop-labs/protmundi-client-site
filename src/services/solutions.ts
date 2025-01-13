import api from "./api";

type GetSolutionsResponse = {
  totalPages: number;
  totalCount: number;
  solutions: SolutionType[];
};

export async function fetchSolutions(params?: {
  search?: string;
}): Promise<GetSolutionsResponse> {
  const res = await api.get<SolutionType[]>("/solucoes", {
    params,
  });
  return {
    solutions: res.data,
    totalCount: res.headers["X-WP-Total"],
    totalPages: res.headers["X-WP-TotalPages"],
  };
}

export async function getSolutionBySlug({ slug }: { slug: string }) {
  const response = await api.get<SolutionType[]>(`/solucoes`, {
    params: {
      slug,
    },
  });

  return response.data[0];
}
