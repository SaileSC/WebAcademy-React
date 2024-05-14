import Botao from "@/app/components/Botoes/Botao";
import { ItemCarrinho } from "@/app/types/ItemCarrinho";

interface ItemCarrinhoProp{
    item:ItemCarrinho
    removeProduto:Function
    aumentaQuantiade:Function
    diminuiQuantidade:Function
}

const ItemCarrinhoRow = (
    {item, removeProduto, aumentaQuantiade, diminuiQuantidade}:ItemCarrinhoProp
    ) => {
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
      ): number => precoUnitario * quantidade;

    return (
        <tr>
            <td>{item.nome}</td>
            <td>R$ {(item.preco).toFixed(2)}</td>
            <td>
                <button className="btn btn-secondary btn-sm me-2" onClick={() => diminuiQuantidade(item.id)}>-</button>
                {item.quantidade}
                <button className="btn btn-secondary btn-sm ms-2"onClick={() => aumentaQuantiade(item.id)}>+</button>
            </td>

            <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
            <td>
                <Botao
                text="Remover"
                btnClass="danger"
                sizeClass="sm"
                onclick={() => removeProduto(item.id)}
                />
            </td>
        </tr>
    );
}

export default ItemCarrinhoRow;