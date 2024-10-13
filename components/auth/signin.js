import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNotification } from "../../hooks/notificationHook";
import { signIn } from "../../features/auth/user";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "../interaction/Base-button";
import OrganizationSelectionList from "../organization/organizationSelectionList";
import {
	toggleUser,
	updateLocalData,
	updateState,
} from "../../features/auth/localUser";

const Signin = () => {
	const { localUser, user } = useSelector((state) => state);
	const { localUserState, organization_list_data, remember_user } = localUser;
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();
	const [userSignedIn, setUserSignedIn] = useState(null);
	const [rememberSelection, setRememberSelection] = useState(false);
	const [savedUser, setSavedUser] = useState(false);

	const handleCallbackResponse = async (response) => {
		dispatchNotification(
			"Pending",
			"Signing in, getting user and organization data..."
		);

		let userObject = jwt_decode(response.credential);

		console.log("userOBject  ", userObject)

		const currentTime = Date.now() / 1000;
		if (userObject.exp && userObject.exp < currentTime) {
			localStorage.removeItem("jwtToken");
		}
		console.log("currentTime ", currentTime)

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
			const token = data.token;
			const user = data.user;

			const organizations_data = {
				owner: {
					organization_name: user.organization_owner,
					organization_id: user.organization_id,
				},
				guest: user.guest_organizations,
			};

			dispatchNotification("Success", `${data.message}`);

			// Save user and token in local storage
			localStorage.setItem("localUser", JSON.stringify(user));
			localStorage.setItem("jwtToken", token);

			setUserSignedIn(organizations_data);
			dispatch(updateLocalData(organizations_data));
			dispatch(updateState(true));
			dispatch(signIn(user));
		} else {
			dispatchNotification("Error", `${data.error}`);
		}
	};

	useEffect(() => {
		google.accounts.id.initialize({
			client_id:
				"270888240866-9ngld0ma7mg91h5or77rv7607bl7eb5d.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [savedUser]);
	// google.accounts.id.prompt();

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

	// const getUserSignedIn = (e) => {
	// 	e.preventDefault();

	// 	const user_ = {
	// 		_id: "6418e62930a356ee6570ffb2",
	// 		organization_id: "6418e62930a356ee6570ffb0",
	// 		organization_owner: "Andresitos",
	// 		name: "Andres Ledesma",
	// 		given_name: "Andres",
	// 		family_name: "Ledesma",
	// 		picture:
	// 			"https://lh3.googleusercontent.com/a/AGNmyxbCB3DNEHCnJrxn5M3lmAYdO9SAEUZ478aR8Asy=s96-c",
	// 		email: "andresledesma87@gmail.com",
	// 		createdAt: "2023-03-20T20:03:28.299Z",
	// 		lastLogin: "2023-03-20T23:03:05.626Z",
	// 		guest_organizations: [
	// 			{
	// 				_id: "641a4fc6df07427f20613f80",
	// 				organization: "Miritas",
	// 			},
	// 		],
	// 		__v: 0,
	// 	};

	// 	const organizations_data = {
	// 		owner: {
	// 			organization_name: user_.organization_owner,
	// 			organization_id: user_.organization_id,
	// 		},
	// 		guest: user_.guest_organizations,
	// 	};
	// 	setUserSignedIn(organizations_data);
	// 	dispatch(updateLocalData(organizations_data));
	// 	dispatch(updateState(true));
	// 	dispatch(signIn(user_));
	// };

	const handleClickSignInSavedUser = (e) => {
		e.preventDefault();

		let user_ = JSON.parse(localStorage.getItem("saved_user_local"));

		const organizations_data = {
			owner: {
				organization_name: user_.organization_owner,
				organization_id: user_.organization_id,
			},
			guest: user_.guest_organizations,
		};
		setUserSignedIn(organizations_data);
		dispatch(updateLocalData(organizations_data));
		dispatch(updateState(true));
		dispatch(signIn(user_));
	};

	// const handleClickCheckbox = () => {
	// 	console.log("i will remember you");
	// 	setRememberSelection(!rememberSelection);

	// 	console.log(organizationData);
	// };

	useEffect(() => {
		let saved_user_local = JSON.parse(localStorage.getItem("saved_user_local"));

		if (saved_user_local === null || saved_user_local === "null") {
			setSavedUser(false);
		} else {
			setSavedUser(true);
		}
	}, [remember_user]);

	const handleCheckboxSaveUser = () => {
		let saved_user_local = JSON.parse(localStorage.getItem("saved_user_local"));

		if (saved_user_local === null || saved_user_local === "null") {
			setSavedUser(false);
		} else {
			setSavedUser(true);
		}

		dispatch(toggleUser(user));
	};

	// const handleClickShowUser = (e) => {
	// 	e.preventDefault();

	// 	let saved_user = JSON.parse(localStorage.getItem("saved_user_local"));

	// 	console.log(saved_user);
	// };

	return (
		<>
			<form>
				{/* <div className="flex justify-center w-full p-3 gap-2">
					<BaseButton
						text={"sign in!"}
						onClick={(e) => {
							getUserSignedIn(e);
						}}
					/>

					<BaseButton
						text={"show user"}
						onClick={(e) => {
							handleClickShowUser(e);
						}}
					/>
				</div> */}

				<div className="bg-msk-700 p-1 rounded-md w-96">
					<h2 className="text-3xl txt-msk-300 text-center font-semibold mb-0">
						{userSignedIn ? `Choose an organization:` : `Welcome back!`}
					</h2>
					{savedUser && (
						<div className="flex justify-center w-full p-3 gap-2">
							<BaseButton
								text={"sign in!"}
								onClick={(e) => {
									handleClickSignInSavedUser(e);
								}}
							/>
						</div>
					)}
					{!savedUser && (
						<>
							<div className="flex justify-center p-5 transform ">
								<div
									id="signInDiv"
									className="w-230 text-center scale-x-[140%] scale-y-[120%]"
								></div>
							</div>

							<p className="txt-msk-200 text-center text-xl mt-0">
								Please sign in to continue!
							</p>
						</>
					)}

					<>
						<div className="flex justify-center items-center mt-3 mb-2 ">
							<input
								type="checkbox"
								checked={savedUser ? true : false}
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer mb-1"
								id="checkboxSaveUser"
								onChange={handleCheckboxSaveUser}
							/>
							<label
								className="form-check-label text-lg inline-block txt-msk-200 "
								htmlFor="checkboxSaveUser"
							>
								{savedUser ? `User saved!` : `Remember user`}
							</label>
						</div>
					</>
				</div>

				{localUserState && (
					<div className="bg-msk-800 rounded-md p-1 pb-4">
						<>
							{/* <div className="flex justify-center items-center m-2">
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
							</div> */}

							<OrganizationSelectionList
								organizations_data={organization_list_data}
								rememberSelection={rememberSelection}
							/>
						</>
					</div>
				)}
			</form>
		</>
	);
};

export default Signin;
