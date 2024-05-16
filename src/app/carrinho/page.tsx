"use client";
import React, { useEffect, useReducer } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { ItemCarrinho } from "../types/ItemCarrinho";
import { ResumoCarrinho } from "../components/ResumoCarrinho/ResumoCarrinho";
import { useCarrinhoLista } from "../hooks/useCarrinhoLista";
import { useCarrinhoContex } from "../hooks/useCarrinhoContext";

interface State {
  itensCarrinho: ItemCarrinho[];
}

type Action =
  | { type: "aumentar_qtd"; id: string }
  | { type: "diminuir_qtd"; id: string }
  | { type: "remover"; id: string }
  | { type: "set_initial_state"; itensCarrinho: ItemCarrinho[] };

const reducerItensCarrinho = (state: State, action: Action): State => {
  switch (action.type) {
    case "aumentar_qtd":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.map((item) =>
          item.id == action.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      };
    case "diminuir_qtd":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.map((item) =>
          item.id == action.id && item.quantidade > 0
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
      };
    case "remover":
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.filter(
          (item) => item.id != action.id
        )
      };
    case "set_initial_state":
      return {
        ...state,
        itensCarrinho: action.itensCarrinho
      };
    default:
      throw new Error();
  }
};

export default function Carrinho() {
  const contextCarrinho = useCarrinhoContex();

  const [state, dispath] = useReducer(reducerItensCarrinho, {
    itensCarrinho: contextCarrinho.itensCarrinho
  });

  useEffect(() => {
    contextCarrinho.setItensCarrinho(state.itensCarrinho);
  }, [contextCarrinho, state.itensCarrinho]);

  const removeProduto = (id: string) => {
    dispath({ type: "remover", id: id });
  };

  const aumentaQuantidade = (id: string) => {
    dispath({ type: "aumentar_qtd", id: id });
  };

  const diminuiQuantidade = (id: string) => {
    dispath({ type: "diminuir_qtd", id: id });
  };

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itens={state.itensCarrinho}
          removeProduto={removeProduto}
          aumentaQuantiade={aumentaQuantidade}
          diminuiQuantidade={diminuiQuantidade}
        />
        <ResumoCarrinho />
      </div>
    </main>
  );
}
