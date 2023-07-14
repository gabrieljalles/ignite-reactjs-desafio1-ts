
import { useState } from 'react';
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Task } from './components/Task';
import { ClipboardText} from 'phosphor-react';

function App() {
  
  const [tasks, setTasks] = useState([]);

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>

        <section className={styles.panel}>

          <div>
            <span>Created tasks</span>
            <span>{tasks.length}</span>
          </div>

          <div>
            <span>Concluded</span>
            { tasks.length === 0 ?
                <span>0</span> :  <span>{`${tasks.length} de ${tasks.length}`}</span>
            } 
          </div>

        </section>
        
        { tasks.length > 0 ? (
          <section className={styles.tasks}>
            {tasks.map(task => {
              return (
                <Task
                  key={task.content}
                  content={task.content}
                  onDeleteTask={deleteTask}
                />
              )
            })}
          </section>
        ):
            <section className={styles.withoutTasks}>
              <div className={styles.alertBox}>
                <ClipboardText size={56} color="#333333"/>
                <p>You don´t have any tasks yet!</p>
                <p>Create and organize your tasks to do!</p>
              </div>
            </section>
        }
        

      </main>

    </div >
  )
}

export default App
