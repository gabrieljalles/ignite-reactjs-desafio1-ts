import styles from './NewTask.module.css'
import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';


export const NewTask = () => {

    const [newTaskText, setNewTaskText] = useState('');

    const isNewTaskEmpty = newTaskText.length === 0;
    

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }

    return (
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <input
                    name="task"
                    placeholder="Create a new task"
                    maxLength={70}
                    value={newTaskText}
                    required
                />
                <div>
                    <button type="submit" disabled={isNewTaskEmpty}>
                        Create
                        <PlusCircle size={20} />
                    </button>
                </div>
            </form>
    )
}