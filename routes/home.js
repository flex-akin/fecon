const router = require('express').Router();
const verify = require('../verifyjwt')
const cookieParser = require("cookie-parser");
const verifyAdmin = require('../verifyAdmin')
const fs = require('fs')





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
    
    router.get('/seminar', (req, res) => {
        res.render('seminar',)
        } )

router.get('/pdf1', (req, res) => {
  const filePath = './public/seminar/fecon/CHOICE OF CAREER web new.pdf';

  // Set the content-type header to 'application/pdf'
  res.setHeader('Content-Type', 'application/pdf');
  // Set the content-disposition header to 'inline' to display the PDF in the browser
  res.setHeader('Content-Disposition', 'inline; filename=file.pdf');

  // Stream the file to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});


module.exports = router;


