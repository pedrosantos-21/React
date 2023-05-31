import styles from './Frases.module.css'

function Frases(){

    return(
        <div className={styles.frasecontainer}>
            <p className={styles.frasecontent}>Este é um componente com uma frase!</p>
        </div>
    )

}

export default Frases