const mongoose = require("mongoose");

export const mongo_connect = async (collection_name) => {
 if (mongoose.connection.readyState === 0) {
   mongoose.set('strictQuery', true);
   try {
     await mongoose.connect(
       `mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/${collection_name}?retryWrites=true&w=majority`,
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       }
     );
     console.log("First connect to the database");
   } catch (error) {
     console.log("Error connecting to the database ", error);
   }
 } else {
   console.log("there is already an active connection");
   await mongoose.connection.close();
   mongoose.set('strictQuery', true);
   try {
     await mongoose.connect(
       `mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/${collection_name}?retryWrites=true&w=majority`,
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       }
     );
     console.log("The connection was closed and opened a new one");
   } catch (error) {
     console.log("Error connecting to the database ", error);
   }
 }
};




// How could i create a new Collection Called organizations if a connect first with a connection string without specifying the Collection name?

// AFTER i use this code 

// if (mongoose.connection.readyState === 0) {
//  mongoose.set('strictQuery', true)
//  mongoose
//   .connect(
//    "mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/?retryWrites=true&w=majority",
//    {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//    }
//   )
//   .then(() => console.log("Connected to the database"))
//   .catch((error) => console.log("Error connectiong to the database ", error));
// } else {
//  console.log("there is already an active connection");
// }


// export const mongo_connect = async(collection_name) => {
// 	if (mongoose.connection.readyState === 0) {
//   mongoose.set('strictQuery', true)
// 		await mongoose
// 			.connect(
// 				`mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/${collection_name}?retryWrites=true&w=majority`,
// 				{
// 					useNewUrlParser: true,
// 					useUnifiedTopology: true,
// 				}
// 			)
// 			.then(() => console.log("First connect to the database"))
// 			.catch((error) => console.log("Error connecting to the database ", error));
// 	} else {
//   console.log("there is already an active connection");
//   await mongoose.connection.close();
//   mongoose.set('strictQuery', true)
// 		await mongoose
//   .connect(
//    `mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/${collection_name}?retryWrites=true&w=majority`,
//    {
// 					useNewUrlParser: true,
// 					useUnifiedTopology: true,
// 				}
// 			)
// 			.then(() => console.log("The connection was closed and opened a new one"))
// 			.catch((error) => console.log("Error connecting to the database ", error));
//   }
// };
