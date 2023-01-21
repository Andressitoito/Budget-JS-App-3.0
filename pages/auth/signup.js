import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Signup = () => {
	const [user, setUser] = useState({});
	const [ activeTab, setActiveTab ] = useState('login')

	const handleCallbackResponse = (response) => {
		console.log("Encoded JWT ID TOKEN: " + response.credential);

		let userObject = jwt_decode(response.credential);

		console.log(userObject);

		/* AS AN EXAMPLE */

		setUser(userObject);
		document.getElementById("signInDiv").hidden = true;
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
	// IF WE HAVE NO USER: SHOW SIGNIN BUTTON

	// IF WE HAVE A USER: SHOW LOGOUT BUTTON

	const imageSrc = user?.picture;

	const handleSignOut = (e) => {
		e.preventDefault();

		setUser({});
		document.getElementById("signInDiv").hidden = false;
	};



const router = useRouter()

console.log(router.pathname)
console.log(router.locale)
console.log(router.query)
console.log(router.)



const handleClickTabs = () => {
	activeTab === "login" 
	? setActiveTab("signin")
	: setActiveTab("login")
}



	return (
		<div className="flex justify-center">
			{/* If our user doesnt have any attributes it means that there is no user logged in*/}

			{Object.keys(user).length != 0 && (
				<button onClick={(e) => handleSignOut(e)}>Sign Out</button>
			)}

			{user && (
				<div>
					{user.picture && <Image src={imageSrc} height={50} width={50} alt="123" />}
					<h3>{user.name}</h3>
				</div>
			)}

			{/*  */}

			<section className="out-red md:w-[50%] rounded-sm bg-msk-600 mt-2 m-2">
				<div className="container px-6 py-12 h-full">
					<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
						<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
							<Image
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
								className="w-3/4 m-auto"
								alt="Phone image"
								width={100}
								height={100}
							/>
						</div>
						<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
							<form>
								<div className="mb-6">
									<input
										type="text"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Email address"
									/>
								</div>

								<div className="mb-6">
									<input
										type="password"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Password"
									/>
								</div>

								<div className="flex justify-between items-center mb-6">
									<div className="form-group form-check">
										<input
											type="checkbox"
											className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											id="exampleCheck3"
											checked
										/>
										<label
											className="form-check-label inline-block txt-msk-900"
											for="exampleCheck2"
										>
											Remember me
										</label>
									</div>
									<a
										href="#!"
										className="txt-msk-200 hover:text-blue-500 duration-200 ease-in-out"
									>
										Forgot password?
									</a>
								</div>

								<button
									type="submit"
									className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
								>
									Sign in
								</button>

								<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
									<p className="text-center font-semibold mx-4 mb-0">OR</p>
								</div>
								<div className="flex out-orange justify-center p-5">
									<div id="signInDiv" className="w-230 out-red text-center"></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/*  */}




			<ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
				role="tablist">
				<li class="nav-item" role="presentation">
					<a href="#tabs-home" onClick={handleClickTabs} class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
						aria-selected="true">Home</a>
				</li>
				<li class="nav-item" role="presentation">
					<a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
						aria-controls="tabs-profile" aria-selected="false">Profile</a>
				</li>
				<li class="nav-item" role="presentation">
					<a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
						aria-controls="tabs-messages" aria-selected="false">Messages</a>
				</li>
				<li class="nav-item" role="presentation">
					<a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
						aria-controls="tabs-contact" aria-selected="false">Contact</a>
				</li>
			</ul>
			<div class="tab-content" id="tabs-tabContent">
				<div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
					Tab 1 content
				</div>
				<div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
					Tab 2 content
				</div>
				<div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
					Tab 3 content
				</div>
				<div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
					Tab 4 content
				</div>
			</div>


















		</div>
	);
};

export default Signup;
