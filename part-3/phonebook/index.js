const express = require('express')
const app = express()

const contacts = [
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

const PORT = 3002
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})