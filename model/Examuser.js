const mongoose = require('mongoose');   

const examUserSchema = new mongoose.Schema({

    fullName : {
        type: String,
        required : true,
        min : 1,
        max : 255 
    },

    userId : {
        type: String,
        required : true,
        

    },

    gender : {
        type: String,
        required : true,
        
    },

    phoneNumber : {
        type: String,
        required : true,
        min : 1,
        max : 255
    },
    email : {
        type: String,
        required : true,
        min : 1,
        max : 255

    },
     dateOfBirth: {
        type: String,
        required : true,
    },

    year : {
        type: String,
        required : true,
        min : 1,
        max : 1024
    },

    classe : {
        type: String,
        required: true,
        min : 1,
        
    },
   
    state : {
        type: String,
        required : true,
    

    },
    examCity : {
        type: String,
        required : true,
       
    },

    center : {
        type: String,
        required : true,
        
    },

    sub1 : {
        type: String,
        
        min : 1,
        max : 255
    },
    sub2 : {
        type: String,
        
        min : 1,
        max : 255


    },
    sub3: {
        type: String,
       
        min  : 1,
        max : 255

    },

    sub4 : {
        type: String,
        
        min : 1,
        max : 255
    },

    sub5 : {
        type: String,
        
        min : 1,
        max : 255
    },
    sub6 : {
        type: String,
        
        min : 1,
        max : 255
    },
    sub7 : {
        type: String,
        
        min : 1,
        max : 255 
        
    },
    sub8 : {
        type: String,
        
        min : 1,
        max : 255 
        
    },
  
    examDate : {
        type: String,
        required : true
    },
    image : {
        type: String,
    }

});

module.exports = mongoose.model('Examuser', examUserSchema);
