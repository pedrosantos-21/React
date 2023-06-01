import Item from "./Item"


function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca ="Ferati" ano_lancamento={1985}/>
                <Item marca ="fiat" ano_lancamento={1964}/>
                <Item marca ="toyota" ano_lancamento={1937}/>
            </ul>
        </> /* Isso é um fragment na prática! */
    )
}
export default List