import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

const User = require("../../models/usersModel");

async function handler(req, res) {
 let user;

 await mongo_connect();
 user = await User.findOne({ email: "andresledesma87@gmail.com" });

 console.log(user);
 console.log(user.createdAt);

 let time = user.createdAt;
 console.log("time: ", time);

 res.status(200).json({
  status: 200,
  time: time,
 });
}

export default handler;
