import { toast } from "react-toastify";
import { Produto } from "../types/Produtos";
import { useCarrinhoContex } from "./useCarrinhoContext";

export const useCarrinhoNovoProduto = () => {
  const carrinhoContext = useCarrinhoContex();

  const adicionaProduto = (produto: Produto, quantidade: number) => {
    const itemCarrinho = {
      id: produto.id,
      nome: produto.nome,
      preco: parseFloat(produto.preco),
      quantidade: quantidade
    };

    if (
      carrinhoContext.itensCarrinho.find((item) => item.id == itemCarrinho.id)
    ) {
      toast.warning(
        `Item já esta no carrinho, mude a quantidade na aba "Carrinho"`
      );
    } else {
      carrinhoContext.setItensCarrinho((itens) => [...itens, itemCarrinho]);
      toast.success("Item adicionado ao Carrinho");
    }
  };

  return adicionaProduto;
};
