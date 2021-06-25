import axios from 'axios'

const cardServices = {
    getAllCards: async () =>{
        try{
            let response = await axios.get('/api/cards')
            return response.data
        }
        catch(error){
            console.log(error.toJSON())
        }
    },
    getCategoryCards: async (category) =>{
        try{
            let response = await axios.get(`api/cards/${category}`, {baseURL: '/'})
            return response.data
        }catch(error){
            console.log(error.toJSON())
        }
    },
    getFeaturedCards: async () =>{
        try{
            let response = await axios.get('/api/cards/featured')
            return response.data
        }
        catch(error){
            console.log(error);
        }
    },
    getSavedCards: async(userID)=>{
        try{
            let response = await axios.get(`api/cards/savedCards/${userID}`, {baseURL: '/'})
            return response.data;
        }catch(error){
            console.log(error)
        }
    },
    getYourCards: async(userID)=>{
        try{
            let response = await axios.get(`api/cards/yourCards/${userID}`, {baseURL: '/'})
            return response.data;
        }catch(error){
            console.log(error)
        }
    },
    getOneCard: async(id)=>{
        try{
            let response = await axios.get(`/api/cards/one/${id}`);
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    },
    postCard: (newCard)=>{
        return axios.post('/api/cards', newCard)
                .then(res => res.data)
                .catch(err => console.log(err))
    },
    deleteCard: (id)=>{
        axios.delete(`/api/cards/${id}`)
                .then(res => res.data)
                .catch(err => console.log(err))
    },
    updateCard: (id, updated_card)=>{
        axios.put(`/api/cards/${id}`,{...updated_card})
                .then(res => res.data)
                .catch(err => console.log(err))
    },
}

export default cardServices;



