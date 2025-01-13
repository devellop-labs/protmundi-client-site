import logo from "/public/img/logo-protmundi.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, Search, SearchIcon } from "lucide-react";
import { useNavigation } from "@/contexts/navigation";
import { AnimatePresence, useScroll } from "framer-motion";
import { useLocalStorage } from "usehooks-ts";
import { GoSearch } from "react-icons/go";
import CategoriesDropdown from "../categories-dropdown";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import _ from "lodash";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams ?? undefined);
  const category = Number(searchParams?.get("category") ?? undefined);

  function onCategoryChange(id: number) {
    newParams.set("category", id.toString());
    router.push(`/search?${newParams}`);
  }

  // Debounce the search term handler to delay execution
  const debouncedSearch = useCallback(
    _.debounce((value) => {
      router.push(`/search?search=${encodeURIComponent(value)}`);
    }, 500), // 500ms delay
    [pathname, router]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value); // Use the debounced version
  };

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [mode, setMode] = useLocalStorage<"blog" | "website">(
    "settings.navbar.mode",
    "blog"
  );
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current?.focus();
    }
  }, [isSearchVisible]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { pages, isSidemenuOpen, toggleSidemenu, isTranslucentHeader } =
    useNavigation();

  useEffect(() => {
    if (pathname)
      if (["/blog", "/search"].some((s) => pathname.includes(s))) {
        setMode("blog");
      } else {
        setMode("website");
      }
  }, [pathname]);

  const { scrollY } = useScroll();

  scrollY.on("change", (value) => setScrollPosition(value));

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 0 }} // Começa abaixo e invisível
        animate={{ opacity: 1 }} // Anima para o centro e visível
        exit={{ opacity: 0 }}
        className={`fixed text-white ${
          !isTranslucentHeader && "bg-dark_bg"
        } transition-all z-20 top-0 w-full flex items-center justify-between gap-2 py-4 px-6 md:px-20 ${
          scrollPosition > 10 && "bg-dark_bg shadow-xl"
        }`}
      >
        <div className={`w-full items-center gap-4 flex justify-between`}>
          <Link href="/">
            <Image
              {...logo}
              width={220}
              className="pb-2 w-[169px] sm:w-[174px] md:w-[220px]"
              alt="Logo"
            />
          </Link>
          {mode == "website" ? (
            <>
              <div
                className={`justify-center md:flex hidden items-center gap-8`}
              >
                {pages.map(
                  ({ title, url, description, icon, hidden }) =>
                    !hidden && (
                      <Link
                        className="text-[15px] font-[500] hover:text-[#09a5ed] semibold"
                        href={url}
                        key={title}
                      >
                        {title.toUpperCase()}
                      </Link>
                    )
                )}
              </div>
              <Link
                href="/fale-conosco"
                className="hidden md:block border-[2px] border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all hover:shadow-button"
              >
                FALE CONOSCO
              </Link>
            </>
          ) : (
            <div
              className={`gap-12 w-full justify-between flex items-center md:flex hidden"
      }`}
            >
              <div className="flex gap-4">
                <div className="flex items-center gap-24">
                  <Link
                    href="/blog"
                    className="text-[32px] text-primary font-[500]"
                  >
                    Blog
                  </Link>
                  <div className="hidden md:flex">
                    <CategoriesDropdown
                      currentCategory={category}
                      onCategoryChange={onCategoryChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-12">
                {/* Ícone de Pesquisa que se transforma */}
                <div
                  className="relative items-center hidden md:flex"
                  onMouseEnter={() => setIsSearchVisible(true)}
                  onMouseLeave={() => setIsSearchVisible(false)}
                >
                  {isSearchVisible ? (
                    <motion.input
                      ref={inputRef}
                      initial={{ width: 40, opacity: 0 }}
                      animate={{ width: 250, opacity: 1 }}
                      exit={{ width: 40, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      value={searchTerm}
                      onChange={handleSearch}
                      type="text"
                      placeholder="Pesquisar..."
                      className="py-2 px-4 text-white bg-[#123258] rounded-[5px] outline-none text-sm border-[2px] border-primary shadow-lg"
                    />
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer"
                    >
                      <GoSearch className="text-white size-[24px]" />
                    </motion.div>
                  )}
                </div>

                <Link
                  href={"/"}
                  className="px-6 hidden md:flex border-[2px] border-primary py-2 rounded-full hover:bg-white hover:text-primary"
                >
                  Confira nosso site
                </Link>
              </div>
            </div>
          )}
        </div>

        {!isSidemenuOpen && (
          <button
            onClick={toggleSidemenu}
            className="md:hidden border-primary rounded-md border-[2px] p-1.5"
          >
            <Menu />
          </button>
        )}
      </motion.header>
    </AnimatePresence>
  );
}
