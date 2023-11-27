import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/temporizador.module.css';


interface TemporizadorProps{
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps){
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
            size={120}
            isPlaying
            duration={props.duracao}
            onComplete={props.tempoEsgotado}
            colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33], 
                ['#A30000', 0.33]
            ]}
            
            >
            {({ remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}