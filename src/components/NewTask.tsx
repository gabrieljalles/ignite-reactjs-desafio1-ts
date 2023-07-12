import styles from './NewTask.module.css'
import { FormEvent, useState } from 'react';

export const NewTask = () => {

    const [newCommentText,]

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTask([...tasks, newTaskText]);
        setNewTaskText('');
    }

    const isNewTaskEmpty = newTaskText.length === 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <textarea
                name="task"
                placeholder="Add new task"
                maxLength={70}
                value={newTaskText}
                required
            />
            <div>

                <button type="submit" disabled={isNewTaskEmpty}>
                    Create
                </button>



            </div>


        </form>
    )
}