"use client";

import { Produto } from "@/app/types/Produtos";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Produto() {
    const [item, setProduto] = React.useState<Produto | null>(null)
    const { produto } = useParams()
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
            const json = await response.json()
            setProduto(json)
        }

        fetchData()
    })
  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
          {!item ? <h5 className="card-title mb-4 fw-bold">Carregando...</h5>:
          <>
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

                <h5 className="card-title mb-4 fw-bold">{item.nome}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                <Image key={item.id} src={item.fotos[0].src} alt={item.fotos[0].titulo} width={300} height={320} />
                </div>

                <p className="card-text fw-medium">
                Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className="card-text fw-medium">Descrição: {item.descricao}</p>
                <p className="card-text fw-medium">Anunciado por: </p>
          </>
          }
            
          </div>
        </div>
      </div>
    </main>
  );
}