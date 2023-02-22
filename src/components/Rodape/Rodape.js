import './Rodape.css'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
function Rodape(){
    return(
        <div className='container'>
            <div className='links'>   
                <ul className='rodape'>
                    <li><a href='facebook.com.br' alt =""> <FaFacebook /> </a> </li>
                    <li><a href='twitter.com.br' alt =""> <FaTwitter /> </a> </li>
                    <li><a href='instagram.com.br' alt =""> <FaInstagram /> </a> </li> 
                </ul>
            </div>
            <div className='sessao'>
                <img src ='./img/logo.png' alt='' />
            </div>
            <div className='text'>
                <p>Desenvolvido por <a href='https://github.com/JoaoBrandaoS' alt="">João Brandão</a></p>
            </div>
        </div>
    )
}


export default Rodape
