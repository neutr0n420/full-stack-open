import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import DisplayContact from './components/DisplayContact';
import axios from 'axios';


const App = () =>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const [filteredName, setFilteredPersons] = useState([])
  
  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        setPersons(response.data)
      })
  },[])

  const addName = (event) =>{
    event.preventDefault()
    const addNewPerson = {
      name: newName,
      number: newNumber,
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

const handleFilter = (event) =>{
  const filtered = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filtered);
}
// console.log(persons[0].phone)
  return(
    <div>
      <h2>Phonebook</h2>
      filter shown with<input onChange={handleFilter} />
      <div>
        <h2>add a new </h2>
        <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <div>
        <DisplayContact persons={persons}/>
      </div>
      </div>
    </div>
  )
}

export default App
