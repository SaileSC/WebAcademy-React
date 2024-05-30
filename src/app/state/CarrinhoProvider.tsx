"use client";
import React, { createContext, useState } from "react";
import { ItemCarrinho } from "../types/ItemCarrinho";

interface IItensCarrinho {
  itensCarrinho: ItemCarrinho[];
  setItensCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
}

export const CarrinhoContext = createContext<IItensCarrinho>({
  itensCarrinho: [],
  setItensCarrinho: () => {}
});

interface CarrinhoProviderProps {
  children: React.ReactNode;
}

const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);

  return (
    <CarrinhoContext.Provider value={{ itensCarrinho, setItensCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
