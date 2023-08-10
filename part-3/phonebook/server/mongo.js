const mongoose = require('mongoose');

const password = process.argv[2]
const uri = `mongodb+srv://root:${password}@cluster0.onmb8nt.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

const personName = process.argv[3]
const personNumber = process.argv[4]



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust the timeout value as needed
}).then(() => {
  console.log('Connected to MongoDB successfully!');
  const noteSchema = new mongoose.Schema({
    name: String,
    number: String,
  });


  const Phonebook = mongoose.model('phonebook', noteSchema);

  const phoneNumber = new Phonebook({
    name: personName,
    number: personNumber,
  });
  if(process.argv === 5){

    phoneNumber.save().then((result) => {
      console.log("The contact had been saved")
      // mongoose.connection.close();
    });
    mongoose.connection.close()
  }
if(process.argv === 3){

  Phonebook.find({}).then(result =>{
    result.forEach((phonebook)=>{
      console.log(phonebook.name)
      console.log(phonebook.number)

    })
    mongoose.connection.close()  

  })
}
}).catch((error) => {
  console.log('Failed to connect to MongoDB:', error.message);
});
