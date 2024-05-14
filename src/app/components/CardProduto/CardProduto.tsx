"use client"
import Image from "next/image"
import { Produto } from "../../types/Produtos";
import { useRouter } from "next/navigation";
import Botao from "../Botoes/Botao";
import { useContext, useState } from "react";
import { favoritosContext } from "@/app/page";


interface CardProdutoProps {
    produto:Produto,
    setNovoProduto: Function
}


const CardProduto = ({ 
    produto,
    setNovoProduto
    }: CardProdutoProps ) => {

    const router = useRouter();
    
    const verDetalheProduto = (pathdir:string) => {
        router.push(`/produto/${pathdir}`)
    }
    const contextFavoritos = useContext(favoritosContext);
    
    const [favoritado, setFavoritado] = useState<boolean>(contextFavoritos.favoritos.includes(produto));
    
    const favoritaItem = (produto: Produto) => {
        if(contextFavoritos.favoritos.includes(produto)){
            contextFavoritos.setFavoritos((favoritos) => favoritos.filter((item) => item.id !== produto.id));
            setFavoritado(false);
        }else{
            contextFavoritos.setFavoritos(favoritos => [...favoritos, produto])
            setFavoritado(true);
        }
    }
    
    return (
        <div className="col">
            <div className="card shadow-sm h-100">
            <i role="button" 
            className={`bi bi-star${favoritado?"-fill":""} fs-2 position-absolute me-2 text-warning end-0 cursor-pointer`}
            onClick={() => favoritaItem(produto)}></i>
                <Image
                    src={produto.fotos[0].src}
                    className="card-img-top"
                    alt={produto.fotos[0].titulo}
                    width={300}
                    height={320}
                />

                <div className="card-body bg-light">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-secondary">R$ {produto.preco}</p>
                    <Botao 
                        text="Adicionar no carrinho"
                        width={100}
                        btnClass="dark"
                        onclick={() => setNovoProduto(produto)}
                    />

                    <Botao 
                        text="Ver detalhes"
                        width={100}
                        btnClass="light"
                        margimTop={2}
                        onclick={() => verDetalheProduto(produto.nome)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardProduto