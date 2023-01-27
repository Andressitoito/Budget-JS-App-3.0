import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import BaseButton from "../interaction/Base-button";

const Signup = () => {
	const [user, setUser] = useState({});
	const [loadingUser, setLoadingUser] = useState(false)

	const handleCallbackResponse = async (response) => {
		// console.log("Encoded JWT ID TOKEN: " + response.credential);
		setLoadingUser(true)
		let userObject = jwt_decode(response.credential);

		setUser(userObject);
		document.getElementById("signInDiv").hidden = true;



		const res = await fetch('/api/auth/findUser')

		const data = await res.json()

		console.log(data)
		setLoadingUser(false)

		const user = {
   family_name,
   given_name,
   name,
   picture,
   email
  }

	};




	/* 

	  mongoose.set('strictQuery', false);
  mongoose.connect("mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/Users?retryWrites=true&w=majority", {
   useNewUrlParser: true
  })

	   // client = await mongoose.connect("mongodb+srv://Andresitoito:1Zqq8lWA2zwwkJrr@bugetjsapp-iii.xbppxph.mongodb.net/users?retryWrites=true&w=majority")
	
   // db.on('open', function () {
   //  console.log(`Connected to the ${db.db.databaseName} database`);
   //  db.useDb('Users');
   //  console.log(`Switched to the ${db.db.databaseName} database`);

   // })

	
   // const collections = await mongoose.connection.db.listCollections().toArray()
   // console.log(collections)

	
	
	
	*/
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

	const handleClickDatabaseCall = async (e) => {
		e.preventDefault()

		const res = await fetch('/api/auth/findUser')

		const data = await res.json()

		console.log(data)

	}

	return (
		<>
			<form>
				<BaseButton onClick={(e) => handleClickDatabaseCall(e)} text={'Fetch Database'}></BaseButton>
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

				<div className="mb-6">
					<input
						type="password"
						className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						placeholder="RepeatPassword"
					/>
				</div>

				<button
					type="submit"
					className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
				>
					Register new account
				</button>

				<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
					<p className="text-center font-semibold mx-4 mb-0">OR</p>
				</div>
				<div className="flex justify-center p-5 transform ">
					<div
						id="signInDiv"
						className="w-230 text-center scale-x-[140%] scale-y-[120%]"
					></div>

					{
						loadingUser &&
						<button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
							<svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
								<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
							</svg>
							Creating new user...
						</button>
					}
				</div>
			</form>
		</>
	);
};

export default Signup;
