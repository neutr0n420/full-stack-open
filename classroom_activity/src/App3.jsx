import React from 'react'
import { useState } from 'react'

const History = (props)=>{
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons.
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) =>{
  return(
  <button onClick={handleClick}>{text}</button>
  )
}


function App3() {
  
  // Defining a state where we are changing the leftClick 
    const [leftClick, setLeftClick ] = useState(0)
  // defining the state where we are changing the rightClick
    const [rightClick, setRightClick] = useState(0)
  // Here we are defining a new state of array were we are going to irrate the click on which click we clicked.
    const [allClicks, setAllClicks] = useState([])
  // This state is going to sum the total leftClick and the rightClick.
    const [total, setTotal] = useState(0)

  // make a function which is been called while clicked on the button.
    const handleLeftClick = () =>{
      // Here we pushing the value in the empty array named 'allClicked'. 
      allClicks.push('L')
      // we are decarling the variable so that  we are not doing the 2~3 things simultously.
      const updatedLeftClick = leftClick + 1
      // updateting the clicks value every time we click on the button
      setAllClicks(allClicks)
      // Updating the click and adding the value in the array of the state.
      setLeftClick(updatedLeftClick)
      // Updateing the total clicks everytime a person click on the button.
      setTotal(updatedLeftClick+rightClick)
    }

    const handleRightClick = () => {
      setAllClicks(allClicks.concat('R'))
      const updatedRigthClick = rightClick+1
      setRightClick(updatedRigthClick)
      setTotal(leftClick+updatedRigthClick)
    }
    // const [click, setClick] = useState({
    //   left: 0,
    //   right: 0
    // })
    // const handleLeftClick = ()=>{
    //   const newClick = {
    //     ...click,
    //     left: click.left + 1,
    //   }
    //   setClick(newClick)
    // } 
    // const handleRightClick = () =>{
    //   const newClick = {
    //     ...click,
    //     right: click.right+1
    //   }
    //   setClick(newClick)
    // }


    // const setToZero = () =>{
      
    //   setClick(click.left = 1, click.right=1)
    // }
  return (
    <>
        {leftClick}
        <Button handleClick={handleLeftClick} text="left"/>
        <Button handleClick={handleRightClick} text="Right"/>
        {rightClick}
        <History allClicks = {allClicks}/>
          {/* So what join is doing is removing the induvial element from the array and placing it after the space between the element. */}
        {/* <p>{allClicks.join(' ')}</p>
        <p>Total = {total}</p> */}

    </>
  )
}

export default App3