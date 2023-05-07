import React from 'react'


const Header = ({course}) => <h2>{course}</h2>
const Part = (props) => <p>{props.name} {props.exercise}</p>


// so Here we are making a new component named content which will render the whole part section.lets look it line by line
//initlaizing the function content and taking the parameter by using the destrucuting the props method
const Content = ({course}) =>{
    // In the variable name we are storing the the part name and the exersices that are coming. Here we are itrating over every single part by using the map function and combining the part name with the part exersice in the one part only. 
    const name = course.parts.map((part,i)=> <p key={i}>{part.name} {part.exercises}</p>)
    //This above line is really important.
    return(
        <div>
            {name} 
        </div>
    )
}


const Course = ({course}) =>{
    return(
        <>
           <Header course = {course.name}/>
           <Content course = {course}/>
        </>
    )
}




export default Course