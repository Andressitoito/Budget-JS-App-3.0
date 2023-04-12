import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import AccountInfo from "../organization/accountInfo";
import { useDispatch } from "react-redux";
import { signUp } from "../../features/auth/user";

const Signup = ({ setActiveTab }) => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({});
	const [loadingUser, setLoadingUser] = useState(false);
	const [user_info, setUser_info] = useState({})

	const handleCallbackResponse = async (response) => {
		// console.log("Encoded JWT ID TOKEN: " + response.credential);
		setLoadingUser(true);
		let userObject = jwt_decode(response.credential);

		setUser(userObject);
		document.getElementById("signInDiv").hidden = true;

		const { email } = userObject;

		const res = await fetch("/api/database/users/find_user", {
			method: "POST",
			body: JSON.stringify({
				email: email,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();
		console.log(data);
		setUser_info(data.user_info)
		dispatch(signUp(userObject));
		setLoadingUser(false);
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: process.env.GOOGLE_CLIENT_ID,
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});

		// google.accounts.id.prompt();
// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	////////////////////////////////
	// HANDLE SIGN OUT BUTTON
	////////////////////////////////
	// const handleSignOut = (e) => {
	// 	e.preventDefault();

	// 	setUser({});
	// 	document.getElementById("signInDiv").hidden = false;
	// };

	return (
		<>
			<form>
				<div className="flex">
					<div className="w-1/2 text-center px-2">
						<div className="bg-msk-300 rounded-lg flex items-center justify-center border border-indigo-500 outline-2 shadow-lg shadow-violet-200">
							<div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" />
								</svg>
							</div>
							<div className="w-2/3 txt-msk-900 md:h-20 h-26 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
								<h2 className="font-bold md:text-sm text-md">
									{Object.keys(user).length != 0 ? `Welcome` : "Personal Info"}
								</h2>
								<p className="text-sm text-gray-600">
									{Object.keys(user).length != 0
										? `${user.name}`
										: "Just your personal information"}
								</p>
							</div>
						</div>
					</div>

					<div className="flex-1 flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
						</svg>
					</div>
					<div className="w-1/2 text-center px-2">
						<div
							className={`bg-msk-300 rounded-lg flex items-center justify-center border border-indigo-500 ${Object.keys(user).length != 0 ? "shadow-violet-200 shadow-lg" : ""
								}`}
						>
							<div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fillRule="evenodd"
									clipRule="evenodd"
								>
									<path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
								</svg>
							</div>
							<div className="w-2/3 txt-msk-900 md:h-20 h-26 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
								<h2 className="font-bold text-md md:text-sm">Account Info</h2>
								<p className="text-sm text-gray-600">Fill your organization details</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-5 transform ">
					<div
						id="signInDiv"
						className="w-230 text-center scale-x-[140%] scale-y-[120%]"
					></div>
				</div>

				<div className="flex">
					{loadingUser && (
						<button
							disabled
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center m-auto"
						>
							<svg
								aria-hidden="true"
								role="status"
								className="inline w-4 h-4 mr-3 text-white animate-spin"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="#E5E7EB"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentColor"
								/>
							</svg>
							Loading user data...
						</button>
					)}
				</div>

				{Object.keys(user).length != 0 && <AccountInfo user={user} user_info={user_info} setActiveTab={setActiveTab} />}
			</form>
		</>
	);
};

export default Signup;

{
	/* If our user doesnt have any attributes it means that there is no user logged in*/
}

{
	/* {Object.keys(user).length != 0 && (
				<button onClick={(e) => handleSignOut(e)}>Sign Out</button>
			)}

			{user && (
				<div>
					{user.picture && <Image src={imageSrc} height={50} width={50} alt="123" />}
					<h3>{user.name}</h3>
				</div>
			)} */
}

{
	/* {loadingUser && (
						<button
							disabled
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
						>
							<svg
								aria-hidden="true"
								role="status"
								className="inline w-4 h-4 mr-3 text-white animate-spin"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="#E5E7EB"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentColor"
								/>
							</svg>
							Creating new user...
						</button>
					)} */
}
