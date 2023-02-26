// import { mongo_connect } from "../../../lib/mongo_connect";

// // const mongoose = require('mongoose')
// const User = require("../models/usersModel");
// const Organization = require("../models/organizationModel");

// async function handler(req, res) {
// 	if (req.method === "POST") {
// 		try {
// 			await mongo_connect();
// 		} catch (error) {
// 			res.status(500).json({
// 				status: 500,
// 				message: "Error connecting to the database",
// 				error,
// 			});
// 		}

// 		try {
// 			console.log("CREATE ORGANIZATION");

// 			// const organizations = await Organization.find();

// 			// console.log(organizations);

// 			// console.log(req.body);

// 			// const new_organization = new Organization({
// 			// 	organization: req.body.organization,
// 			// 	users: [],
// 			// });

// 			// console.log(new_organization);

// 			const users = await User.find();

//    console.log('LOG USERS', users);

//    const new_user = new User({
//  				name: req.body.user.name,
// 				given_name: req.body.user.given_name,
// 				family_name: req.body.user.family_name,
// 				picture: req.body.user.picture,
// 				email: req.body.user.email,
//    });

//    console.log(new_user);

// 		} catch (error) {
// 			res.status(500).json({
// 				status: 500,
// 				message: "There was a problem creating an user",
// 				error: error,
// 			});
// 		}

// 		try {
// 			// console.log(req.body.user);
// 			// console.log(req.body.user.name);
// 			// console.log(req.body.user.lastname);

// 			// const new_user = new User({
// 			// 	name: req.body.user.name,
// 			// 	given_name: req.body.user.given_name,
// 			// 	family_name: req.body.user.family_name,
// 			// 	picture: req.body.user.picture,
// 			// 	email: req.body.user.email,
// 			// });

// 			// console.log(new_user);

// 		} catch (error) {}
// 	}

// 	// res.status(404).json({ message: "Not found" });
// }

// export default handler;




// const usersModel = require('./usersModel')
// users: [
//  usersModel.schema
// ],

import { mongo_connect } from "../../../lib/mongo_connect";

const User = require("../models/usersModel");
const Organization = require("../models/organizationModel");

async function handler(req, res) {
	if (req.method === "POST") {
		try {
			await mongo_connect();
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: "Error connecting to the database",
				error,
			});
		}

		try {
			console.log("CREATE USER");

			const users = await User.find();

			console.log("LOG USERS", users.length, "END LOG USERS");

			console.log("RECIBO BODY: ", req.body);

			let new_user;

			try {
				new_user = new User({
					name: req.body.name,
					given_name: req.body.given_name,
					family_name: req.body.family_name,
					picture: req.body.picture,
					email: req.body.email,
				});

				console.log("NEW_USER ", new_user);

				new_user.save((err, saved_user) => {
					if (err) {
						res.status(500).json({
							status: 500,
							message: `Could not save ${req.body.name} in database`,
							error: err.toString(),
						});
					} else {
						console.log(saved_user);
						res.status(201).json({
							message: `${req.body.name} saved succesfully in database`,
							new_user: saved_user,
						});
					}
				});
			} catch (error) {
				console.log(error.message);
				res.status(500).json({
					error,
				});
			}
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				status: 500,
				message: "There was a problem creating an user",
				error: error.toString(),
			});
		}
		res.status(404).json({ message: "Not found" });
	}
}

export default handler;
