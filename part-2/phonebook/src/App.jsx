import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () =>{
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const addNewPerson = {
      name: newName,
      id: uuidv4()
    }

    setPersons(persons.concat(addNewPerson))
    
    
  } 
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <li key={uuidv4()}>{person.name} </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
