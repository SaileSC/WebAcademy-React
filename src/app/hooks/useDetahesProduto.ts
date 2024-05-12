import { useQuery } from "@tanstack/react-query"
import { getDetalhesProduto, getListaProduto } from "../services/produtos"
import { Produto } from "../types/Produtos";

interface DetalesProdutoReturn {
    produto: Produto | undefined;
    isPending: boolean;
    isError: boolean;
}

export const useDetahesProduto = (nomeProduto: string):DetalesProdutoReturn => {
    const { data, isPending, isError } = useQuery({
        queryKey: [nomeProduto],
        queryFn: () => getDetalhesProduto(nomeProduto)
    });

    return { produto: data, isPending, isError}
}