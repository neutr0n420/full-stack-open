import { useState } from 'react'
import Note from './components/Note'


const App = (props) =>{
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const AddNote = (event) =>{
      // if we do not do this step so every single time we update the info in our application and hit submit, the page get refreshed and all the changes that we are doing not gonna reflect in the application.
      event.preventDefault()
      //how exactly this thing is working I want to figure it out.
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length + 1,
      }
    
      setNotes(notes.concat(noteObject))
    }

    const HandleNoteChange = (event =>{
      console.log(event.target.value)
      setNewNote(event.target.value)
    })

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
    return(
        <div>
        <h1>Notes</h1>
        <div>
          <button onClick={()=>setShowAll(!showAll)}>
            show {showAll ? 'important':'all'}
          </button>
        </div>
        <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
        {/* On submit the form we are adding the new note here. This is calling the new funciton called as 'Addnote'. */}
        <form onSubmit={AddNote}>
          <input 
          value={newNote}
          onChange={HandleNoteChange}
          />
          <button type='submit'>save</button>
        </form>
        </ul>
      </div>
    )
}


export default App
