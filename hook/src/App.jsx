import './App.css'
import { Card } from './components/Card/Card'
import { Hookscard } from './components/Hookscard/Hookscard'


function App() {


  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  return (
    <>
      <section>
        <h1>Hooks</h1>
        <Card/>
      </section>
      <section>
        <h1></h1>
        <Hookscard/>
      </section>
    </>
  )
}

export default App
