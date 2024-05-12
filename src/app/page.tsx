"use client";

import { ResumoCarrinho } from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { Produto } from "./types/Produtos";
import React from "react";


export default function Inicio() {

  const [valorTotalCompra, setValorTotal] = React.useState<number>(0)
  const [quantidadeItens, setQuantidadeItens] = React.useState<number>(0)

  

  const addProdutoCarrinho = (produto: Produto) => {
    setValorTotal(valorAtual => valorAtual + parseFloat(produto.preco));
    setQuantidadeItens(qtdAtual => qtdAtual + 1);
  }


  return (
    <main>
        <div className="container p-5">
          <ResumoCarrinho quantidadeTotal={quantidadeItens} valorTotal={valorTotalCompra} />
          {
            <ListagemProdutos setNovoProduto={addProdutoCarrinho}/> 
          }
          
        </div>
    </main>
  );
}