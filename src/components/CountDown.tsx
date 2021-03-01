import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

const CountDown = ()=>{
    const { minutes, 
            seconds, 
            hasFinished, 
            isactive, 
            resetCountdown, 
            startCountdown 
        } = useContext(CountDownContext);
    const [ minuteLeft, minuteRight]  = String(minutes).padStart(2,'0').split('');
    const [ secondsLeft, secondsRight]  = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {
                hasFinished ? (
                    <button 
                        disabled
                        className={styles.countdownButton}
                    >
                        Ciclo Concluído!
                    </button>
                ) : (
                    <>
                    {
                        isactive ? (
                            <button 
                                type="button" 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar Ciclo
                            </button>
                        ) : (
                            <button 
                                type="button" 
                                className={styles.countdownButton}
                                onClick={startCountdown}
                            >
                                Iniciar um ciclo
                            </button>
                        )
                    }   
                    </>
                )
            } 
        </div>
    );
}

export default CountDown;