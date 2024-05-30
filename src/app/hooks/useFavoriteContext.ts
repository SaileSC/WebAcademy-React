import { useContext } from "react";
import { FavoritosContext } from "../state/FavoritosProvider";

export const useFavoriteContext = () => {
  const favoriteContext = useContext(FavoritosContext);
  return favoriteContext;
};
