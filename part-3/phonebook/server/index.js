const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json())
let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//This is the simple logger using the express.  

// const requestLogger = (request, response, next) =>{
//   console.log('Methods:', request.method)
//   console.log('Path: ', request.path)
//   console.log('Body: ',request.body)
//   contacts.log('---')
//   next()
// }
// const logger = morgen('tiny')
// app.set(logger)

app.use(express.static("dist"))
app.use(cors())

// Here making a new token named 'data' and using that token to log out the actual data.
morgan.token('data', function(request, response){return JSON.stringify(response.data)})
app.use(morgan(':method :url :status :response-time ms - :res[content-length] data'))



const unknownEndpoint = (request, response) =>{
  response.status(404).send({error: 'Unknown endpoint'})
}

app.get('/', (request, response)=>{
    response.send("<h1>Hello Welcome to the server</h1>")
})

app.get('/api/persons', (request, response)=>{
    response.send(contacts)
})
const dateTime = ()=>{
  const date = new Date()
  const weekDays = ["Sun", "Mon", "Tue", "Wen", "Thr", "Fri", "Sat"]
  const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const month = Months[date.getMonth()]
  const day = weekDays[date.getDay()]
  return(`${day} ${month}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
// const currentDate = date.toLocaleString()
app.get('/info', (request, response)=>{
  const noOfEntries = contacts.length
  response.send(`Phonebook has info for ${noOfEntries} peoples <br/>
    ${dateTime()}
  `)
})

app.get('/api/persons/:id', (request, response)=>{
  const id = Number(request.params.id)
  const contact = contacts.find(contact => contact.id === id)
  if(contact){
    response.send(contact)
  }
  response.status(404).end()
})


app.delete('/api/persons/:id', (request, response)=>{
  const id = Number(request.params.id)
  contacts = contacts.filter(note => note.id !== id)
  response.status(204).end()
})
const id = ()=>{
  let randomNumber = Math.floor(Math.random()*1000000)
  return randomNumber
}
app.post('/api/persons', (request, response)=>{
  let contact = request.body
  if(!contact){
    return response.status(204).end()
  }
  if(contact.name == "" || contact.number== ""){
    return response.status(204).json({
      error: "Name and number cannot be empty"
    })
  }
  let contactNumber ={
    id: id(),
    name: contact.name,
    number: contact.number
  }
  // console.log(contactNumber)
  contact = contacts.concat(contactNumber)
  console.log(contactNumber)
  response.send(contactNumber)

  
})

app.use(unknownEndpoint)

const PORT = 3002
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})