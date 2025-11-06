import Card from "./components/Card"
import Contador from "./components/Contador"
import Hello from "./components/Hello"
import ListCards from "./components/ListCards"

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Hello nome="Ries"></Hello>
      <Hello nome="Fulano"></Hello>
      <Contador></Contador>
      <Card titulo="Meu produto">
        <h3>Nome: Meu produto</h3>
        <p>Descrição: Meu produto é demais!</p>
      </Card>
      <ListCards></ListCards>
    </>
  )
}

export default App
