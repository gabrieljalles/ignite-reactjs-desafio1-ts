import styles from './Task.module.css'
import { FormEvent, useState } from 'react';
import { Trash } from 'phosphor-react';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {

    function handleDeleteTask(){
        onDeleteTask(content);
    }

    return (
            <article className={styles.task}>

                    <div>
                        <input type="radio" />
                    </div>
    
                    <div className={styles.content}>
                        <p key={content}>
                            {content}
                        </p>   
                    </div>

                    <button title="task delete" onClick={handleDeleteTask}>
                        <Trash size={20} />
                    </button>
            </article>
    )
}