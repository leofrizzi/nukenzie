import { Card } from "../Card/card"
import styles from "./lista.module.css"
import { Formulario } from "../Form/form"

export const ValueList = ({ valueList, deleteCard, addValueToList }) => {

    const total = valueList.reduce((previousValue, currentValue) => {
        if (currentValue.category == 'Entrada') {
            return previousValue + currentValue.value
        } else {
            return previousValue - currentValue.value
        }
    }, 0,)

    return (
        <>
            {valueList.length > 0 ? (
                <>
                    <div className={styles.form__container}>
                        <Formulario addValueToList={addValueToList} />
                        <div className={styles.totalValue}>
                            <p>Valor Total:</p>
                            <span>R$: {total.toFixed(2)}</span>
                            <small>O valor se refere ao saldo</small>
                        </div>
                    </div>
                    <ul>
                        <span>Resumo Financeiro</span>
                        {valueList.map(value => {
                            return <Card key={value.id} id={value.id} description={value.description} value={value.value} category={value.category} deleteCard={deleteCard} />
                        })}
                    </ul>
                </>
            ) : (
                <>
                    <Formulario addValueToList={addValueToList} />
                    <div className={styles.valores}>
                        <span>Resumo Financeiro</span>
                        <h1>Você ainda não possui nenhum lançamento</h1>
                    </div>
                </>
            )}
        </>
    )
}