import { useSelector } from "react-redux";

const SecuredRoutes = (props) => {


	return (
		<>
			<p>I am SecuredRoutes</p>
		</>
	);
};

export default SecuredRoutes;

// export async function getServerSideProps(context) {
// 	const { req } = context;

// 	let userSaved = req.cookies;

// 	console.log(userSaved)

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
