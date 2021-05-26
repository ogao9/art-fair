const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

const users = [];

router.get('/', (req,res)=>{
    res.status(200).json(users)
})

//we don't want to store our passwords in plain text, if someone gets into our database: trouble
//that's why we use a hashing function and salts (bcrypt)
//hashing the same password will give us the same random string, but the salt is always unique
//hashing the salt and the original password gives unique hashings
router.post('/', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const new_user = {
            name: req.body.name,
            password: hashedPassword
        }
        res.status(201).json(new_user)
        users.push(new_user)
        console.log(new_user)
    }catch(error){
        console.log(error);
        res.status(500).send("error")
    }
    
})

//compare password
//find returns first element in array that satisfies the testing function
router.post('/login', async (req,res)=>{
    const user = users.find(user => user.name === req.body.name)
    if(!user){
        return res.status(400).send('Cannot Find User')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password))
             res.send("User Success!")
        else
            res.send('Wrong Password')
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;