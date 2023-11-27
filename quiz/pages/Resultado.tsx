import { useRouter } from "next/router";
import styles from '../styles/resultado.module.css';
import Estatistica from "@/components/Estatisticas";
import Botoa from "@/components/Botao";

export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total!
    const certas = +router.query.certas!
    const percentual = Math.round((certas / total) * 100)

    function acertar(percentual: number){
        if(percentual >= 70){
            return "#36CF17"
        }
        if((percentual >= 30) && (percentual <= 69)){
            return "#3F83D5"
        }if(percentual <= 29){
            return "#DA2020"
        }
    }

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{
                display: "flex",
            }}>
                <Estatistica valor={total} texto="Perguntas" />
                <Estatistica valor={certas} texto="Certas" 
                    corFundo="#9cd2a4"/>
                <Estatistica valor={`${percentual}%`} texto="Percentual" 
                    corFundo={acertar(percentual)}/>
            </div>
            <Botoa href="/" texto="Tentar Novamente"/>
        </div>
    )
}