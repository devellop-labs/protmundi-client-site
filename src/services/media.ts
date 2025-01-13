import api from "./api";

export async function fetchMediaById(id: number): Promise<string> {
  const res = await api.get<{ source_url: string }>(`/media/${id}`);
  if (!res.data.source_url) throw {};
  return res.data.source_url;
}
