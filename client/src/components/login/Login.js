import React from 'react'
import Logo2 from '../../images/logo2.png'
import userServices from '../../services/userServices'

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [response, setResponse] = React.useState("");

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault(); //what does this do? I THINK WE ACTUALLY NEED THIS LINE
        const newUser = {name: username, password} //shorthand
        const res = await userServices.addUser(newUser)
        setResponse(res);
        console.log("Submit Pressed")
    }
    const handleValidate = async (e) =>{
        e.preventDefault(); //what does this do?
        const user_info = {name: username, password} //shorthand
        const res = await userServices.checkUser(user_info)
        setResponse(res)
        console.log("Validating")
    }

    return (
        <div>
            <img src={Logo2}></img> <br></br>
            <h3>For the inner artist in everyone</h3> <br></br>
            <h4>This is the door to a field of happiness</h4> <br></br>
            <h3>Add New User</h3>
            <div>
               <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={username} onChange={handleUsername}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePassword}></input>
                <input type="submit" value="Add User"></input>
            
            </form> </div>

            <h3>Validate User</h3>
            <div>
               <form onSubmit={handleValidate}>
                <label>Name</label>
                <input type="text" value={username} onChange={handleUsername}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePassword}></input>
                <input type="submit" value="Add User"></input>
            </form> 
            </div>
            
            <h3>Response from Server: {response}</h3>
        </div>
    )
}

export default Login
