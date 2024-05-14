"use client";

import { ResumoCarrinho } from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { Produto } from "./types/Produtos";
import React, { createContext, useState } from "react";

interface FavoritosContext{
  favoritos: Produto[]
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>
}

export const favoritosContext = createContext<FavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

export default function Inicio() {
  const [valorTotalCompra, setValorTotal] = React.useState<number>(0)
  const [quantidadeItens, setQuantidadeItens] = React.useState<number>(0)

  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const addProdutoCarrinho = (produto: Produto) => {
    setValorTotal(valorAtual => valorAtual + parseFloat(produto.preco));
    setQuantidadeItens(qtdAtual => qtdAtual + 1);
  }

  return (
    <main>
        <div className="container p-5">
          <ResumoCarrinho quantidadeTotal={quantidadeItens} valorTotal={valorTotalCompra} />
          <favoritosContext.Provider value={{favoritos, setFavoritos}}>
            <ListagemProdutos 
              setNovoProduto={addProdutoCarrinho}
            /> 
          </favoritosContext.Provider>
        </div>
    </main>
  );
}