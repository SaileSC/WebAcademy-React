import { useCarrinhoLista } from "./useCarrinhoLista";

export const useCarrinhoPrecoTotal = () => {
  const carrinhoLista = useCarrinhoLista();

  return carrinhoLista.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );
};
