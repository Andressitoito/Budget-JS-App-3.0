import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNotification } from "../../hooks/notificationHook";
import { signIn } from "../../features/auth/user";
import { useDispatch } from "react-redux";
import BaseButton from "../interaction/Base-button";
import OrganizationSelectionList from "../organization/organizationSelectionList";
import Cookies from "js-cookie";

const Signin = () => {
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();
	const [userSignedIn, setUserSignedIn] = useState(null);
	const [rememberSelection, setRememberSelection] = useState(false);
	const [localUser, setLocalUser] = useState(null);
	const [saveUser, setSaveUser] = useState(false);

	const handleCallbackResponse = async (response) => {
		dispatchNotification(
			"Pending",
			"Signin in, getting user and organization data..."
		);

		let userObject = jwt_decode(response.credential);

		document.getElementById("signInDiv").hidden = true;

		const res = await fetch(`/api/database/users/signin`, {
			method: "POST",
			body: JSON.stringify(userObject.email),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		if (res.ok) {
			const email = userObject.email;
			const response = await fetch("/api/database/users/return_user", {
				method: "POST",
				body: JSON.stringify({ email }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const user_data = await response.json();

			const organizations_data = {
				owner: {
					organization_name: user_data.user.organization_owner,
					organization_id: user_data.user.organization_id,
				},
				guest: user_data.user.guest_organizations,
			};

			dispatchNotification("Success", `${data.message}`);
			// dispatch(signIn(data.user));
			setUserSignedIn(organizations_data);
			dispatch(signIn(user_data.user));
			setLocalUser(userObject);
		} else {
			dispatchNotification("Error", `${data.error}`);
		}
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:
				"270888240866-9ngld0ma7mg91h5or77rv7607bl7eb5d.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});

		// google.accounts.id.prompt();
	}, []);

	////////////////////////////////
	// HANDLE SIGN OUT
	////////////////////////////////
	// const handleSignOut = (e) => {
	// 	e.preventDefault();
	// 	// here we can set uset to empty object
	// 	document.getElementById("signInDiv").hidden = false;
	// };

	////////////////////////////////
	// HELPER SIGNIN FUNCTION
	////////////////////////////////
	const getUserSignedIn = (e) => {
		e.preventDefault();

		const user_ = {
			_id: "6418e62930a356ee6570ffb2",
			organization_id: "6418e62930a356ee6570ffb0",
			organization_owner: "Andresitos",
			name: "Andres Ledesma",
			given_name: "Andres",
			family_name: "Ledesma",
			picture:
				"https://lh3.googleusercontent.com/a/AGNmyxbCB3DNEHCnJrxn5M3lmAYdO9SAEUZ478aR8Asy=s96-c",
			email: "andresledesma87@gmail.com",
			createdAt: "2023-03-20T20:03:28.299Z",
			lastLogin: "2023-03-20T23:03:05.626Z",
			guest_organizations: [
				{
					_id: "641a4fc6df07427f20613f80",
					organization: "Miritas",
				},
			],
			__v: 0,
		};

		const organizations_data = {
			owner: {
				organization_name: user_.organization_owner,
				organization_id: user_.organization_id,
			},
			guest: user_.guest_organizations,
		};
		setUserSignedIn(organizations_data);
		dispatch(signIn(user_));
	};

	const handleClickCheckbox = () => {
		console.log("i will remember you");
		setRememberSelection(!rememberSelection);

		console.log(organizationData);
	};

	const handleClickSaveUser = () => {
		setSaveUser(!saveUser);
	};

	useEffect(() => {
		let saved_user = JSON.parse(localStorage.getItem("saved_user"));

		console.log(saved_user);

		if (saved_user === null) {
			console.log("local storage is null");
			localStorage.setItem("saved_user", JSON.stringify(localUser));
		} else {
			console.log("Removed saved_user");

			localStorage.removeItem("saved_user");
		}
	}, [saveUser]);

	return (
		<>
			<form>
				<BaseButton
					text={"sign in!"}
					onClick={(e) => {
						getUserSignedIn(e);
					}}
				/>
				<h2 className="text-4xl txt-msk-300 text-center font-semibold mb-0">
					{userSignedIn ? `Choose an organization:` : `Welcome back!`}
				</h2>
				{userSignedIn === null && (
					<>
						{/* <div className="flex justify-center p-5 transform ">
							<div
								id="signInDiv"
								className="w-230 text-center scale-x-[140%] scale-y-[120%]"
							></div>
						</div> */}

						<p className="txt-msk-200 text-center text-xl mt-0">
							Please sign in to continue!
						</p>
					</>
				)}

				{userSignedIn && (
					<>
						<div className="flex justify-center items-center mb-5">
							<input
								type="checkbox"
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
								id="organizationID"
								onClick={handleClickSaveUser}
							/>
							<label
								className="form-check-label text-lg inline-block txt-msk-200"
								htmlFor="organizationID"
							>
								{`Remember user`}
							</label>
						</div>
					</>
				)}

				{userSignedIn && (
					<>
						<div className="flex justify-center items-center m-2">
							<input
								type="checkbox"
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
								id="organizationID"
								onClick={handleClickCheckbox}
							/>
							<label
								className="form-check-label text-lg inline-block txt-msk-200"
								htmlFor="organizationID"
							>
								{`Remember organization`}
							</label>
						</div>

						<OrganizationSelectionList
							organizations_data={userSignedIn}
							rememberSelection={rememberSelection}
						/>
					</>
				)}
			</form>
		</>
	);
};

export default Signin;
