"use client";
import React, { useEffect } from "react";

import { ResumoCarrinho } from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { Produto } from "./types/Produtos";


export default function Inicio() {
  const [dados, setDados] = React.useState<Produto[] | null >(null)
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
            dados ? <ListagemProdutos produtos={dados} setNovoProduto={addProdutoCarrinho}/> 
            : <p className="fs-4 fw-bold">Carregando...</p>
          }
          
        </div>
    </main>
  );
}