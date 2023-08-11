const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
app.use(express.json())
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "Get and POST are the most important methods of HTTP protocol",
        important: true
    }
]

app.use(express.static('dist'))
app.use(cors())
app.get('/', (reqeust, response) =>{
    response.send('<h1>Hello world!</h1>')
})

const URL = `mongodb+srv://root:${process.env.MONGOOSE_PASSWORD}@notes.2qp635z.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(URL)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})
const Note = mongoose.model('Note', noteSchema)

app.get('/api/notes', (request, response)=>{
    Note.find({}).then(notes =>{
        response.json(notes)
        console.log(notes)
    })
    // response.json(notes)
})

app.get('/api/notes/:id', (request, response) =>{
    const id = Number(request.params.id)

    
    // const note = notes.find(note => note.id === id)
    const note = notes.find(note => note.id === id)
    console.log(note)
    if(note){
        response.json(note)
    }
    response.status(404).end()
})

app.delete('/api/notes/:id', (request, response)=>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})
const generateId = () =>{
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1

}

app.post('/api/notes', (request, response)=>{
    const body = request.body
    if(!body.content){
        return response.status(400).json({
            error: "content missing"
        })
    }
    const note ={
        content: body.content,
        important:body.important || false,
        id: generateId(),

    }
    notes = notes.concat(note)

    response.json(note)
})

// app.put('/api/notes/:id', (request, response)=>{

// })

const PORT = process.env.PORT||3001
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
