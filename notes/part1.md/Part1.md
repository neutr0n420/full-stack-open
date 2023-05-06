# Basic React Components
- Components
- JSX
- Props

## Components
- Components are independent and reuable pices of code.
- We make component by using the arrow function.
- The basic component is as follow
```js
const HelloWorld = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
const App() =()=>{
    return(
        <div>
            <HelloWorld/>
        </div>
    )
}
```

## JSX
- Jsx is very much similar to the HTML. But the whole JSX is basicially a javascript which is been feeded to the end server. 
- We use babble to compile the jsx to vanila Javascript.
- This is how a JSX look like after compiling.

```js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
```

## Props
- Like we pass the value in the simple function we can do the same thing in Componet by using the Props.
```jsx
<!-- Hello.jsx -->
const Hello =>(props) {
    return(
        <div>
            <p>Hello, {props.name}</p>
        </div>
    )
}

<!-- App.jsx -->
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' />
      <Hello name='Daisy' />
    </div>
  )
}
```

## Some important points about React
- If facing some error while writing a React code one must do console.log() this sometimes help to debug the problem.
- React Component name must be capitalized. If it is defined in lower case it just treat as regular jsx content.
- React contains only one root element. And can have n number of branches for that root element.
- React cannot Render the whole object in the Componet, however if iterated over the object then it can work.

## Variables in Javascript
- There are two type of variables that we can assign in javascirpt.
    - Const: Once the value is assigned to the const variable that cannot be changed.
    - Let: Act as a normal variable.

## Array in Javascript
- Collection of same datatype in a single variable.
- There are diffrent useful methods of Array that we will be using in future. Some of the methods are as follow:
    - forEach():
        - The `forEach` method calls the function for each element in an array.
        ```jsx
        const t = [1,2,3,4]
        t.forEach(value =>{
            console.log(value) // It will print [1,2,3,4] 
        })
        ```
    - concat():
        - Concat method is used to add new element to the array, but it make a copy of existing array and add element in that copy.
    
        ```js
        const t = [1, -1, 3]
        const t2 = t.concat(5)  // creates new array
        console.log(t)  // [1, -1, 3] is printed
        console.log(t2) // [1, -1, 3, 5] is printed
        ```
    - Map():
        - It creates a new array from calling a functions for every array element.
        ```jsx
        const m2 = t.map(value => '<li>' + value + '</li>')
        console.log(m2)  
        // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
        ```