import styles from './Header.module.css';
import toDoLogo from '../assets/todo-logo.svg';

export const Header = () =>{
    return(
        <header >
            <div className={styles.header}>
            <img src={toDoLogo} alt="Logotipo do ToDo"/>
            </div>
            <div>
                <NewTask />
            </div>
        </header>
    )
}