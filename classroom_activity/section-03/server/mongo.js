const mongoose = require('mongoose') 
require('dotenv').config()

const password = process.env.MONGOOSE_PASSWORD 

console.log(password)

const URL = `mongodb+srv://root:${password}@notes.2qp635z.mongodb.net/NotesApp?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)

mongoose.connect(URL)

const noteSchema =  new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)
