const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
// const upload = multer({dest: '../public/uploads'});
const Curso = require('../models/Curso');
/* GET users listing. */


router.get('/', (req, res) =>{



    res.render('cursos');


})
.post('/',  (req, res) =>{

   //upload img
const body = req.body;



          curso = new Curso({
             titulo: body.titulo,
             descripcion:body.descripcion,
             categoria: body.categoria,
             rating:body.rating



         });






   curso.save((err,data) =>{
     if(err){
       return res.status(500).json({
         ok:false,
         err
       });
     }

      res.redirect('/cursos/view');
   });
});


router.get('/view', (req, res) =>{

  Curso.find((err, courses) =>{
    if( err ){
      return res.status(400).json({
        ok:false ,
        err
      });
    }

    res.render('view',{
      courses:courses,
      valor:'cursos'
    });
  });

});

router.get('/datos', (req, res) =>{

  Curso.find((err, courses) =>{
    if( err ){
      return res.status(400).json({
        ok:false ,
        err
      });
    }

    res.render('datos',{
      courses:courses

    });
  });

});


router.get('/content', (req, res) =>{



    res.render('context');


});
module.exports = router;
