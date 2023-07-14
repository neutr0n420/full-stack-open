import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getData = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)


}
const create = (addPerson) =>{
    const request =  axios.post(baseUrl, addPerson)
    return request.then(response => response.data)
}
export default {getData, create}