"use client"

import { ItemCarrinho } from "../types/ItemCarrinho";
import { Produto } from "../types/Produtos";

interface ResumoCarrinhoProps{
    //listaItens:ItemCarrinho[]
    valorTotal:number,
    quantidadeTotal:number 
}
export const ResumoCarrinho = (
    //{listaItens}:ResumoCarrinhoProps
   { valorTotal,
    quantidadeTotal} : ResumoCarrinhoProps
) => {

    return  (
        <div className="card mb-4">
            <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
            <p className="card-text fw-medium">
                Quantidade total: {
                //listaItens.reduce((sum, item) => sum + item.quantidade, 0)
                quantidadeTotal
            }</p>
            <p className="card-text fw-medium">
                Valor total: R$ {
                //listaItens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0).toFixed(2)
                valorTotal
                }
            </p>
            </div>
        </div>
    
    );
}