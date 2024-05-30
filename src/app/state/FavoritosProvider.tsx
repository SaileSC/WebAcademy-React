"use client";
import React, { createContext, useState } from "react";
import { Produto } from "../types/Produtos";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {}
});

interface FavoritosProviderProps {
  children: React.ReactNode;
}

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
