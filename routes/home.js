const router = require('express').Router();
const verify = require('../verifyjwt')
const cookieParser = require("cookie-parser");
const verifyAdmin = require('../verifyAdmin')





router.get('/', verify, (req, res)=> {
    
    res.render('home', req.user)
});

router.get('/register', (req, res)=> {
    res.render('register', null)
});

router.get('/login', (req, res)=> {
    res.render('login', null)
});

router.get('/examreg', verify, (req, res)=> {
    res.render('examReg', req.user)
});


router.get('/printpage',  (req, res) => {
    res.render('print', req.cookies.details)
} )

router.get('/admin', verifyAdmin, (req, res) => {
res.render('admin', req.user)
} )

router.get('/adminresult', verifyAdmin, (req, res) => {
    res.render('uploadresult',)
    } )
    

// router.get('/go', (req, res)=> {
//     res.render('register', null)
// });

module.exports = router;


