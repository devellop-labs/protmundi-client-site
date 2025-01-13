import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "@/contexts/navigation";
import { ChevronRight, XIcon } from "lucide-react";
import logo from "/public/img/logo-protmundi.svg";
import Link from "next/link";
import Image from "next/image";
import OnViewSlideInAnimation from "../animations/on-view-animation";
import { usePathname } from "next/navigation";

const Sidemenu: React.FC = () => {
  const { isSidemenuOpen, pages, toggleSidemenu } = useNavigation();

  const pathname = usePathname();

  return (
    <motion.aside
      className="z-50 w-[85vw] flex flex-col gap-12 h-screen fixed left-0 bg-dark_bg p-6 rounded-r-xl shadow-lg drop-shadow-lg border-r border-r-dark"
      initial={{ x: "-100%" }}
      animate={{ x: isSidemenuOpen ? 0 : "-100%" }}
      transition={{
        type: "spring", // Enable spring animation
        stiffness: 100, // Adjust stiffness for a soft elastic feel
        damping: 20, // Control damping for smooth motion
        duration: 0.8, // Duration to fine-tune the effect
      }}
    >
      <div className="w-full flex justify-between items-center">
        <OnViewSlideInAnimation duration={1}>
          <Image className="w-1/3 pt-2" {...logo} alt="" />
        </OnViewSlideInAnimation>
        <button onClick={toggleSidemenu}>
          <XIcon className="text-white size-[32px]" />
        </button>
      </div>
      <div className="flex flex-col">
        <ul className="flex flex-col text-white w-full">
          {pages.map((page, i) => (
            <OnViewSlideInAnimation
              className="py-1 w-full"
              key={page.url}
              initialX={-200}
              finalX={0}
              delay={Number(`0.${i}`)}
            >
              <div className="flex w-full group transition-all hover:bg-light_bg rounded-md items-center hover:bg-opacity-10">
                <Link
                  href={page.url}
                  className={`cursor-pointer hover:translate-x-8 duration-150 py-2 w-full my-0 transition-transform  ${
                    pathname == page.url && "text-secondary font-[600]"
                  }`}
                >
                  {page.title}
                </Link>
              </div>
            </OnViewSlideInAnimation>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidemenu;
