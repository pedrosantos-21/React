function Pessoa ({nome, idade, foto, profissao}){
    return(
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome : {nome}</h2>
            <h3>Idade : {idade}</h3>
            <h3>Profissão : {profissao}</h3>
        </div>
    )
}

export default Pessoa
