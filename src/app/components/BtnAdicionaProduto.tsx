"use client"
import React, { MouseEventHandler } from "react";

interface BtnProp{
    onclick: MouseEventHandler<HTMLButtonElement>
}

const BtnAdicionaProduto = ({onclick} : BtnProp) => {
    return(
        <button className="btn btn-dark d-block w-100" type="button" onClick={onclick}>
            Adicionar no carrinho
        </button>
    );
}

export default BtnAdicionaProduto