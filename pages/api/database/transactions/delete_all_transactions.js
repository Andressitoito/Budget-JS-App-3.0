import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { delete_all_transactions } from "../../../../lib/transactions/delete_all_transactions";

async function handler(req, res) {
 if (req.method === "DELETE") {
  ////////////////////////////////
  // DECLARE GLOBAL VARIABLES
  ////////////////////////////////
  const { category_id } = req.body;

  let deleted_transactions
  ////////////////////////////////
  // CONNECT TO THE DATABASE
  ////////////////////////////////
  await mongo_connect();

  ////////////////////////////////
  // DELETE TRANSACTIONS
  ////////////////////////////////
  try {
  deleted_transactions =  await delete_all_transactions(category_id)
  } catch (error) {
   return res.status(422).json({
    status: 422,
    message: "Something went wrong deleting transaction",
    error: error.toString(),
   });
  }

  ////////////////////////////////
  // SEND RESPONSE
  ////////////////////////////////
  res.status(200).json({
   status: 200,
   message: deleted_transactions,
  })

 }
}

export default handler;
