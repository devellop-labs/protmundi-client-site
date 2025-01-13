import { useNavigation } from "@/contexts/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  className?: string;
  translucentNav?: boolean;
};

export default function DefaultPageLayout({
  children,
  className,
  translucentNav = false,
}: Props) {
  const { setTranslucentHeader } = useNavigation();

  setTranslucentHeader(translucentNav);

  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }} // Começa abaixo e invisível
        animate={{ opacity: 1 }} // Anima para o centro e visível
        exit={{ opacity: 0 }} // Sai para cima e invisível
        transition={{ duration: 0.8 }} // Duração da transição
        className={
          "bg-default_bg flex flex-col min-h-screen w-screen overflow-clip text-dark pb-[620px] lg:pb-[240px] " +
          className
        }
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
