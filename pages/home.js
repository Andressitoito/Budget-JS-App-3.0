import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentBudget from "../components/ui/currentBudget";
import MainControlPanel from "../components/ui/MainControlPanel";

const Home = () => {
	const route = useRouter();
	// const dispatch = useDispatch();

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
				<section className="select-none relative text-center bg-msk-800 m-auto w-[600px]">
					<MainControlPanel />
					{/* <div className="absolute left-10">
						<CurrentBudget/>
					</div> */}
				</section>
			)}
		</>
	);
};

export default Home;

