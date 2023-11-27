import QuestaoModel from "@/model/questao";
import styles from '../styles/questao.module.css';
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
    {valor: 'A', cor: '#F2C866'},
    {valor: 'B', cor: '#f266ba'},
    {valor: 'C', cor: '#85b4f2'},
    {valor: 'D', cor: '#acf599'},
]

interface QuestaoPorps {
    valor: QuestaoModel
    tempoPraResposta?: number 
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}
export default function Questao(props: QuestaoPorps){
    const questao = props.valor

    function renderizarResposta(){
        return questao.respostas!.map((resposta, i) =>{
            return <Resposta 
                key={`${questao.id}-${i}`}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }


    return(
        <div className={styles.questao}>
            <Enunciado texto={`${questao.enunciado}`} />
            <Temporizador
            key={questao.id} 
            duracao={props.tempoPraResposta ?? 10}
            tempoEsgotado={props.tempoEsgotado}/>
            {renderizarResposta()}
        </div>
    )
}