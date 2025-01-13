import api from "@/services/api";
import { Button } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get(`/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default function NavbarCategoriesDropdown({
  currentCategory,
  onCategoryChange,
}: {
  currentCategory: number | undefined;
  onCategoryChange: (id: number) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState<boolean>(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isDropdownOpen && categories.length === 0) {
      fetchCategories().then((fetchedCategories) => {
        setCategories(fetchedCategories);
      });
    }
  }, [isDropdownOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown to allow mouse transition
    dropdownTimeout.current = setTimeout(() => {
      if (!isHoveringDropdown) {
        setIsDropdownOpen(false);
      }
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button className="flex items-center gap-2 justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-white hover:text-primary focus:outline-none transition-all">
          <MenuIcon />
          Assuntos
        </button>
      </div>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute left-0 mt-2 w-56 shadow-lg rounded-[20px] bg-white ring-1 ring-black ring-opacity-5 px-1.5"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="py-1">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <button
                    value={category.slug}
                    onClick={() => onCategoryChange(category.id)}
                    key={category.id}
                    className={`${
                      currentCategory == category.id && "text-primary"
                    } block px-4 py-2 text-sm text-dark hover:text-primary transition-all`}
                  >
                    {category.name}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-dark">Carregando...</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
