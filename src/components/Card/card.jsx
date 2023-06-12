import styles from "./card.module.css"

export const Card = ({ description, value, category, id, deleteCard }) => {
    return (
        <li className={category == "Entrada" ? styles.verde : styles.cinza}>
            <h1>{description}</h1>
            <p>{category}</p>
            <span>R$: {value.toFixed(2)}</span>
            <button className={styles.defaultbutton} onClick={(e) => deleteCard(id)}>Excluir</button>
        </li>
    )
}