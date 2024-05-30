import { useCarrinhoLista } from "./useCarrinhoLista";

export const useCarrinhoQuantidadeTotal = () => {
  const carrinhoLista = useCarrinhoLista();

  return carrinhoLista.reduce((sum, item) => sum + item.quantidade, 0);
};
