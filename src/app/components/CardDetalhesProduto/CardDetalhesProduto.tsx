
import { useDetahesProduto } from "@/app/hooks/useDetahesProduto";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function CardDetalhaProduto() {

    const params = useParams()
    const produtoNome = params.produto as string;

    const {produto , isError, isPending} = useDetahesProduto(produtoNome);
    
    if(isPending) return <h5 className="p-5">Carregando...</h5>
    if(isError) return <h5 className="p-5">Ocorreu um erro ao carregar o produto.</h5>
    if(!produto) return <h5 className="p-5">Produto não disponível no momento.</h5>


    return(
        <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

            <h5 className="card-title mb-4 fw-bold">{produto.nome}</h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                <Image key={produto.id} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} width={300} height={320} />
            </div>

            <p className="card-text fw-medium">
            Valor: R${Number(2000).toFixed(2)}
            </p>
            <p className="card-text fw-medium">Descrição: {produto.descricao}</p>
            <p className="card-text fw-medium">Anunciado por: Loja WA</p>
        </div>
    );
}