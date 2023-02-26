import { mongo_connect } from "../../../lib/mongo_connect";

// const mongoose = require('mongoose')
const User = require("../models/usersModel");
const Organization = require("../models/organizationModel");

async function handler(req, res) {

	const { organization, user } = req.body

	console.log('ORGANIZATION: ', organization)
	console.log('USER: ', user)

	if (req.method === "POST") {
		try {
			await mongo_connect();
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: "Error connecting to the database",
				error: error.toString()
			});
		}

		try {
			const organizations_list = await Organization.find();


			// const isOrganization = organizations.some(elem => elem == organization )

			// console.log(isOrganization)

			// const new_organization = new Organization({
			// 	organization: req.body.organization,
			// 	users: [],
			// });

			// const users = await User.find();

			// console.log("LOG USERS", users);

			// const new_user = new User({
			// 	name: req.body.user.name,
			// 	given_name: req.body.user.given_name,
			// 	family_name: req.body.user.family_name,
			// 	picture: req.body.user.picture,
			// 	email: req.body.user.email,
			// });

			// console.log(new_user);

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
				error: error.toString(),
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
		} catch (error) { }
	}

	// res.status(404).json({ message: "Not found" });
}

export default handler;


/* 
HELPER CALLS

			const new_organization = await Organization.create({
				organization: 'Maxilares',
			});

			res.status(201).json({
				message: `Organization saved succesfully in database`,
				new_organization: new_organization.toString(),
			});




*/