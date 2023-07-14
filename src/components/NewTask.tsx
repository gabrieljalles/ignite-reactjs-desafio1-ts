import styles from './NewTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';


interface Content {
    finished: boolean;
    content: string;
}

export interface TaskType {
    id: number;
    content: Content[];
}

interface TaskProps {
    task: TaskType;
}



export const NewTask = () => {

    const [tasks, setTasks] = useState(['']);

    const [newTaskText, setNewTaskText] = useState('');

    const isNewTaskEmpty = newTaskText.length === 0;


    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, newTaskText]);

        setNewTaskText('');

    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input
                name="task"
                placeholder="Create a new task"
                maxLength={70}
                value={newTaskText}
                onChange={handleNewTaskChange}
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