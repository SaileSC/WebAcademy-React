import { useContext } from "react";
import { CarrinhoContext } from "../state/CarrinhoProvider";

export const useCarrinhoContex = () => {
  return useContext(CarrinhoContext);
};
