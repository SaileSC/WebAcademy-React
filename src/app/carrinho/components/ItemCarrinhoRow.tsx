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
                <button className="btn btn-danger btn-sm" onClick={() => removeProduto(item.id)}>
                    Remover
                </button>
            </td>
        </tr>
    );
}

export default ItemCarrinhoRow;