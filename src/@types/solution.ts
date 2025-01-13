// types.ts
interface SolutionType {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  title: {
    rendered: string;
  };
  slug: string;
  link: string;
  status: string;
  type: string;
  content: {
    protected: boolean;
    rendered: string;
  };
  acf: {
    descricao: string;
    icone: number;
    galeria: { imagem: number }[];
    cor_do_preview: string;
    icone_light: number;
  };
  featured_media: number;
  guid: {
    rendered: string;
  };
  // Add other fields if needed
}
