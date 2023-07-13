
import styles from './App.module.css'
import { Header } from './components/Header'
import { Task, TaskType } from './components/Task'

function App() {

  const tasks: TaskType[] = [
    {
      id: 1,
      content:[
        {finished: false, content:'Take the dog to the vet'},
      ],
    },
    {
      id: 1,
      content:[
        {finished: false, content:'wash the dishes'},
      ],
    }
  ]

  return (
    <div className={styles.layout}>
      <Header />

      <main>
          {tasks.map(task => {
            return (
              <Task 
                key =  {task.id}
                task = {task}
              />
            )
          })}
      </main>
      
    </div>
  )
}

export default App
