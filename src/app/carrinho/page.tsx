"use client";
import React, { useReducer } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mock/mockItensCarrinho";
import { ItemCarrinho } from "../types/ItemCarrinho";
import { ResumoCarrinho } from "../components/ResumoCarrinho/ResumoCarrinho";

interface State{
  itensCarrinho:ItemCarrinho[]
}

type Action =  { type: "aumentar_qtd"; id: string } |  { type: "diminuir_qtd"; id: string } | { type: "remover"; id: string }

const reducerItensCarrinho = (state:State, action:Action):State => {
  switch(action.type) {
    case "aumentar_qtd":
      return {...state,
        itensCarrinho: state.itensCarrinho.map((item) => 
        item.id == action.id ? 
        {...item, quantidade: item.quantidade + 1} : 
        item )
      };
    case "diminuir_qtd":
      return {...state,
        itensCarrinho: state.itensCarrinho.map((item) => 
        item.id == action.id && item.quantidade > 0 ? 
        {...item, quantidade: item.quantidade - 1} :
        item )
      };
    case "remover":
      return {...state,
        itensCarrinho: state.itensCarrinho.filter(
          (item) => item.id != action.id)
        };
    default:
        throw new Error();
  }
}

export default function Carrinho() {
  const [state, dispath] = useReducer(reducerItensCarrinho , {itensCarrinho: mockItensCarrinho})

  const removeProduto = (id:string) =>{
    dispath({type:"remover", id:id});
  }

  const aumentaQuantidade = (id:string) =>{
    dispath({type:"aumentar_qtd", id:id});
  }

  const diminuiQuantidade = (id:string) =>{
    dispath({type:"diminuir_qtd", id:id});
  }

  const getQuantidadeItensCarrinho = ():number =>{
    return state.itensCarrinho.reduce((sum, item) => sum + item.quantidade, 0)
  }

  const getPrecoTotalCarrinho = ():number =>{
    return parseFloat(state.itensCarrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0).toFixed(2))
  }


  return (
    <main>
        <div className="container p-5">
          <ListagemCarrinho itens={state.itensCarrinho} removeProduto={removeProduto} aumentaQuantiade={aumentaQuantidade} diminuiQuantidade={diminuiQuantidade}/>
          <ResumoCarrinho quantidadeTotal={getQuantidadeItensCarrinho()} valorTotal={getPrecoTotalCarrinho()}/>
        </div>
      </main>
  );
}