import { mongo_connect } from "../../../lib/mongo_connect";
const Organization = require("../models/organizationModel");

async function handler(req, res) {
 if (req.method === "POST") {
  mongo_connect();

  try {
   const organizations = await Organization.find();

   console.log(organizations);

   

   console.log(req.body);

   res.status(200).json({
    status: 200,
    message: "Get organization succesfull"
   });
  } catch (error) {
   res.status(500).json({
    status: 500,
    message: error,
   });
  }
 }
}

export default handler;
