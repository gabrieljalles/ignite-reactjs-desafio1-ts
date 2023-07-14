
import styles from './App.module.css'
import { Header } from './components/Header'
import { Task, TaskType } from './components/Task'

function App() {

  const tasks: TaskType[] = [
    {
      id: 1,
      content: [
        { finished: false, content: 'Take the dog to the vet' },
      ],
    },
    {
      id: 1,
      content: [
        { finished: false, content: 'wash the dishes' },
      ],
    }
  ]

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>

        <section className={styles.panel}>

          <div>
            <span>Tarefas criadas</span>
            <span>0</span>
          </div>

          <div>
            <span>Concluídas</span>
            <span>0</span>
          </div>

        </section>

        <section>


          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                task={task}
              />
            )
          })}

        </section>

      </main>

    </div >
  )
}

export default App
