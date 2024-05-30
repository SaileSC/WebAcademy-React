"use client";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useFavoriteContext } from "../hooks/useFavoriteContext";

export default function Favoritos() {
  const contextFavoritos = useFavoriteContext();

  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={contextFavoritos.favoritos}
          setFavoritos={contextFavoritos.setFavoritos}
        />
      </div>
    </main>
  );
}
