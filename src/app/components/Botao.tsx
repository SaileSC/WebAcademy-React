"use client"
import React, { MouseEventHandler } from "react";

interface BtnProp{
    text: string,
    btnClass:string,
    width?:number,
    sizeClass?:string,
    margimTop?:number
    onclick?: MouseEventHandler<HTMLButtonElement>
}

const Botao = ({text, 
    width, 
    btnClass, 
    sizeClass,  
    margimTop,
    onclick} : BtnProp) => {
    return(
        <button className={`btn btn-${btnClass} d-block w-${width} btn-${sizeClass} mt-${margimTop}`} type="button" onClick={onclick}>
           {text}
        </button>
    );
}
export default Botao