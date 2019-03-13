const mongoose = require('mongoose');


const {Schema} = mongoose;

const ratingSchema = new Schema({
      scale:{
        type:Number,
        defaul:0,
        min:0,
        max:3
      }
});

const CursoSchema = new Schema({
      titulo:{
        type:String

      },
      descripcion:{
        type:String
      },
      categoria:{
        type:String
      },

      rating:{type:String},

      filename:{type:String}
      ,
      like:{
        type:Number,
        default:0
      },
      views:{
        type:Number,
        default: 0

      },
      timestamp:{
        type:Date,
        default: Date.now()
      }
});
// const path = require('path');
//
// ImageSchema.virtual('uniqueId')// propiedad que no se guardara en la base de datos
//   .get(function (){
//       return  this.filename.replace(path.extname(this.filename), '');
//   });


module.exports = mongoose.model('Curso',CursoSchema );
