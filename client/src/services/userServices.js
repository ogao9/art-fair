import axios from "axios";

const userServices = {
    addUser: (new_user) => {
        return axios
            .post("/users", new_user)
            .then( res => res.data)
            .catch((err) => console.log(err));
    },
    checkUser: (user_info) => {
        return axios
            .post("/users/login", user_info)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    },
    saveCard: (cardToSave) => {
        return axios
            .put("/users/saveCard", cardToSave)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    },
    updatePersonalInfo: (updated_info) =>{
        return axios.put("/users/updatePersonalInfo", updated_info).then(res=>res.data).catch(err=>console.log(err));
    }
};

export default userServices;
