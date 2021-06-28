import axios from "axios";

const userServices = {
    addUser: (new_user) => {
        return axios
            .post("/users", new_user)
            .then((res) => res.data)
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
            .put("/users/saveCard", cardToSave,  {baseURL: '/'})
            .then((res) => res.data) //the response is the entire updated user
            .catch((err) => console.log(err));
    },
    removeSavedCard: (userCardInfo)=>{
        //I'm sending userID and cardID
        return axios.put("/users/removeSavedCard", userCardInfo)
        .then(res=> res.data) //the response is the entire updated user
        .catch(err=>console.log(err))
    },
    removeYourCard: (userCardInfo)=>{
        //I'm sending userID and cardID
        return axios.put("/users/removeYourCard", userCardInfo)
        .then(res=> res.data) //the response is the entire updated user
        .catch(err=>console.log(err))
    },
    updatePersonalInfo: (updated_info) => {
        return axios
            .put("/users/updatePersonalInfo", updated_info)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    },
    addNewCard: (userCardInfo) => {
        //I'm sending userID and cardID
        return axios.put("/users/addNewCard", userCardInfo)
        .then(res=> res.data)
        .catch(err=>console.log(err))
    },
    
};

export default userServices;
