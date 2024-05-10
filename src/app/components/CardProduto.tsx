"use client"
import Image from "next/image"
import BotaoAdicionarProduto from "./BtnAdicionaProduto";
import { Produto } from "../types/Produtos";
import { useRouter } from "next/navigation";

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
        router.push(pathdir)
    }

    
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
                    <BotaoAdicionarProduto onclick={() => setNovoProduto(produto)}/>
                    <button className="btn btn-light d-block w-100 mt-2" type="button" onClick={() => verDetalheProduto(`/produto/${produto.nome}`)}>
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduto