"use client"
import React, { MouseEventHandler } from "react";

interface BtnProp{
    text: string,
    btnClass:string,
    width?:number,
    sizeClass?:string,
    onclick?: MouseEventHandler<HTMLButtonElement>
}

const Botao = ({text,width, btnClass, sizeClass = 'm',  onclick} : BtnProp) => {
    return(
        <button className={`btn btn-${btnClass} d-block w-${width} btn-${sizeClass}`} type="button" onClick={onclick}>
           {text}
        </button>
    );
}
export default Botao