import { z } from "zod";

export const CommentValidator = z.object({
  author_name: z.string().nonempty({ message: "Nome é obrigatório" }),
  author_email: z
    .string({ required_error: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  content: z.string().nonempty({ message: "Mensagem é obrigatório" }),
});

export type CommentFormInputs = z.infer<typeof CommentValidator>;
