const mongoose = require("mongoose");
mongoose.set("debug", true);

export const mongo_connect = async () => {
	try {
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
				console.log("Error connecting to the database ", error.toString());
			}
		} else {
			console.log("there is already an active connection");
		}
	} catch (error) {
		return res.status(500).json({
			status: 500,
			message: "Error connecting to the database",
			error: error.toString(),
		});
	}
};