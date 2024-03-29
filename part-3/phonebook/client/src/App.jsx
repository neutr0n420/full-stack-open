import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
// import DisplayContact from './componennts/DisplayContact';
import axios from 'axios';
import contactService from './components/services/contact';
import './index.css'
import Notification from './components/Notification';


const App = () =>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [updatedMessage, setUpdatedMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // const [input , setInput] =  useState('')

  useEffect(() =>{
    contactService
      .getData()
      .then(contactDetails =>{
      
        setPersons(contactDetails)
    
      })
      .catch(error =>{

      })
  },[])


  const addName = (event) =>{
    event.preventDefault()
    const addNewPerson = {
      name: newName,
      number: newNumber
    }
    
    if(!isDuplicateElementPresent(persons, addNewPerson)){
      // console.log(addNewPerson)
      if(newName !== '' || newNumber !== ''){
      contactService
        .create(addNewPerson)
        .then(creatingContact =>{
          setPersons(persons.concat(creatingContact))
          setUpdatedMessage(`Added ${creatingContact.name} to the contact list`)
          setTimeout(() =>{
            setUpdatedMessage('')
          }, 2000)
         
        })
      }
      
      else{
        window.alert("feild cannot be empty")
        return
      }
   
   }
 
    
  } 
  
  const handleNameChange = (event) =>{
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }


const isDuplicateElementPresent = (arr, obj) =>{
  
  for(let i =0; i< arr.length; i++){
    if(arr[i].name.toLowerCase() === obj.name.toLowerCase()){
      if(arr[i].number !== obj.number){
        if(!window.confirm(`Do you want to change the contact number for ${arr[i].name}`)){
          return
        }
        updateNumber(arr[i].id, obj)
        return true
        // location.reload()
      }
      else{
        window.alert(`${obj.name} is already added to phonebook`)
        return true;
      }
    }

  }
  return false;
}



  // console.log(persons)
  const updateNumber = (id, object) =>{
  console.log(`http://localhost:3002/api/persons/${id}`)
  axios
    .put(`http://localhost:3002/api/persons/${parseInt(id)}`, object)
    .then(response => {
      setPersons(persons.map(person => person.id === id ? response.data : person))
    })
    
    .catch(error =>{
      const data = JSON.parse(error.config.data)
      setErrorMessage(`Information of ${data.name} has been removed from the server`)
      setTimeout(() =>{
        setErrorMessage(null)
      },2000)
    })
}

// const handleFilter = (event) =>{
// console.log(event.target.value)
// setInput(event.target.value)
// }
  // console.log(persons)

const removeContact = (id) =>{
 if (!window.confirm(`Delete ${persons.find(person => person.id === id).name}`)) return
 setPersons(persons.filter(person => person.id !== id ) )
 axios
    .delete(`http://localhost:3002/api/persons/${id}`)
    .then(response => response.data) 
//  location.reload()
}




  return(
    <div>
      <h2 >Phonebook</h2>
      <Notification message ={updatedMessage}/>
      <p>{errorMessage}</p>
      filter shown with<input  />
      <div>
        <h2>add a new </h2>
        <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <div>
        {/* <DisplayContact persons={persons}/> */}
        <ul>
         { persons.map(person =>
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => removeContact(person.id)}>Delete</button>
        </li>
          )}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default App
