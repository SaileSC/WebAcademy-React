"use client";
import React from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { mockProdutos } from "./mock/mockProdutos";
import { Produto } from "./types/Produtos";


export default function Produtos() {
  const listaProdutos = mockProdutos;

  const [valorTotalCompra, setValorTotal] = React.useState<number>(0);
  const [quantidadeItens, setQuantidadeItens] = React.useState<number>(0);

  const addProdutoCarrinho = (produto: Produto) => {
    setValorTotal(valorAtual => valorAtual + parseFloat(produto.preco));
    setQuantidadeItens(qtdAtual => qtdAtual + 1);
  }


  return (
    <main>
        <div className="container p-5">
        <ResumoCarrinho quantidadeTotal={quantidadeItens} valorTotal={valorTotalCompra} />
        <ListagemProdutos produtos={listaProdutos} setNovoProduto={addProdutoCarrinho}/>
        </div>
    </main>
  );
}