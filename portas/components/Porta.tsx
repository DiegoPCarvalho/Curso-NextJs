import PortaModel from "../model/porta"
import styles from "../styles/Porta.module.css"
import Presente from "../components/Presente";

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta = props.value

    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ""

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())

    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizar() {
        return (

            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>

        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? 
                renderizar() : 
                porta.temPresente ? <Presente /> : 
                false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}