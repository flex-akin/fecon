const router = require('express').Router();
const fs = require('fs')



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

  router.get('/pdf2', (req, res) => {
    const filePath = './public/seminar/fecon/Creativity - The Discipline of Innovation. By Drucker, Peter.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf3', (req, res) => {
    const filePath = './public/seminar/fecon/FORCE.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf4', (req, res) => {
    const filePath = './public/seminar/fecon/Learn Speed Reading.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf5', (req, res) => {
    const filePath = './public/seminar/fecon/NINE LETTER WORD.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf6', (req, res) => {
    const filePath = './public/seminar/fecon/PHYSICS, WORK, ENERGY AND POWER.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf7', (req, res) => {
    const filePath = './public/seminar/fecon/PRACTICAL HELPS FOR SOUL WINNERS.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf8', (req, res) => {
    const filePath = './public/seminar/fecon/PREPARATION FOR AND PARTICIPATION IN MISSION.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf9', (req, res) => {
    const filePath = './public/seminar/fecon/RIGHTEOUS LIVING IN A PERVERSE ENVIRONMENT.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf10', (req, res) => {
    const filePath = './public/seminar/fecon/Self-Discipline in 10 Days.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  

  router.get('/pdf11', (req, res) => {
    const filePath = './public/seminar/fecon/THE BASICS OF CHRISTIAN LIVING (1).pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf12', (req, res) => {
    const filePath = './public/seminar/fecon/THE CRY OF THE LOST AND THE CONCERN OF THE SAINTS.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf13', (req, res) => {
    const filePath = './public/seminar/fecon/THE POTENCY OF OUR SPIRITUAL WEAPON1.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf14', (req, res) => {
    const filePath = './public/seminar/fecon/THE REALITY OF THE CHRISTIAN LIFE.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  router.get('/pdf15', (req, res) => {
    const filePath = './public/seminar/fecon/The Science of Self Discipline.pdf';
  
    // Set the content-type header to 'application/pdf'
    res.setHeader('Content-Type', 'application/pdf');
    // Set the content-disposition header to 'inline' to display the PDF in the browser
    res.setHeader('Content-Disposition', 'inline; filename=file.pdf');
  
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
  
  

  module.exports = router;