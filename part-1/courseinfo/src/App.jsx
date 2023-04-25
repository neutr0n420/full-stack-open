// import Hello from './hello'
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    <>
    <Header course = {course.name}/>
    {/* {console.log(part1)} */}
     <Content />
     <Total ex1 = {course.parts[0].exercises} ex2 ={course.parts[1].exercises} ex3 ={course.parts[2].exercises}/>
    </>
  )
  function Header(props){
    return(
      <div>
        <h1>{props.course}</h1>
        </div>
    )
  }





  function Content(){
    return(
      <div>
        <Part part = {course.parts[0].name} exercise ={course.parts[0].exercises}/>
        <Part part = {course.parts[1].name} exercise ={course.parts[1].exercises}/>
        <Part part = {course.parts[2].name} exercise ={course.parts[2].exercises}/>
        {/* <p>
          {props.part} {props.exercise} Exersises
        </p> */}
      </div>
    )
    function Part(props){
      return(
      <div>
        <p>{props.part} {props.exercise}</p>
      </div>
      )
    }
  }






  function Total(props){
    return(
      <div>
        <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
      </div>
    )
  }
}

export default App
