import { useFavoriteContext } from "./useFavoriteContext";

export const useVerificaProdutoFavoritos = (id: string) => {
  const contextFavoritos = useFavoriteContext();
  const idsFavoritos = contextFavoritos.favoritos.map((item) => item.id);

  return idsFavoritos.includes(id);
};
