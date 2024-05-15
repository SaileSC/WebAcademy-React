import { useQuery } from "@tanstack/react-query";
import { getListaProduto } from "../services/produtos";
import { Produto } from "../types/Produtos";

interface ListaProdutosReturn {
  produtos: Produto[] | undefined;
  isPending: boolean;
  isError: boolean;
}

export const useListaProdutos = (): ListaProdutosReturn => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["listaProdutos"],
    queryFn: () => getListaProduto()
  });

  return { produtos: data, isPending, isError };
};
