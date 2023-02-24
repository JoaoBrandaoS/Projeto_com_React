import Menu from 'components/menu';
import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Inicio(){
    
    let pratosRecomendados = [...cardapio];
    
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: typeof cardapio[0]){
        navigate(`/prato/${prato.id}`,{state: {...prato}});
    }
    return(
        <section>
            <Menu />
            <h3 className={styles.titulo}>
            Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className ={styles.recomendado}>
                        <div className ={styles.recomendado_imagem}>                 
                            <img src={item.photo} alt={item.title}/>    
                        </div>
                        <button className={styles.recomendado__botao}
                        onClick ={() => redirecionarParaDetalhes(item)}>
                Ver mais
                        </button>
                    </div>
            
                ))}
            </div>
        </section>
    );
}