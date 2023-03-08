import { mongo_connect } from "../../../lib/mongo_connect";

const User = require("../models/usersModel");

async function handler(req, res) {
 if (req.method === "GET") {
  ////////////////////////////////
  // DECLARE GLOBAL VARIABLES
  ////////////////////////////////
  const { email } = req.body

  ////////////////////////////////
  // CONNECT TO THE DATABASE
  ////////////////////////////////
  await mongo_connect();

  ////////////////////////////////
  // FIND USER
  ////////////////////////////////
  try {

   const user = await User.findOne({email: email});

   console.log(user);





  } catch (error) {
   return res.status(422).json({
    status: 422,
    message: `This user: `,
   });
  }


  res.status(200).json({
   message: "users sent",
   users: users,
  });
 }
}

export default handler;
