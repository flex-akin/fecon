const router = require('express').Router();
const { details } = require('@hapi/joi/lib/errors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')

const User = require('../model/User')

const {registerValidation, loginValidation} = require("../validate")
const multer = require('multer') 

var storage = multer.diskStorage({
destination: function(req, file, cb){
    cb(null, "./public/uploads/")
},

filename: function(req, file, cb){
    cb(null, file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname));
    
},


})


const upload = multer ({
    storage: storage,
    
    
  
}).single("image");






router.post('/register', upload, async (req, res)=> {
// const {error} =  schema.validate(req.body)



if (req.file.size > 1000000) return res.status(400).render("../views/register",{message : "file is too large"})
 
// const mimetype =(req.file.mimetype);

// if(mimetype == 'image/jpeg' || mimetype == 'image/jpg' ) return res.status(400).render("../views/register",{message : "Invalid file format"})





const {error} = registerValidation(req.body);
//if (error) return res.status(400).json({message : error.details[0].message})
if (error) return res.status(400).render("../views/register",{message : error.details[0].message})

// res.send(error.details[0].message)

//CHECK FOR DUPLICATE 
const emailExist = await User.findOne({ email: req.body.email});
if (emailExist) return res.status(400).render("../views/register",{message : "Email Already Exists"})


//HASH THE PASSWORD
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);



    try {
    const user = new User ({
    
     title : req.body.title,
     status : req.body.status,
     year : req.body.year,
     surname : req.body.surname,
     otherNames : req.body.otherNames,
     dateOfBirth : req.body.dateOfBirth,
     gender : req.body.gender,
     studentPhoneNumber : req.body.studentPhoneNumber,
     fathersPhoneNumber : req.body.fathersPhoneNumber,
     mothersPhoneNumber : req.body.mothersPhoneNumber,
     email : req.body.email,
     classe : req.body.classe,
     state : req.body.state,
     LGAOfOrigin : req.body.LGAOfOrigin,
     town : req.body.town,
     school : req.body.school,
     image : req.file.filename,
     userId : req.body.userId,
     password : hashPassword,
     
     
    });
        const savedUser = await user.save();
        res.render("../views/login", {message : "success"});

        
        
    }catch (err){
        console.log('error', err)
        res.status(400).json({message : "error"})
        
    }

   
  

});




// LOGIN
router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    //CHECK FOR DUPLICATE 
    

const user = await User.findOne({ userId : req.body.userId});
if (!user) return res.status(400).render('../views/login',{message:"USER doesn't exist"});
    
       
// CHECK IF PASSWORD IS COORECT


const validPassword = await bcrypt.compare(req.body.password, user.password)
if(!validPassword) return res.status(400).render('../views/login',{message:"INVALID PASSWORD"});

// CREATE AND ASSIGN A TOKEN
const token = jwt.sign({user: user}, process.env.TOKEN_SECRET)
res.cookie("auth_token", token, {
    httpOnly: true })

res.redirect('/index/home/');



//res.send('logged in')
});


router.get('/logout', async (req, res) => {
    res.cookie("auth_token", " ", {maxAge: 1});
    res.redirect('/')


})

module.exports = router;