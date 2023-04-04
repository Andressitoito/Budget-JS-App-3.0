import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { delete_transaction } from "../../../../lib/transactions/delete_transaction";

async function handler(req, res) {
 if (req.method === "DELETE") {
  ////////////////////////////////
  // DECLARE GLOBAL VARIABLES
  ////////////////////////////////
  const { transaction_id, transaction_item } = req.body;

  let deleted_transaction_message
  ////////////////////////////////
  // CONNECT TO THE DATABASE
  ////////////////////////////////
  await mongo_connect();

  ////////////////////////////////
  // DELETE TRANSACTION
  ////////////////////////////////
  try {
   deleted_transaction_message = await delete_transaction(transaction_id)
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
   message: `${transaction_item} was successfully deleted`,
  })

 }
}

export default handler;
