import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CurrentBudget = () => {
	const { user } = useSelector((state) => state);
	const [toggleShowBudget, setToggleShowBudget] = useState(false);
	const [actualSpentData, setActualSpentData] = useState(0);

	// console.log(user.organization_id);

	const actualSpent = async () => {
		let organization_id = user.organization_id;
		const response = await fetch(
			"/api/database/transactions/get_sum_all_transactions",
			{
				method: "POST",
				body: JSON.stringify({ organization_id }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();

		console.log(data);
		setActualSpentData(data.transactions);
	};

	useEffect(() => {}, [actualSpentData]);

	const showCurrentBudget = () => {
		setToggleShowBudget(!toggleShowBudget);
		if (!toggleShowBudget) {
			actualSpent();
			console.log("show data");
		}
	};

	return (
		<div>
			{!toggleShowBudget && (
				<div
					className="absolute bg-green-500 h-4 w-4 rounded-full z-20 top-14 left-5 outline-4 outline-lime-600 outline"
					onClick={showCurrentBudget}
				></div>
			)}
			{toggleShowBudget && (
				<div
					className="top-14 left-5 absolute select-none z-10 p-1 bg-blue-500 rounded-xl opacity-70"
					onClick={showCurrentBudget}
				>
					<p className="text-xl text-blue-900 bg-blue-600 rounded-xl p-1 opacity-60 font-semibold">
						Base: {actualSpentData ? actualSpentData.main_budget : 0}
					</p>
					<p className="text-xl text-red-500 bg-blue-600 rounded-xl p-1 opacity-80 font-semibold">
						Spent: {actualSpentData ? actualSpentData.sum_spent : 0}
					</p>
					<p className="text-xl text-lime-700 bg-blue-600 rounded-xl p-1 opacity-90 font-semibold">
						Rest:{" "}
						{actualSpentData
							? actualSpentData.main_budget - actualSpentData.sum_spent
							: 0}
					</p>
				</div>
			)}
		</div>
	);
};

export default CurrentBudget;
