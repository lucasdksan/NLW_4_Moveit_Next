import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountDownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isactive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}
interface CountDownProviderProps{
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);
let countdownTimeout: NodeJS.Timeout;

const CountDownProvider = ({children}: CountDownProviderProps)=>{
    const { startNewChallenge } = useContext(ChallengeContext);
    const [ time, setTime ] = useState(0.1*60);
    const [ isactive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1*60);
    }
    useEffect(()=>{
        if(isactive && (time > 0) ){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1)
            }, 1000);
        } else if(isactive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    },[isactive, time]);

    return(
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isactive,
                startCountdown,
                resetCountdown,
            }}
        >
            {
                children
            }
        </CountDownContext.Provider>
    );
}
export default CountDownProvider;