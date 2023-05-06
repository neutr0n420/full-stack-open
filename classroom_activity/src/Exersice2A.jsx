import React from 'react'


const Note = ({note}) =>{
    return(
        <li>{note.content}</li>
    )
}


const Exersice2A = (props) =>{
    const {notes} = props
    const result = notes.map(note=>note.id)
    console.log(result)
    return(
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note=>
                    <Note key={note.id} note={note}/>
                    )}
            </ul>
        </div>
    )
}

export default Exersice2A