const express = require('express');
const dotenv = require('dotenv');
const {getAllProducts,searchItem} = require('./mydb.js')



dotenv.config();
const app = express();

app.use('/',express.static(__dirname+'/public'));








// GET ALL PRODUCTS
app.get('/shopping',(req,res) => {
  getAllProducts()

  .then(result => {
    console.log(result);
    res.json(result)
  })

  .catch(err => {
    console.log( err);
    res.json({message:err.message})
  })


})


// ----search ----
app.get('/search',(req,res) => {
  searchItem(req.query.q)

  .then(result => {
    // console.log(req.qurey.q);
    res.json(result)
  })

  .catch(err => {
    console.log( err);
    res.json({message:err.message})
  })


})








const port = process.env.PORT || 5000 ;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);

})
