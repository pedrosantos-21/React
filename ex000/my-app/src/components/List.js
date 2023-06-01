import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca ="Ferati"/>
                <Item marca ="fiat"/>
                <Item marca ="toyota"/>
            </ul>
        </> /* Isso é um fragment na prática! */
    )
}
export default List