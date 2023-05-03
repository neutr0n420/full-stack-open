
const Hello = ({age, name}) =>{

  // the another way of writing this is by using the the destructuring
  // const name = props.name
  // const age = props.age
  // const {age, name} = props
  const bornYear = () => new Date().getFullYear() - age
    
  // console.log(bornYear())

  return(
    <div>
      <p>
        Hello {name}, you are {age} year old.
        So your born year is {bornYear()}
      </p>
    </div>
  )
}
const App = ()=>{
  const name = "Aryan"
  const age = 19
return(
  <>
    <Hello name = {name} age = {age}/>
  </>
)
}

export default App
