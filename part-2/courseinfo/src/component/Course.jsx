import React from 'react'
const Header = ({course}) => <h2>{course[0].name}</h2>
const Part = (props) => <p>{props.name} {props.exercise}</p>


// so Here we are making a new component named content which will render the whole part section.lets look it line by line
//initlaizing the function content and taking the parameter by using the destrucuting the props method
const Content = ({course}) =>{
    // console.log(course[0])
    // In the variable name we are storing the the part name and the exersices that are coming. Here we are itrating over every single part by using the map function and combining the part name with the part exersice in the one part only. 
    const name = course[0].parts.map((part)=> <p key={part.id}>{part.name} {part.exercises}</p>)
    //This above line is really important.
    // Here we are rendering the name component inside a div.
    return(
        <div>
            {name} 
        </div>
    )
}

const Sum = ({course}) =>{
    const newSum = course[0].parts.reduce((x,y)=>{
        return x + y.exercises
    },0)
    return(
        // <p>The Total is {course.parts[0].exercises +course.parts[1].exercises+course.parts[2].exercises+course.parts[3].exercises} </p>
        <p>total of {newSum} exercise</p>
    )
    
    
    // const total = course.exercises.reduce()
}


const Course = ({course}) =>{
    return(
        <>
           <Header course = {course}/>
           <Content course = {course}/>
           <Sum course={course}/>
        </>
    )
}




export default Course