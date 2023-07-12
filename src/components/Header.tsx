import styles from './Header.module.css';
import toDoLogo from '../assets/todo-logo.svg';
import { NewTask } from './NewTask';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div >
                <img src={toDoLogo} alt="Logotipo do ToDo" />
            </div>
            <NewTask />
        </header>
    )
}