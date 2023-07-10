import styles from '.Header.module.css';
import toDoLogo from '../assets/todo-logo.svg';

export const Header = () =>{
    return(
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo do ToDo"/>
        </header>
    )
}