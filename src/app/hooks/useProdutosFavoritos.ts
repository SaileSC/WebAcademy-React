import { useFavoriteContext } from "./useFavoriteContext";

export const useProdutosFavoritos = () => {
  const contextFavoritos = useFavoriteContext();

  return contextFavoritos.favoritos;
};
