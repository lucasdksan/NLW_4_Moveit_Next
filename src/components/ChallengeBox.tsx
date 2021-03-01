import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountDownContext);
  function handlerChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }
  function handlerChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }
  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="line"/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button 
                type='button'
                className={styles.challengeFailedButton}
                onClick={handlerChallengeFailed}
              >
                Falhei
              </button>
              <button
                type='button'
                className={styles.challengeSucceededButton}
                onClick={handlerChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber um desafio</strong>
            <p>
              <img
                src='icons/level-up.svg'
                alt='Level Up'
              />
              Avance de level completando desafios.
            </p>
          </div>
        )
      }
    </div>
  );
}

export default ChallengeBox;
