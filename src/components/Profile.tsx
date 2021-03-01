import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

const Profile = () =>{
    const { level } = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/47578616?s=460&u=795fd6da85b035741a018b46c1005b1450cf957d&v=4" alt="Lucas da Silva"/>
            <div>
                <strong>Lucas da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}

export default Profile;