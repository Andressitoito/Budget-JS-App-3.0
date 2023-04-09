import { useEffect } from "react";

const ProtectedHome = () => {
	
	useEffect(()=>{
		
		console.log(document.cookie)
}, [])

	return (
		<>
			<p>I am protectedHome</p>
		</>
	);
};

export default ProtectedHome;
