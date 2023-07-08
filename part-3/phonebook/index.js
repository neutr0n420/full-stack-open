const express = require('express')
const app = express()

app.get('/', (request, response)=>{
    response.send("<h1>Hello Welcome to the server</h1>")
})

const PORT = 3002
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})