"use client";

import CardDetalhaProduto from "@/app/components/CardDetalhesProduto/CardDetalhesProduto";
import React from "react";

export default function PageProduto() {
  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <CardDetalhaProduto />
        </div>
      </div>
    </main>
  );
}
