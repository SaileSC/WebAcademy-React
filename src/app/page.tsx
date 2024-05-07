"use client";
import React from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { mockProdutos } from "./mock/mockProdutos";
import { ItemCarrinho } from "./types/ItemCarrinho";
import { Produto } from "./types/Produtos";


export default function Produtos() {
  const listaProdutos = mockProdutos;


  //const [listaItensCarrinho, setNovoProduto] = React.useState<ItemCarrinho[]> ([])
  // const addProdutoCarrinho = (produto: Produto) => {
  //   const buscaItem = listaProdutos.find(prod => prod.id == produto.id)
  //   if(!buscaItem){
  //     const novoProd = {id: produto.id, nome: produto.nome, preco: parseFloat(produto.preco), quantidade: 1}
  //     setNovoProduto(itens => [...itens, novoProd])
  //   }else{
  //     setNovoProduto(itens => itens.map(item => 
  //       item.id == produto.id ? {...item, quantidade: item.quantidade + 1}: item))
  //   }
  // }


  const [valorTotalCompra, setValorTotal] = React.useState<number>(0)
  const [quantidadeItens, setQuantidadeItens] = React.useState<number>(0)

  const addProdutoCarrinho = (produto: Produto) => {
    setValorTotal(valorAtual => valorAtual + parseFloat(produto.preco))
    setQuantidadeItens(qtdAtual => qtdAtual + 1)
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