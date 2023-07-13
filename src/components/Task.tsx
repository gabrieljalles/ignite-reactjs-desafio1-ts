import styles from './Task.module.css'
import { FormEvent, useState } from 'react';

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

export function Task({ task }: TaskProps) {

    

    return (
            <article className={styles.post}>
                <main>
                    <button>
                            ola mundo
                    </button>

                    <div className={styles.content}>

                        {task.content.map(text => {

                            return ( <p key={text.content}>
                                        {text.content}
                                    </p>
                            )
                                
                        })}
                    </div>
                </main>
            </article>
    )
}