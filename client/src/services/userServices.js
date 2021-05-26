// /users and /users/login
import axios from 'axios'


const userServices = {
    addUser: (new_user)=>{
        return axios.post('/users', new_user)
                    .then( ()=> "New User added!")
                    .catch(err => console.log(err))
    },
    checkUser: (user_info)=>{
        return axios.post('/users/login', user_info)
            .then( res => res.data)
            .catch(err => console.log(err))
    },
}


export default userServices