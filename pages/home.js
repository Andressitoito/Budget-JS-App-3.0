import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CurrentBudget from "../components/ui/currentBudget";
import MainControlPanel from "../components/ui/MainControlPanel";
import { signIn } from "../features/auth/user.js";
import { updateOrganizationData } from "../features/auth/organizationData";
import { setCurrentCategory } from "../features/Category/categoryData";
// import { getAllCategories } from "../lib/categories/getAllCategories";
import jwt_decode from "jwt-decode";
import { useNotification } from "../hooks/notificationHook.js";


const Home = () => {
	const route = useRouter();
	const dispatch = useDispatch();
	const { organizationData } = useSelector((state) => state);
	const [showHome, setShowHome] = useState(false);
	const dispatchNotification = useNotification();

	useEffect(() => {
		const validateToken = async () => {
			const localUser = JSON.parse(localStorage.getItem("localUser"));
			const token = localStorage.getItem("jwtToken");

			if (!localUser || !token) {
				route.replace("/");
				return;
			}

			const actualOrganization_id = JSON.parse(localStorage.getItem('BudgetAppJs_3_Org_Selection'))

			let userObject = jwt_decode(token);

			// Optional: Check if token is expired before sending it to the server
			const currentTime = Date.now() / 1000;
			if (userObject.exp && userObject.exp < currentTime) {
				dispatchNotification("Error", "JWT Token has expired. Please sign in again.");
				localStorage.removeItem("saved_user_local");
				route.replace("/");

				return;
			}

			try {
				const response = await fetch('/api/auth/validate-token', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ token }),
				});

				const data = await response.json();

				if (data.valid) {
					dispatch(signIn(localUser));
					dispatch(updateOrganizationData(actualOrganization_id));
					dispatch(setCurrentCategory(null));
					setShowHome(true);
				} else {

					console.log("response from toekn ", data)
					route.replace("/");
				}
			} catch (error) {
				console.error("Token validation error:", error);
				route.replace("/");
			}
		};

		validateToken();
	}, [dispatch, route]);

	return (
		<>
			{showHome && (
				<section className="select-none relative text-center bg-msk-800 m-auto w-[600px]">
					<MainControlPanel />
					{/* <div className="absolute left-10">
                        <CurrentBudget />
                    </div> */}
				</section>
			)}
		</>
	);
};

export default Home;
