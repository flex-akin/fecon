const router = require('express').Router();
const { details } = require('@hapi/joi/lib/errors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require('path')

const User = require('../model/User')
const Examuser = require('../model/Examuser')

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



if (req.file.size > 5000000) return res.status(400).render("../views/register",{message : "file is too large"})
 
// const mimetype =(req.file.mimetype);
// if(mimetype == 'image/jpeg' || mimetype == 'image/jpg' ) return res.status(400).render("../views/register",{message : "Invalid file format"})
const {error} = registerValidation(req.body);
//if (error) return res.status(400).json({message : error.details[0].message})
if (error) return res.status(400).render("../views/register",{message : error.details[0].message})

// res.send(error.details[0].message)

//CHECK FOR DUPLICATE 
const emailExist = await User.findOne({ studentPhoneNumber: req.body.studentPhoneNumber});
if (emailExist) return res.status(400).render("../views/register",{message : "Phone number Already Exists"})


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

// EXAM REGISTRATION

router.post('/examReg', async (req, res)=> {
 try {

    const subjects = [{
        subject: req.body.sub1,
        score: null,
    },
    {
        subject: req.body.sub2,
        score: null,
    },
    {
        subject: req.body.sub3,
        score: null,
    },
    {
        subject: req.body.sub4,
        score: null,
    },
    {
        subject: req.body.sub5,
        score: null,
    },
    {
        subject: req.body.sub6,
        score: null,
    },
    {
        subject: req.body.sub7,
        score: null,
    },
    {
        subject: req.body.sub8,
        score: null,
    }
]
for ( i = subjects.length-1; i>=0; i--){
    if (subjects[i].subject == ''){
        subjects.splice(i,1)
    }
    
}
console.log(subjects)

        const examuser = new Examuser ({
        
         fullName : req.body.fullName,
         userId : req.body.userId,
         gender : req.body.gender,
         phoneNumber : req.body.phoneNumber,
         dateOfBirth : req.body.dateOfBirth,
         year : req.body.year,
         email : req.body.email,
         classe : req.body.classe,
         state : req.body.state,
         examCity : req.body.examCity,
         center : req.body.center,
         subject: subjects,
        
         examDate : req.body.examDate,
         image : req.body.image,
        });
        const saveduser = await examuser.save();
            
        res.render("../views/print", saveduser);
            //  console.log(saveduser)

        }catch (err){a
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
if (!user) return res.status(400).render('../views/login',{message:"User doesn't exist"});
    
       
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
    res.cookie("details", " ", {maxAge: 1});
    res.redirect('/')

})

router.get('/allusers', async (req, res) => {
    const users =  await User.find()
    res.status(200).json({
        users
    })

})

router.get('/getsubjects/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ userId: id })
    if (!user){
        return res.status(404).json({status: false})
    }
    
    const subject = await Examuser.findOne({ userId: id })
    console.log(subject)
    res.status(200).json({
        status: true,
        subjects : subject.subject,
    })



})
module.exports = router;