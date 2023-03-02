import { useEffect, useState } from 'react'
import axios from 'axios'

interface Card {
  userId: string
  id: string
  title: string
  completed: boolean
}

function App() {

  const[card,setCard] = useState<Card[]>([])

  const[buscarId,setBuscarId] = useState<string>()

  const consultar = () => {
    axios.get<Card[]>(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => {
      setCard(res.data)
      console.log(card)
    })
    .catch((error) => {console.log(error)}) 
  }
  
  useEffect(() => {
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 3000)
    consultar()

  }, [])
    
  return (
    <div className="App">
      <input placeholder='faça sua procura' onChange={(e) => setBuscarId(e.target.value)}
      />
      {card.map( (card) => (
        <div>
          <p>Id: {card.id}</p>
          <p>UserId: {card.userId}</p>
          <p>Title: {card.title}</p>
          <p>Completed: {card.completed}</p>
        </div>
      ))}
    </div>
  )
}

export default App


/*{
      console.log(res.data)

      const card = JSON.parse(res.data)
      setCard(card)
      console.log(card)
    })*/