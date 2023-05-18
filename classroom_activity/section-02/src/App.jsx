import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () =>{
  
    const [notes, setNotes] = useState([])
    const [newNote , setNewNote] = useState("")


    useEffect(() =>{
      noteService
        .getAll()
        .then(initlaValue =>{
          setNotes(initlaValue)
        })
    }, []) 

    
    //We will call  this function when the form is getting submited.
    const addNote = (event) =>{
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length+1
      }

        noteService
          .create(noteObject)
          .then(retunedNote =>{
            setNotes(notes.concat(retunedNote))
            setNewNote('')
          })
    }
    
    const handleNewNote = (event) =>{
      console.log(event.target.value)
      setNewNote(event.target.value)
    }
    
    const toggleImportanceOf = (id) =>{
      // find keyword returns the first element that satisfy the provided keyword.
      const note = notes.find(n => n.id === id)
      // Here we will be creating a new Note that we want to modify and here we are copying the exact same thing and then toggling the important to not important
      const changedNote = {...note, important: !note.important}

      noteService
        .update(changedNote, id)
        .then(retunedNote =>{
          setNotes(notes.map(note => note.id !== id? note : retunedNote))
        })

    }
    console.log(noteService.getAll)
    return(
        <div>
        <h1>Notes</h1>
        <div>
        </div>
        <ul>
        {notes.map(note => 
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            />
        )}
        <form onSubmit={addNote}>
          <input type="text" value={newNote} onChange={handleNewNote} />
          <button >Submit</button>
        </form>
        </ul>
      </div>
    )
}


export default App
