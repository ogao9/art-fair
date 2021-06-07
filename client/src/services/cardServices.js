//What we are doing here is making requests with axios to our node.js server, which responds with what we specified
import axios from 'axios'


//axios returns data in json form by default (responseType)
//axios automatically converts all requests and responses to JSON by default
//the data attribute of an axios response is whatever the database returns
//async await is just a cleaner way to deal with Promises (.then and .catch)
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
    getSome: async (card_ids) =>{
        try{
            let response = await axios.get('/api/someCards')
        }
        catch(error){
            console.log(error);
        }
    },
    getOne: async(id)=>{
        try{
            let response = await axios.get(`/api/cards/${id}`)
            return response.data;
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



//The problem I had earlier is that I returned inside the then function and not the outermost function
// const cardServices = {
//     getAll: () =>{
//         return axios.get('/api/cards').then(res => res.data).catch(err=>console.log(err))
//     }
// }