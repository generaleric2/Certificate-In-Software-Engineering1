const express = require('express');
const router = express.Router();
const Register = require("../models/userModels");





router.get("/register", (req, res) => {
    res.render('register');
  })





router.post('/register',async(req,res)=>{
    try{
        const reg = new Register(req.body);
        await reg.save();
        res.redirect('/register')
    } catch(err){
        res.status(400).send('sorry something went wrong');
        console.log(err);
    }
})















module.exports = router;






