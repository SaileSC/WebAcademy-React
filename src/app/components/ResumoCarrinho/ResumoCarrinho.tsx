"use client";

import { useCarrinhoPrecoTotal } from "@/app/hooks/useCarrinhoPrecoTotal";
import { useCarrinhoQuantidadeTotal } from "@/app/hooks/useCarrinhoQuantidadeTotal";

export const ResumoCarrinho = () => {
  const quantidadeTotalCarrinho = useCarrinhoQuantidadeTotal();
  const precoTotalCarrinho = useCarrinhoPrecoTotal();
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">
          Quantidade total: {quantidadeTotalCarrinho}
        </p>
        <p className="card-text fw-medium">
          Valor total: R$ {precoTotalCarrinho}
        </p>
      </div>
    </div>
  );
};
