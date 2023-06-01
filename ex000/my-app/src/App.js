
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import List from './components/List';

function App() {

  let nome = "Cesar"

  return (
    <div className="App">
      <h1>Testando o module</h1>
      <Frases/>
      <HelloWorld/>
      <SayMyName nome ="Pedro"/>
      <SayMyName nome = {nome}/>
      <Pessoa 
        nome = "Pedro"
        profissao ="Develompent" 
        idade = "17"
        foto="https://via.placeholder.com/150" />
        <List/>
    </div>
  )
}

export default App
