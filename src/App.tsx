import Card from "./components/Card"
import Contador from "./components/Contador"
import FavoriteColor from "./components/FavoriteColor";
import Hello from "./components/Hello"
import ListCards from "./components/ListCards"
import TabelaProdutos from "./components/TabelaProdutos";
import listaLivros from "./data/livros.json";

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Hello nome="Ries"></Hello>
      <Hello nome="Fulano"></Hello>
      <Contador></Contador><br />
      <FavoriteColor></FavoriteColor>
      <Card titulo="Meu produto">
        <h3>Nome: Meu produto</h3>
        <p>Descrição: Meu produto é demais!</p>
      </Card>
      <ListCards></ListCards>
      <TabelaProdutos lista={listaLivros}></TabelaProdutos>
    </>
  )
}

export default App
