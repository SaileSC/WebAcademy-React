import Botao from "@/app/components/Botoes/Botao";
import { ItemCarrinho } from "@/app/types/ItemCarrinho";

interface ItemCarrinhoProp{
    item:ItemCarrinho
    removeProduto:Function
}

const ItemCarrinhoRow = (
    {item, removeProduto}:ItemCarrinhoProp
    ) => {
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
      ): number => precoUnitario * quantidade;

    return (
        <tr>
            <td>{item.nome}</td>
            <td>R$ {(item.preco).toFixed(2)}</td>
            <td>{item.quantidade}</td>

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