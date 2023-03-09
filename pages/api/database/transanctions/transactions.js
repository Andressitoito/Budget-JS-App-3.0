import { mongo_connect } from "../../../../lib/mongo_connect";

const Transaction = require("../../models/transactionModel");

async function handler(req, res) {

console.log('GET IN REQ')

await mongo_connect()

 const transactions = await Transaction.find().populate('category')

 console.log(transactions)

 res.status(200).json({
  transactions,
  message: 'there is here something'
 })

}

export default handler
