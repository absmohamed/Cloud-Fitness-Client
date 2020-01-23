import axiso from 'axiso'
import Axios from 'axios'

const deployedServer = ''
//const deployServer = heroku deployed url

//Create an axios instance
export default Axios.create({
    baseURL: deployedServer || "http:/.localhost: 3000",
    timeout: 5000,
    withCredentials: true
})


