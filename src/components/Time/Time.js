
import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

function Time(props){
    
    const css = { backgroundColor: props.corSecundaria }
    
    return(
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style = {{ borderColor : props.corPrimaria}}>{props.time}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem} />)}
            </div>
        </section>  
        
    )
}

export default Time
