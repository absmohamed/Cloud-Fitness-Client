import axios from 'axios'

const deployedServer = ''
//const deployServer = heroku deployed url

//Create an axios instance
export default axios.create({
    baseURL: deployedServer || "http:/.localhost: 5000",
    timeout: 5000,
    withCredentials: true
})


