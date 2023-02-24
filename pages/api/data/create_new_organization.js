import { mongo_connect } from "../../../lib/mongo_connect";

// const mongoose = require('mongoose')
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
			console.log("CREATE ORGANIZATION");


			

			const organizations = await Organization.find();

			console.log(organizations);

			// console.log(req.body);

			const new_organization = new Organization({
				organization: req.body.organization,
				users: [],
			});

			console.log(new_organization);

			const users = await User.find();

   console.log('LOG USERS', users);

   const new_user = User.create({
 				name: req.body.user.name,
				given_name: req.body.user.given_name,
				family_name: req.body.user.family_name,
				picture: req.body.user.picture,
				email: req.body.user.email,
   });

   console.log(new_user);


			// new_organization.save((err, saved_organization) => {
			//  if (err) {
			//   res.status(500).json({
			//    status: 500,
			//    message: `Could not save ${req.body.organization} in database`,
			//    error: err
			//   })
			//  } else {
			//   console.log(saved_organization)
			//   res.status(200).json({
			//    message: 'users sent from POST',
			//    organizations: organizations,
			//    new_organization: saved_organization
			//   })
			//  }
			// })
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: "There was a problem creating an organization",
				error: error,
			});
		}

		try {
			// console.log(req.body.user);
			// console.log(req.body.user.name);
			// console.log(req.body.user.lastname);

			// const new_user = new User({
			// 	name: req.body.user.name,
			// 	given_name: req.body.user.given_name,
			// 	family_name: req.body.user.family_name,
			// 	picture: req.body.user.picture,
			// 	email: req.body.user.email,
			// });

			// console.log(new_user);

			// Organization.findOne({ organization: "Maxilares" }, (err, org) => {
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 		console.log("THIS IS THE ORGANIZATION ", org);

			// 		org.users.push(new_user);

			// 		org.save((err, updated_organization) => {
			// 			if (err) {
			// 				console.log(err);
			// 			} else {
			// 				console.log(updated_organization);
			// 			}
			// 		});
			// 	}
			// });


		} catch (error) {}
	}

	// res.status(404).json({ message: "Not found" });
}

export default handler;
