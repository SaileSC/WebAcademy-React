"use client";

import { ResumoCarrinho } from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import React from "react";
export default function Inicio() {
  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho />
        <ListagemProdutos />
      </div>
    </main>
  );
}
