import Image from "next/image";
import { useState } from "react";
import Signin from "../../../components/auth/signin";
import SignUp from "../../../components/auth/signup";

const Register = () => {

	const [activeTab, setActiveTab] = useState("signin");

	const handleClickActiveTab = (tab, e) => {
		setActiveTab(tab);

		document.querySelectorAll(".tab").forEach((tab) => {
			tab.classList.remove("bg-indigo-400");
			tab.classList.remove("bg-indigo-500");
			tab.classList.add("bg-indigo-500");
		});

		if (e.target.tagName === "svg") {
			return;
		} else {
			e.target.classList.remove("bg-indigo-400");
			e.target.classList.remove("bg-indigo-500");
			e.target.classList.add("bg-indigo-400");
		}
	};

	return (
			<div className="flex justify-center mt-2 mx-7 pb-5">

				{/* If our user doesnt have any attributes it means that there is no user logged in*/}

				{/* {Object.keys(user).length != 0 && (
				<button onClick={(e) => handleSignOut(e)}>Sign Out</button>
			)}

			{user && (
				<div>
					{user.picture && <Image src={imageSrc} height={50} width={50} alt="123" />}
					<h3>{user.name}</h3>
				</div>
			)} */}

				<div className="md:w-[50%] max-w-[500px] min-w-[400px]">
					<div className="flex justify-between gap-5">
						<button
							className="tab text-white w-1/2 p-4 rounded bg-indigo-400  hover:bg-indigo-400 hover:text-indigo-100 shadow-md flex items-center justify-center
						transition duration-400 ease-in-out"
							onClick={(e) => handleClickActiveTab("signin", e)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Sign In
						</button>
						<button
							className="tab text-white w-1/2 p-4 rounded bg-indigo-500  hover:bg-indigo-400 hover:text-indigo-100 shadow-md flex items-center justify-center
						transition duration-400 ease-in-out"
							onClick={(e) => handleClickActiveTab("signup", e)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							Sign Up
						</button>
					</div>

					<section className="rounded-lg bg-msk-600 mt-2 flex justify-center items-center flex-col gap-4 g-6 text-gray-800 p-5">
						<div className="md:w-[240px] md:h-[300px] w-[120px] h-[150px] flex justify-center align-middle rounded-md overflow-hidden relative">
							<Image
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
								className="absolute out-blue"
								alt="Phone image"
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div>
							{activeTab === "signin" ? <Signin /> : <SignUp setActiveTab={setActiveTab} />}
						</div>
					</section>
				</div>

			</div>

	);
};

export default Register;
