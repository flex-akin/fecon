const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({

    title : {
        type: String,
        required : true,
        min : 1,
        max : 255 
    },

    status : {
        type: String,
        required : true,
        min : 1,
        max : 255

    },

    year : {
        type: Date,
        required : true,
        default: Date.now
    },

    surname : {
        type: String,
        required : true,
        min : 6,
        max : 255
    },
    otherNames : {
        type: String,
        required : true,
        min : 1,
        max : 255

    },
     dateOfBirth: {
        type: Date,
        required : true,
    },

    gender : {
        type: String,
        required : true,
        min : 6,
        max : 1024
    },

    studentPhoneNumber : {
        type: String,
        required: true,
        min : 11,
        max: 11
    },
    fathersPhoneNumber : {
        type: String,
        required : true,
        min : 11,
        max : 11


    },
    mothersPhoneNumber : {
        type: String,
        required : true,
        min : 11,
        max : 11

    },
    email : {
        type: String,
        required : true,
        min : 6,
        max : 1024
    },

    classe : {
        type: String,
        required : true,
        min : 6,
        max : 1024
    },

    state : {
        type: String,
        required : true,
        min : 1,
        max : 255
    },
    LGAOfOrigin : {
        type: String,
        required : true,
        min : 1,
        max : 255


    },
     town : {
        type: String,
        required : true,
        min : 1,
        max : 255

    },

    school : {
        type: String,
        required : true,
        min : 1,
        max : 1024
    },

    userId : {
        type: String,
        required : true,
        min : 6,
        max : 255
    },
    password : {
        type: String,
        required : true,
        min : 6,
        max : 255
    },
    date : {
        type: String,
        required : true,
        default: Date.now
    },
    image : {
        type: String,
        required : true
    },
    isAdmin : {
        type: Boolean,
    }

});

module.exports = mongoose.model('User', userSchema);
