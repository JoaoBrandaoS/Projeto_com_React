
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Rodape from './components/Rodape/Rodape';
import Time from './components/Time/Time';

function App() {

  const times = [
    {
      nome : 'Programação',
      corPrimaria: '#57CD78',
      corSecundaria: '#D9F7E9'
    },
    {
      nome : 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome : 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#FOF8E2'
    },
    {
      nome : 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome : 'UX e Desing',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9FS'
    },
    {
      nome : 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }, 
    {
      nome : 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },


  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className='App'>
      <Banner/>
      <Form times ={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => 
      aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time key ={time.nome} 
      time = {time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria = {time.corSecundaria} 
      colaboradores ={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      
    </div>
  )
}

export default App;


