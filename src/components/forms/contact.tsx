import Input from "../inputs/input";
import Button from "../button";
import Checkbox from "../inputs/checkbox";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ContactFormType, ContactValidator } from "@/validators/contact";
import { ChangeEvent, useState } from "react";

export default function ContactForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const contactForm = useForm<ContactFormType>({
    resolver: zodResolver(ContactValidator),
    defaultValues: {
      email: "",
      name: "",
      phoneNumber: "",
      subject: "",
      message: "",
      license_terms: false,
    },
  });

  async function submit(data: ContactFormType) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("license_terms", data.license_terms.toString());

    if (file) {
      formData.append("attachment", file);
    }

    try {
      const response = await fetch(
        "https://seusite.com/wp-json/contact-form/v1/send",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
      } else {
        console.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro durante a submissão do formulário", error);
    }
  }

  return (
    <FormProvider {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(submit)}
        className={`w-full flex flex-col gap-12 z-10`}
      >
        <div className="flex flex-col gap-4">
          <Input name="name" label="Nome" />
          <Input name="email" label="E-mail" />
          <Input name="phoneNumber" label="Telefone" />
          <Input name="subject" label="Assunto" />
          <Input
            rows={2}
            label="O que você precisa?"
            description="Descreva o projeto, a quantidade de peças, os materiais desejados e os dados da sua empresa"
            name="message"
          />

          {/* Estilo do botão de upload ajustado */}
          <label htmlFor="attachment" className="font-medium text-gray-700">
            Anexe aqui seu projeto
            <span className="block text-sm text-gray-500">(.stp ou .jpg)</span>
          </label>
          <div className="flex items-center gap-2">
            <label
              htmlFor="attachment"
              className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-primary border-[2px] rounded-full border-primary cursor-pointer hover:bg-blue-100"
            >
              Adicionar arquivo
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
              accept=".stp,.jpg,.jpeg,.png"
              className="hidden" // Oculta o campo de input de arquivo
            />
            {/* Exibe o nome do arquivo, se selecionado */}
            {file && <span className="text-sm text-gray-700">{file.name}</span>}
          </div>
        </div>
        <div className="flex justify-between items-end">
          <Checkbox
            name="license_terms"
            label="Li e concordo com a Política de Privacidade"
          />
          <Button type="submit" className="bg-primary text-white px-24">
            Enviar
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
