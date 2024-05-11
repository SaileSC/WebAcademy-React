import Image
from "next/image"
import { Produto } from "../types/Produtos";
import Botao from "./Botao";

interface CardProdutoProps {
    produto:Produto,
    setNovoProduto: Function

}


const CardProduto = ({ 
    produto,
    setNovoProduto
    }: CardProdutoProps ) => {

    return (
        <div className="col">
            <div className="card shadow-sm h-100">
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
                </div>
            </div>
        </div>
    );
}

export default CardProduto