const router = require('express').Router();
const verify = require('../verifyjwt')
const cookieParser = require("cookie-parser");



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



// router.get('/go', (req, res)=> {
//     res.render('register', null)
// });

module.exports = router;