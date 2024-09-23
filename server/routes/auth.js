const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        //ver se email está em uso
        const existingUser = await User.findOne({ where: { email }});
        if(existingUser){
            return res.status(400).json({ error: "E-mail already registered"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)


        //create new user
        const user = await User.create({
            email,
            password: hashedPassword,
        })

        res.status(201).json({message: 'User sucessfully registered'})

    }catch (error) {
        console.error(error); 
        res.status(500).json({error: 'Error when registering email'})
    }
    
});

router.post('/', async (req, res) => {
    try {
        const { email, password} = req.body

        const user = await User.findOne({where: { email }})
        if(!user) {
            return res.status(404).json({error: "User not found"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).json({error: 'Invalid Password' })
        }

        const token = jwt.sign({ id: user.id, role: user.role}, 'secret', {expiresIn: '2h'})
        res.json({token, role: user.role})
    } catch(error) {
        res.status(500).json({error: "login error"})
    }
})

module.exports = router; // Adicione isso ao final do arquivo auth.js
