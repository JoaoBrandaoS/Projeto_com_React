import React, { useState } from "react";
import Input from "./Input/Input";
import "./Form.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Submit from "./Submit/Submit";


function Form(props){


const [nome,setNome] = useState('')
const [cargo,setCargo] = useState('')
const [imagem,setImagem] = useState('')
const [time,setTime] = useState('')

const eventoEnviar = (e) =>{
    e.preventDefault()
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })

    setCargo('')
    setImagem('')
    setNome('')
    setTime('')

 }

    return(  

        <form className="form-container" onSubmit={eventoEnviar}>
            <h3>Preencha os dados para criar os cards do colaborador</h3>
            <Input obrigatorio={true} nome="nome" placeholder="digite o seu nome" type="text" valor={nome} 
            aoAlterado={valor => setNome(valor)}
            />

            <Input nome="cargo" obrigatorio={true}  placeholder="digite o seu cargo" type="text" valor={cargo} 
            aoAlterado={valor => setCargo(valor)}/>
            
            <Input nome="imagem" placeholder="insira uma image" type="text"  valor={imagem} 
            aoAlterado={valor => setImagem(valor)}/>
            
            <ListaSuspensa obrigatorio={true} lista={props.times} label="Time"
            valor={time} 
            aoAlterado={valor => setTime(valor)}
            />
           
            <Submit>Criar Você</Submit>
 
        </form>
    )
}

export default Form