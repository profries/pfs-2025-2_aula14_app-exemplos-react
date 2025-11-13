import "./TabelaProdutos.css"

interface Produto {
    id: number;
    nome: string;
    preco: number; 
}

interface TabelaProdutosProps {
    lista: Produto[]; 
}

export default function TabelaProdutos({ lista }: TabelaProdutosProps) {
    console.log(lista);
    return (
        <table id="produtos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(produto =>
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}