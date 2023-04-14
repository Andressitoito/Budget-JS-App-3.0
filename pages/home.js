import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentBudget from "../components/ui/currentBudget";
import MainControlPanel from "../components/ui/MainControlPanel";
import { setCategoryData } from "../features/Category/categoryData";
import { getAllCategories } from "../lib/categories/getAllCategories";

const Home = () => {
	const route = useRouter();
	const dispatch = useDispatch();

	const { user, currentOrganization_id } = useSelector((state) => state);

	const [showHome, setShowHome] = useState(false);

	useEffect(() => {
		let localUser = JSON.parse(localStorage.getItem("localUser"));

		if (localUser === null || localUser === "null") {
			if (!user) {
				route.replace("/");
			}
			setShowHome(true);
		}
	}, [user, route]);

	useEffect(() => {}, []);

	return (
		<>
			{showHome && (
				<section className="text-center bg-msk-800 m-auto w-[600px]">
					<div className="absolute">
						<CurrentBudget className='absolute'/>
					</div>
					<MainControlPanel />
				</section>
			)}
		</>
	);
};

export default Home;

// export async function getServerSideProps(context) {
// 	const { req } = context;

// 	let userSaved = req.cookies;

// 	if (Object.keys(userSaved).length === 0) {
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false,
// 			},
// 		};
// 	} else if (userSaved.userLoggedIn === "userLoggedTrue") {
// 		return { props: {} };
// 	} else {
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false,
// 			},
// 		};
// 	}
// }
