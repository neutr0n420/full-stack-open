const Form = (props) =>{
    return (
        <div>
             <form onSubmit={props.addName}>
        <div>
          name: <input 
          value={props.newName}
          onChange={props.handleNameChange}
          />
        </div>
        <div>
        phone: <input 
          value={props.newNumber}
          onChange={props.handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}
export default Form;