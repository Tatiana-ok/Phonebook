
import styles from './css/HomeView.module.css';

const HomeView = () => {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <ul>
                        <p>Використані технології:</p>
                        <li><p>React JS</p></li>
                        <li><p>React Redux</p></li>
                        <li><p>React Hooks</p></li>
                        <li><p>CSS modules</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomeView;