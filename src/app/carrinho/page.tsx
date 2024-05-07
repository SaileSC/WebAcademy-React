"use client";
import React from "react";
import ListagemCarrinho from "./components/ListagemCarrinho";
import { mockItensCarrinho } from "../mock/mockItensCarrinho";
import { ItemCarrinho } from "../types/ItemCarrinho";
import { ResumoCarrinho } from "../components/ResumoCarrinho";

export default function Carrinho() {
  const listaProdutos = mockItensCarrinho;
  const [listaCarrinho, setRemoveProduto] = React.useState<ItemCarrinho[]>(listaProdutos)

  const removeProduto = (id:string) =>{
    setRemoveProduto(itens => itens.filter(prod => prod.id != id))
  }

  const getQuantidadeItensCarrinho = ():number =>{
    return listaCarrinho.reduce((sum, item) => sum + item.quantidade, 0)
  }

  const getPrecoTotalCarrinho = ():number =>{
    return parseFloat(listaCarrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0).toFixed(2))
  }

  return (
    <main>
        <div className="container p-5">
          <ListagemCarrinho itens={listaCarrinho} removeProduto={removeProduto}/>
          <ResumoCarrinho quantidadeTotal={getQuantidadeItensCarrinho()} valorTotal={getPrecoTotalCarrinho()}/>
        </div>
      </main>
  );
}