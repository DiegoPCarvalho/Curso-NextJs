import styles from "@/styles/estatistica.module.css";

interface EstatisticaProps{
    valor: any
    texto: string
    corFundo?: any
    corFonte?: string
}

export default function Estatistica(props: EstatisticaProps){
    return(
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? "#fdd60f",
                color: props.corFonte ?? "#333"
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}