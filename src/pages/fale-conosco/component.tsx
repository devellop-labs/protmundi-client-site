import Divider from "@/components/divider";
import ContactForm from "@/components/forms/contact";
import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Section from "@/components/layout/section";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const whatsapps = ["(47) 98408-3631", "(47) 99135-4884"];

export default function FaleConoscoPageComponent() {
  function transformPhoneNumber(phoneNumber: string): string {
    return phoneNumber.replace(/\D/g, "");
  }

  return (
    <DefaultPageLayout className="pt-36 flex flex-col">
      <Section id="1" className="pb-48">
        <Container className="flex flex-col md:flex-row justify-between gap-32">
          <div className="flex flex-col gap-12 w-full md:w-[60%]">
            <h1 className="text-[32px] font-[600] text-primary">
              Fale Conosco
            </h1>
            <div className="flex flex-col gap-2">
              <h4 className="text-[18px] font-[600]">
                Vamos iniciar seu projeto?
              </h4>
              <p className="text-[16px] font-[500]">
                Para esclarecer dúvidas ou solicitar um orçamento, preencha o
                formulário abaixo:
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="bg-[#f4f9fc] px-12 pb-32 pt-24 flex flex-col h-fit w-full md:w-[30%] rounded-[20px] gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-[18px] font-[600]">
                Se preferir, chame um especialista no WhatsApp!
              </h1>
              <div className="flex flex-col gap-3">
                {whatsapps.map((w) => {
                  const link = `https://wa.me/${transformPhoneNumber(w)}`;
                  return (
                    <div className="flex items-center gap-4 text-primary">
                      <BsWhatsapp className="size-[24px]" />
                      <Link href={`${link}`} className="font-[700] text-[18px]">
                        {w}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <Divider className="my-3 bg-[#b4d4e2]" />
            <div className="flex flex-col gap-1 text-dark">
              <h1 className="text-[18px] font-[600]">Telefone</h1>
              <p>(47) 3422-8798</p>
            </div>
            <Divider className="my-3 bg-[#b4d4e2]" />
            <div className="flex flex-col gap-1 text-dark">
              <h1 className="text-[18px] font-[600]">Endereço</h1>
              <p>Rua Inambu, 350 - Costa e Silva</p>
              <p>Joinville/SC</p>
              <p>CEP: 89220-001</p>
              <Link
                target="_blank"
                href={`https://maps.app.goo.gl/52cBq8U2v5MZoin66`}
                className="mt-4 border-primary border-[2px] rounded-full w-fit px-8 py-2 text-primary flex gap-1 items-center hover:bg-primary hover:text-white transition-all hover:shadow-button"
              >
                Ver mapa
                <ChevronRight className="size-[12px]" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </DefaultPageLayout>
  );
}
