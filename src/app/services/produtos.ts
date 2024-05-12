import { Produto } from "../types/Produtos";
import api from "./api";


export const getListaProduto = async():
Promise<Produto[]> => {
    return api.get("/produto").then((response) => response.data);
}

export const getDetalhesProduto = async(nomeProduto: string):
Promise<Produto> => {
    return api.get(`/produto/${nomeProduto}`).then((response) => response.data);
}