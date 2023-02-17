const mongoose = require('mongoose')
const User = require("../models/usersModel");
const Organization = require('../models/organizationModel')

async function handler(req, res) {

 if (req.method === "GET") {

  if (mongoose.connection.readyState === 0) {
   mongoose.connect("mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.log('Error connectiong to the database ', error))
  } else {
   console.log('there is already an active connection')
  }

  console.log('ENTRO AL GET')

  const organizations = await Organization.find()
  const users = await User.find()

  console.log(users)
  console.log(organizations)

  res.status(200).json({
   message: 'users sent from POST',
   organizations: organizations,
   users: users
  })


 }

 if (req.method === 'POST') {

  if (mongoose.connection.readyState === 0) {
   mongoose.connect("mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.log('Error connectiong to the database ', error))
  } else {
   console.log('there is already an active connection')
  }

  console.log('ENTRO AL POST')

  const organizations = await Organization.find()
  const users = await User.find()

  console.log(users)
  console.log(organizations)

  res.status(200).json({
   message: 'users sent from POST',
   organizations: organizations,
   users: users
  })


 }


}

export default handler



/* 



 if (req.method === 'POST') {

  if (mongoose.connection.readyState === 0) {
   mongoose.connect("mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.log('Error connectiong to the database ', error))
  } else {
   console.log('there is already an active connection')
  }


  try {


   console.log('entro al create')

   console.log(req.method)




   res.status(201).json({
    message: 'User Organization Created',
   })

  } catch (error) {
   res.status(404).json({
    message: 'Something went wrong',
    error: error
   })
  }










 }


 

*/