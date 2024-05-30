import { useCarrinhoContex } from "./useCarrinhoContext";

export const useCarrinhoLista = () => {
  const carrinhoContext = useCarrinhoContex();

  return carrinhoContext.itensCarrinho;
};
