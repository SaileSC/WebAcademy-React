"use client";
import React from "react";
import CardProduto from "./CardProduto";
import { Produto } from "../types/Produtos";

interface ListaProdutosProps {
    produtos:Produto[],
    setNovoProduto: Function
}

const ListagemProdutos = ({ 
    produtos,
    setNovoProduto
    }:ListaProdutosProps
) => {
    return  (
    <>
    <h5 className="mb-3">Produtos disponíveis:</h5>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos ? 
            produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} setNovoProduto={setNovoProduto}/>
        )): <p className="text-center text-primary fw-bold">Lista está Carregando</p> }
    </div>
    </>    
    );
}

export default ListagemProdutos;