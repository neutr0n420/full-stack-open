import { useState } from 'react'

const Statistics = (props) =>{
  const total = props.good + props.bad + props.neutral
  const average = (props.good + props.bad + props.neutral)/3
  const postivePercentage = (props.good/(props.good + props.bad + props.neutral))*100

  if(props.good === 0 && props.bad === 0 && props.neutral === 0){
    return(
      <div>No Feedback given</div>
    )
  }

  return(
    <>

      <h2>Statistics</h2>
      <table>
        <tbody>

        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>postive</td>
          <td>{postivePercentage}</td>
        </tr>
        </tbody>
      </table>
      {/* <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>postive {postivePercentage}</p> */}


    </>
  )
}


const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.value}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = ()=>{
    const updatedGoodReview = good + 1
    setGood(updatedGoodReview)
  }
  const handleNeutralClick = ()=>{
    const updatedNeutralReview = neutral + 1
    setNeutral(updatedNeutralReview)
  }
  const handleBadClick = ()=>{
    const updatedBadReview = bad + 1
    setBad(updatedBadReview)
  }

  return (
    <>
      <h1>UniCafe</h1>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} value="good"/>
      <Button handleClick={handleNeutralClick} value="Neutral"/>
      <Button handleClick={handleBadClick} value="bad"/>
     
      <div>
        {/* <h2>Statistics</h2>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + bad + neutral}</p>
          <p>average {(good + bad + neutral)/ 3}</p>
          <p>postive {(good/(good + bad + neutral)*100)}%</p> */}
        <Statistics good = {good} bad={bad} neutral = {neutral}/>      </div>
    </>
  )
}

export default App
