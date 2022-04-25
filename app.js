const express = require('express')
const app = express()
const userModel  = require('./user')

app.use(express.json())

app.post('/SavingsAccount', async(req,res,next) => {
   try {
    let userDetail = req.body;
    console.log(userDetail)
    let response = await userModel.insertMany([userDetail]);
    res.json(response)
    

   } catch (error) {
       res.json(error)
       
   }

})
app.post('/FixedAccount', async(req,res,next) => {
   try {
    let userDetail = req.body;
    console.log(userDetail)
    let response = await userModel.insertMany([userDetail]);
    res.json(response)
   } catch (error) {
       res.json(error)
       
   }


})



module.exports = app