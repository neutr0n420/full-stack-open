import {useState} from 'react'
const App2 = (props) =>{
    const [counter, setCounter] = useState(0)
    const increaseByOne = () => setCounter(counter+1)
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter-1)
    
    const Display = ({counter}) =>{
        return(
            <div>{counter}</div>
        )
    }

    const Button = ({handleClick, text}) =>{
        return(
            <button onClick={handleClick}>
                {text}
            </button>
        )
    }

    return(
        <div>
            <Display counter = {counter}/>
            {/* <div>{counter}</div> */}
            <Button handleClick={increaseByOne}
            text = {"plus"}
            />
            <Button handleClick={setToZero}
            text = {"zero"}
            />
            <Button handleClick={decreaseByOne}
            text = {"minus"}
            />
            {/* <button onClick={increaseByOne}>plus</button>
            <button onClick={setToZero}>Zero</button> */}
        </div>
        
    )
} 

export default App2 