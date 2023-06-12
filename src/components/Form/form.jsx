import { useState } from "react"
import styles from "./form.module.css"

export const Formulario = ({ addValueToList }) => {
    const [formData, setFormData] = useState({
        description: "",
        value: "",
        category: ""
    })

    const submit = (event) => {
        event.preventDefault()
        addValueToList(formData)
        setFormData({
            description: "",
            value: "",
            category: ""
        })
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="input__description">Descrição</label>
            <input required type="text" id="input__description" placeholder="Digite aqui sua descrição" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
            <p>Ex: Compra de roupas</p>

            <label htmlFor="input__value">Valor (R$)</label>
            <input placeholder="1 R$" required type="text" id="input__value" value={formData.value} onChange={(event) => setFormData({ ...formData, value: event.target.value })} />

            <label htmlFor="select">Tipo de valor</label>
            <select placeholder="Entrada" required name="" id="select" value={formData.category} onChange={(event) => setFormData({ ...formData, category: event.target.value })}>
                <option value="">Tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>

            <button type="submit">Inserir valor</button>
        </form>
    )
}