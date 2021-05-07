import React from 'react'
import {useState, useEffect} from 'react'

import AddForm from './AddForm'
import Login from './Login'

const Admin = () => {
    const [loginInfo, setLoginInfo] = useState([]);
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(()=>{
        const setData = async() =>{
          const logindata = await getLoginData();
          setLoginInfo(logindata)
        }
        setData();
      },[])   //useEffect only happens if something in this array changes

    const getLoginData = async () => {
        const response = await fetch('http://localhost:5000/credentials')
        const data = await response.json();
        return data;
    }

    //Function: Adds a card to db.json
    //          new_card_info is passed from AddForm.js, where this function is called
    const addbtn = async(new_card_info) => {
    
        const fetchDetails = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(new_card_info) //stringify converts an object to a JSON string (the format we want)
        }

        const response = await fetch('http://localhost:5000/works', fetchDetails);
        const data = await response.json(); //set data to the card we just created
        // setArtInfo([...artInfo, data]);
    }

    return (
        <div>
            <Login info={loginInfo} setAuthenticate={setAuthenticate}/>

            {
                authenticate ? 
                <AddForm onAdd={addbtn}/>
                : null
            }
            
        </div>
    )
}

export default Admin
