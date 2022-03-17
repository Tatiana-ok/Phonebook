import { NavLink } from 'react-router-dom';
import styles from './css/HomeView.module.css';

const HomeView = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.list}>
                    <ul>
                        <p>Використані технології:</p>
                        <li><p>React JS</p></li>
                        <li><p>React Redux</p></li>
                        <li><p>React Hooks</p></li>
                        <li><p>CSS modules</p></li>
                    </ul>
                </div>
                <div className={styles.main}>
                    <h1 className={styles.please}>Будь ласка, зареєструйтесь!</h1>
                    <button type='button' className={styles.btnStart}><NavLink to="/register">Почати</NavLink></button>
                </div>
            </div>
        </>
    )
}

export default HomeView;