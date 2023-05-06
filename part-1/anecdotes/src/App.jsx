import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   const [selectedText, setSelectedText] = useState(0)
   const [pointObject, setPointObject] = useState({0: 1, 1: 3, 2: 4, 3: 2 })

  //  const copy = { ...points }
   // increment the property 2 value by one
  //  copy[2] += 1 
  const incrementOnClick = ()=>{
   const randomNumber = Math.floor(Math.random()*anecdotes.length)
   console.log(randomNumber)
    setSelectedText(randomNumber)
  }

 
  const VoteButton = () =>{
    
  }

   return(
    <> 
      <div>{anecdotes[selectedText]}</div>
      <button onClick={incrementOnClick}>Next Anecdotes</button>
      {/* <button onClick={}>Votes</button> */}
    </>
   )
}

export default App
