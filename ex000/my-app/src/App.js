
import './App.css';

function App() {

    const name = "Pedro";

    const newname = name.toUpperCase()

    function sum(a,b){
      return a + b
    }

    let url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <p>meu primeiro App🥹</p>
      <a href="github.com"></a>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newname}</p>
      <p>soma: {sum(5,5)}</p>
      <img src={url} alt="minah imagem" ></img>
    </div>
  );
}

export default App;
