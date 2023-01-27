const mongoose = require('mongoose')
import { MongoClient } from "mongodb";

async function handler(req, res) {

 
 if (req.method === 'GET') {
  
  let client

  try {
  
   client = await MongoClient.connect(
    "mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Users?retryWrites=true&w=majority"
   );

   if(mongoose.connection.readyState == 0) {
    console.log('mongoose readyState is ' + mongoose.connection.readyState);
   } else {
    console.log('mongoose readyState is ' + mongoose.connection.readyState);
   }
  } catch (error) {
   res.status(500).json({ message: 'Could not connect to database' })
  }

  const db = client.db()

  try {
   console.log('hola desde FIND USER')

   // const result = await db.collection('Users')

   const result = await db.admin().listDatabases()
   // console.log(result)





   res.status(200).json({
    message: 'hola',
    result
   })


  } catch (error) {

   res.status(404).json({ message: 'Hay un error aca' })
  }




 }


}


export default handler