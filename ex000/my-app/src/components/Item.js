import PropTypes from 'prop-types' /* Blibioteca que possui o React */

function Item({marca, ano_lancamento}){
    return (
        <> 
           <li>{marca} - {ano_lancamento}</li> 
        </>
    )
} 

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "Faltou a marca!",
    ano_lancamento: 0, 
}

 /*o fragment também é aceito desta forma */
export default Item