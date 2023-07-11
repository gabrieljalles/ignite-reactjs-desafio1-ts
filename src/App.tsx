
import styles from './App.module.css'
import { Header } from './components/Header'
import Task from './components/Task'

function App() {

  const tasks: taskType[] = [
    {
      id:1,
    }
  ]

  return (
      <div className={styles.layout}>
        <Header />

        <main>
            {tasks.map(post=> {
              return(
                <Task 
                  key={post.id}
                  post={post}
                />
              )
            })}
        </main>
      </div>
  )
}

export default App
