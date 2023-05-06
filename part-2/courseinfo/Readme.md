# Basic React Components
- Components
- JSX
- Props

## Components
- If we see our index.html file we will see that there is not a single element in it, all the content that we need is been defined using the ` component ` in react.  

## JSX
- Jsx is very much similar to the HTML. But the whole JSX is basicially a javascript which is been feeded to the end server. 
- We use babble to to compile the jsx to vanila Javascript.
-  This is how a JSX look like after compiling.
```
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
- Like we pass the value in the simple function we can  do the same thing in Componet by using the Props.
```
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
