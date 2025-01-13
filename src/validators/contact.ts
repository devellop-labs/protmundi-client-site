import { z } from "zod";

export const ContactValidator = z.object({
  name: z
    .string({ required_error: "Por favor, informe seu nome" })
    .min(1, "O nome não pode estar vazio"),
  email: z
    .string({
      required_error: "Por favor, informe seu email",
    })
    .email({ message: "Email inválido" }),
  phoneNumber: z
    .string({
      required_error: "Por favor, informe seu número de telefone ou celular",
    })
    .min(1, "Número de telefone ou celular não pode estar vazio"),
  subject: z
    .string({
      required_error: "Por favor, informe o motivo do contato",
    })
    .min(1, "O motivo do contato não pode estar vazio"),
  message: z
    .string({
      required_error:
        "Por favor preencha este campo conforme a descrição acima",
    })
    .min(1, "A mensagem não pode estar vazia"),
  license_terms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos de licença",
  }),
});

export type ContactFormType = z.infer<typeof ContactValidator>;
