import "./Input.css"
function Input({nome, type, placeholder,obrigatorio,valor,aoAlterado}){



    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)

    }
    return(
        <div className="input-container">
            <label htmlFor={nome}>{nome}</label>
            <input value={valor} onChange = {aoDigitado} required={obrigatorio} type={type} placeholder={placeholder} name={nome}   />
        </div>
    )
}

export default Input