import Card from "./Card";

export default function ListCards() {
    const lista = [
        { id: 1, nome: "Produto 1", preco: 30.35 },
        { id: 2, nome: "Produto 2", preco: 40.23 },
        { id: 3, nome: "Produto 3", preco: 45.32 }
    ];

    return (
        lista.map ( produto => 
            <Card key={produto.id} titulo= {produto.nome}>
                <h3>R$ {produto.preco}</h3>
            </Card> 
        )
    )
}