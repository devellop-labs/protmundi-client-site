import api from "./api";

type QueryParams = {
  page?: number;
  per_page?: number;
  search?: string;
  slug?: string;
  category?: string;
};

type GetClientsResponse = {
  totalCount: number;
  totalPages: number;
  clientes: { name: string; logoUrl: string }[];
};

export async function getClients({
  params = {
    per_page: 6,
  },
}: {
  params: QueryParams;
}): Promise<GetClientsResponse> {
  try {
    const response = await api.get("/clientes", {
      params: {
        ...params,
      },
    });
    const data: { acf: { name: string; logo: string } }[] = await response.data;
    let clientes: ClientType[] = [];
    data.map(async ({ acf: { logo, name } }) => {
      clientes.push({
        logoUrl: logo,
        name,
      });
    });

    return {
      clientes,
      totalCount: Number(response.headers["X-WP-Total"]),
      totalPages: Number(response.headers["X-WP-TotalPages"]),
    };
  } catch (error) {
    throw {
      error: "An error occurred",
    };
  }
}
