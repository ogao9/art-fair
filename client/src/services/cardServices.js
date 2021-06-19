import axios from 'axios'

//What we are doing here is making requests with axios to our node.js server, which responds with what we specified
const cardServices = {
    getAll: async () =>{
        try{
            let response = await axios.get('/api/cards')
            return response.data
        }
        catch(error){
            console.log(error.toJSON())
        }
    },
    getCategory: async (category) =>{
        try{
            let response = await axios.get(`api/cards/${category}`, {baseURL: '/'})
            return response.data
        }catch(error){
            console.log(error.toJSON())
        }
    },
    getFeatured: async () =>{
        try{
            let response = await axios.get('/api/cards/featured')
            return response.data
        }
        catch(error){
            console.log(error);
        }
    },
    getOne: async(id)=>{
        try{
            let response = await axios.get(`/api/cards/${id}`)
            return response.data
        }
        catch(error){
            console.log(error)
        }
    },
    deleteCard: (id)=>{
        axios.delete(`/api/cards/${id}`)
                .catch(err => console.log(err))
    },
    updateCard: (id, updated_card)=>{
        axios.put(`/api/cards/${id}`,{...updated_card})
                .catch(err => console.log(err))
    },
    postCard: (newCard)=>{
        return axios.post('/api/cards', {...newCard})
                .then(res => res.data)
                .catch(err => console.log(err))
    }
}

export default cardServices;



