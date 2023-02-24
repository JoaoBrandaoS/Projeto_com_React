import Footer from 'components/footer';
import Menu from 'components/menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/prato';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header'

export default function AppRouter(){
    return(
        <main className='container'>        
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Header />}> 
                    <Route index element ={<Inicio/>} />
                    <Route path='cardapio' element={<Cardapio />} />
                    <Route path='sobre' element ={<Sobre />} />
                </Route>
                <Route path='prato/:id' element = {<Prato />} />
                <Route path='*' element ={<NotFound/>} />
            </Routes>
        </Router>
        <Footer />
        </main>
        );
}