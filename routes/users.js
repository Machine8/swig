const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
// const upload = multer({dest: '../public/uploads'});
const User = require('../models/user');
/* GET users listing. */


router.get('/register',(req, res) =>{

   res.render('register');

});

router.post('/register',  (req, res) =>{

   //upload img




      usuario = new User({
             username: req.body.username,
             password: req.body.password,
             age:req.body.age,
             state:req.body.state,
             role:req.body.role
         });



      console.log(req.body.username);


   usuario.save((err,data) =>{
     if(err){
       return res.status(500).json({
         ok:false,
         err
       });
     }

      res.redirect('/user/user');
   });
});




router.get('/user', (req, res) =>{
 User.find((err, user)=>{
   if(err){
     return res.status(500).json({
       ok:false,
       err
     });
   }
   res.render('user',{user});
 });



});
module.exports = router;
