"use client"
import { ResumoCarrinho } from "@/app/components/ResumoCarrinho";
import React from "react";
import ItemCarrinhoRow from "./ItemCarrinhoRow";
import { ItemCarrinho } from "@/app/types/ItemCarrinho";

interface ListaItensProp {
  itens:ItemCarrinho[],
  removeProduto:Function
}

export const ListagemCarrinho = (
  {itens, removeProduto}:ListaItensProp
) => {
    return(
      <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">
          Produtos selecionados
        </h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor Unitário</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <ItemCarrinhoRow key={item.id} item={item} removeProduto={removeProduto}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}

export default ListagemCarrinho;