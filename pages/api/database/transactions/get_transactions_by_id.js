import { mongo_connect } from "../../../../lib/mongodb/mongo_connect"
import { get_transactions_by_id } from "../../../../lib/transanctions/get_transactions_by_id"

async function handler(req, res) {
 ////////////////////////////////
 // DECLARE GLOBAL VARIABLES
 ////////////////////////////////
 const { category_id } = req.body
 console.log('entro')

 let transactions
 ////////////////////////////////
 // CONNECT TO DATABASE
 ////////////////////////////////
 await mongo_connect()

 ////////////////////////////////
 // GET TRANSACTIONS ARRAY
 ////////////////////////////////
 try {
  transactions = await get_transactions_by_id(category_id)
  console.log(transactions)
 } catch (error) {
  return res.status(500).json({
   status: 500,
   message: 'Something went wrong getting transactions',
   error: error.toString()
  })
 }
 ////////////////////////////////
 // SEND RESPONSE
 ////////////////////////////////
 res.status(200).json({
  status: 200,
  message: 'Get transactions successfully',
  transactions
 })

}


export default handler