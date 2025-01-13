import React, { createContext, useContext, useEffect, useState } from "react";
import pages from "@/data/pages";

import { SnackbarProvider } from "notistack";

type NavigationContextType = {
  isSidemenuOpen: boolean;
  toggleSidemenu: () => void;
  pages: PageType[];
  currentPage?: PageType;
  isTranslucentHeader: boolean;
  setTranslucentHeader: (isTranslucent: boolean) => void;
};

const NavigationContext = createContext({} as NavigationContextType);

type NavigationProviderProps = {
  children: React.ReactNode;
};

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);
  const [isTranslucentHeader, setTranslucentHeader] = useState<boolean>(false);

  function toggleSidemenu() {
    setIsSidemenuOpen(!isSidemenuOpen);
  }

  return (
    <NavigationContext.Provider
      value={{
        isSidemenuOpen,
        toggleSidemenu,
        pages,
        setTranslucentHeader,
        isTranslucentHeader,
      }}
    >
      <SnackbarProvider>{children}</SnackbarProvider>
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
