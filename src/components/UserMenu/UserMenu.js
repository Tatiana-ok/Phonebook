import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

const UserMenu = ({ userName, onLogOut }) => {
    return (
        <div className={styles.UserMenu}>
            <p className={styles.welcome}>Ласкаво просимо, {userName}</p>
            <Button className={styles.exitBtn} variant="primary" type="button" onClick={onLogOut}>Вийти</Button>
        </div>
    )
};

const mapStateToProps = state => ({
    userName: authSelectors.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(authOperations.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
