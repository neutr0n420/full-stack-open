import { nanoid } from "nanoid"
import Course from "./component/Course"


function App() {
  const course = 
  [
  {
    name: 'Half Stack application development',
    parts: [
      {
        id: nanoid(),
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: nanoid(),
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: nanoid(),
        name: 'State of a component',
        exercises: 14
      },
      {
        id: nanoid(),
        name: 'Redux',
        exercises: 11
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  

  return (
    <Course course = {course}/>
  ) 
}

export default App
