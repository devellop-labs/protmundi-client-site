import Container from "@/components/layout/container";
import DefaultPageLayout from "@/components/layout/pages/default-page";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <DefaultPageLayout className="pt-64">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-[126px] leading-none font-[700] text-primary">
                404
              </h1>
            </div>
            <div>
              <p className="text-dark text-[32px] font-[700] leading-[42px]">
                Página não encontrada
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center">
            <p>A página que você está procurando não existe nesse site.</p>
            <Link
              href="/"
              className="border-2 border-primary rounded-full px-8 py-3 text-primary hover:bg-primary hover:shadow-button transition-all hover:text-white"
            >
              Principal
            </Link>
          </div>
        </div>
      </Container>
    </DefaultPageLayout>
  );
}
