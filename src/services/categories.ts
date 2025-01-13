import api from "./api";

export async function fetchCategories() {
  try {
    const response = await api.get(`/categories`);
    return response.data;
  } catch (error) {
    throw {
      error: "Nenhuma categoria foi encontrada",
    };
  }
}

export async function getCategoryById(id: number) {
  try {
    const res = await api.get(`/categories/${id}`);
    return res.data;
  } catch (error) {
    throw {
      error: "Erro ao encontrar categoria",
    };
  }
}
