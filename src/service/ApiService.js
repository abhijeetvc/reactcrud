import axios from 'axios'

const USER_BASE_URL="http://localhost:8080/users"

class ApiService{

    addUser(user){
        return axios.post(USER_BASE_URL+'/save',user)
    }

}