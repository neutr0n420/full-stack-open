import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () =>{
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: uuidv4(), phoneNo: "+91-91919191"}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const addNewPerson = {
      name: newName,
      phoneNo: newNumber,
      id: uuidv4()
    }
    
    if(!isDuplicateElementPresent(persons, addNewPerson)){
     setPersons(persons.concat(addNewPerson))
     console.log(addNewPerson)
   }
    
  } 
  const handleNameChange = (event) =>{
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

// console.log(`This is newname outside the function ${newName}`)
// for(let i =0; i< persons.length; i++){
//   console.log(persons[i].name)
// }

const isDuplicateElementPresent = (arr, obj) =>{
  for(let i =0; i< arr.length; i++){
    if(arr[i].name.toLowerCase() === obj.name.toLowerCase()){
      window.alert(`${obj.name} is already added to phonebook`)
      return true;
    }
  }
  return false;
}
// console.log(persons[0].phone)
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
        phone: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <li key={uuidv4()}>{person.name}  {person.phoneNo} </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
