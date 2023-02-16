import React from "react";
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    
    return(
        
        <div className="opcoes">
            <label >{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required ={props.obrigatorio}>
                {props.lista.map(item => (<option className="option" key={item} >{item}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa