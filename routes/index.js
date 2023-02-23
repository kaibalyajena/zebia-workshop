const express = require('express')
const router = express.Router();



router.get('/',(req,res)=>
    res.send("welcome to home page")
)

router.get('/welcome',(req,res)=>
    res.send("welcome to welcome page")
)

module.exports=router


// const {ensureAuthenticated,forwardAuthenticated} = require('../config/auth')

// router.get('/',forwardAuthenticated,(req,res)=>{
//     res.render("welcome")
// })
// router.get('/dashboard',ensureAuthenticated,(req,res)=>{
//     res.render("dashboard",{
//         user: req.user
//     })
// })

