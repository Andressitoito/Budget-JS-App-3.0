import { mongo_connect } from "../../../lib/mongo_connect";
const User = require("../models/usersModel");
const Organization = require("../models/organizationModel");

async function handler(req, res) {

	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization, user } = req.body;

		console.log("ORGANIZATION: ", organization);
		console.log("USER: ", user);

		let saved_organization;
		let saved_user
		let new_organization
		let new_user

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		try {
			await mongo_connect();
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: "Error connecting to the database",
				error: error.toString(),
			});
		}

		////////////////////////////////
		// FIND DUPLICATES ORGANIZATIONS 
		// AND CREATE	NEW ORGANIZATION
		////////////////////////////////
		try {
			const organizations_list = await Organization.find()

			const isOrganization = organizations_list.some(org => org.organization.toLowerCase() === organization.toLowerCase())

			console.log("ORGANIZATION EXISTS?: ", isOrganization);

			if (isOrganization) {
				res.status(422).json({
					status: 422,
					message: `The organization ${organization} already exists`,
					error: error.toString()
				})
			} else {
				try {
					new_organization = await new Organization({
						organization: organization
					})
				} catch (error) {
					res.status(500).json({
						status: 500,
						message: `There was a problem creating new organization ${organization}`,
						error: error.toString()
					})
				}
			}
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: 'There was a problem in the process of creating an organization',
				error: error.toString()
			})
		}

		////////////////////////////////
		// CREATE NEW USER
		////////////////////////////////




		try {
			const organizations_list = await Organization.find();

			const isOrganization = organizations_list.some(
				(org) => org.organization.toLowerCase() === organization.toLowerCase()
			);


			if (isOrganization) {
				res.status(422).json({
					status: 422,
					message: `The organization ${organization} already exists`,
				});
			} else if (isUser) {
			} else {
				console.log("Continue");

				const new_organization = await new Organization({
					organization: organization,
					users: [],
				});

				console.log(new_organization);
			}

			let saved_organization;
			try {
				saved_organization = await new_organization.save();
			} catch (error) { }

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
