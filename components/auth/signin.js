import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { useNotification } from "../../hooks/notificationHook";
import { signIn } from "../../features/auth/user";
import { useDispatch } from "react-redux";
import BaseButton from "../interaction/Base-button";
import { to_readable_time } from "../../lib/mongodb/to_readable_time";

const Signin = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const handleCallbackResponse = async (response) => {
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
			dispatchNotification("Success", `${data.message}`);
			dispatch(signIn(data.user));
			router.replace("/");
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

	return (
		<>
			<form>
				<h2 className="text-4xl txt-msk-300 text-center font-semibold mb-0">
					{/* Welcome back! */}
					Choose an organization:
				</h2>

				<div className="flex justify-center p-5 transform ">
					{/* <div
						id="signInDiv"
						className="w-230 text-center scale-x-[140%] scale-y-[120%]"
					></div> */}
				</div>
				<p className="txt-msk-200 text-center text-xl mt-0">
					Please sign in to continue!
				</p>


			
			</form>
		</>
	);
};

export default Signin;
