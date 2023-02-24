const mongoose = require("mongoose");
mongoose.set('debug', true);


export const mongo_connect = async () => {
	if (mongoose.connection.readyState === 0) {
		mongoose.set("strictQuery", true);
		try {
			mongoose.connect(
				`mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Budget-JS-App-3?retryWrites=true&w=majority`,
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
	}
};

// export const mongo_connect = async () => {
//  if (mongoose.connection.readyState === 0) {
//   mongoose.set('strictQuery', true);
//   try {
//    mongoose.connect(
//     `mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Budget-JS-App-3?retryWrites=true&w=majority`,
//     {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//     }
//    );
//    console.log("First connect to the database");
//   } catch (error) {
//    console.log("Error connecting to the database ", error);
//   }
//  } else {
//   console.log("there is already an active connection");
//   await mongoose.connection.close();
//   mongoose.set('strictQuery', true);
//   try {
//    mongoose.connect(
//     `mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Budget-JS-App-3?retryWrites=true&w=majority`,
//     {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//     }
//    );
//    console.log("The connection was closed and opened a new one");
//   } catch (error) {
//    console.log("Error connecting to the database ", error);
//   }
//  }
// };
