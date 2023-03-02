import { mongo_connect } from "../../../lib/mongo_connect";

const mongoose = require("mongoose");
const User = require("../models/usersModel");

async function handler(req, res) {
 // const userFromReq = {
 //  name: 'Michael Jackson',
 //  given_name: 'Michael',
 //  family_name: 'Jackson',
 //  picture: 'https://e-cdn-images.dzcdn.net/images/artist/86b13342a65ffe06fa151ce353a7b278/264x264-000000-80-0-0.jpg',
 //  email: 'MichaelJackson@mail.com'
 // }

 if (req.method === "GET") {
  
  await mongo_connect()


  try {

  } catch (error) {
   return res.status(422).json({
    status: 422,
    message: `This user: `
   })
  }
  const users = await User.find()

  console.log(users)

  res.status(200).json({
   message: 'users sent',
   users: users
  })

 }

 const userFromReq = req.body;

 if (req.method === "POST") {
  try {
   mongoose.connect(
    "mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Users?retryWrites=true&w=majority",
    {
     useNewUrlParser: true,
    }
   );
  } catch (error) {
   return res.status(500).json({ message: "Could not connect to database" });
  }

  let isUser;

  try {
   const users = await User.find();

   isUser = await users.find((user) => user.email === userFromReq.email);
  } catch (error) {
   return res.status(500).json({ message: "Could not search in users" });
  }

  res.status(200).json({
   message: "hi from find users",
   userExists: isUser,
  });
 }
}

export default handler;
