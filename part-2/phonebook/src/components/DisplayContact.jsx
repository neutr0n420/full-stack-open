import { v4 as uuidv4 } from 'uuid';
const DisplayContact = ({persons}) =>{
   
    return(
        <ul>
            {persons.map(person => <li key={uuidv4()}>{person.name} {person.number} </li>)}
            
        </ul>
    )
}
export default DisplayContact