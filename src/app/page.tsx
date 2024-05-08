"use client";
import React, { useEffect } from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { Produto } from "./types/Produtos";


export default function Produtos() {
  //const listaProdutos = mockProdutos;


  const [dados, setDados] = React.useState<Produto[]>([])
  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal

    const fetchData = async() => {
      try{
        const response =  await fetch("https://ranekapi.origamid.dev/json/api/produto", {signal})
        const json = await response.json() as Produto[];
        setDados(json);
      }catch(err){
        console.log(err)  
      }
    }
    fetchData();

    return () => {
      controler.abort();
    }
  }, []);

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
          <ListagemProdutos produtos={dados} setNovoProduto={addProdutoCarrinho}/>
        </div>
    </main>
  );
}