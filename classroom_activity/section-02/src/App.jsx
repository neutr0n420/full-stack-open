import { useState } from 'react'
import Note from './components/Note'


const App = (props) =>{
  // Here we added a new notes and initalized with the notes array which is been defined at Main.jsx page.
    const [notes, setNotes] = useState(props.notes)
   // Here we are creating a new note and initized with the empty string.
    const [newNote , setNewNote] = useState("")
    //We will call  this function when the form is getting submited.
    const addNote = (event) =>{
      // Here we are preventing the default things to happen such as refesh after the forms get submitted.
      event.preventDefault()
      //The target of the event stored in event.target is logged to the console.
      // we want to access the element in it for now.
      console.log("button clicked",event.target)
      //creating a
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length+1
      }
      setNotes(notes.concat(noteObject))
    }
    const handleNewNote = (event) =>{
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

    return(
        <div>
        <h1>Notes</h1>
        <div>
        </div>
        <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
        {/* On submit the form we are adding the new note here. This is calling the new funciton called as 'Addnote'. */}
        <form onSubmit={addNote}>
          <input type="text" value={newNote} onChange={handleNewNote} />
          <button >Submit</button>
        </form>
        </ul>
      </div>
    )
}


export default App
