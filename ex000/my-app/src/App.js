
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  let nome = "Cesar"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome ="Pedro"/>
      <SayMyName nome = {nome}/>
      <Pessoa 
        nome = "Pedro"
        profissao ="Develompent" 
        idade = "17"
        foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App
