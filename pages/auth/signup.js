import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import Image from "next/image";
import Head from "next/head";

const Signup = () => {
 const [user, setUser] = useState({});

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

  google.accounts.id.prompt()
 }, []);
 // IF WE HAVE NO USER: SHOW SIGNIN BUTTON

 // IF WE HAVE A USER: SHOW LOGOUT BUTTON

 const imageSrc = user?.picture;

 const handleSignOut = (e) => {
  e.preventDefault();

  setUser({});
  document.getElementById("signInDiv").hidden = false;
 };

 return (

  <div>
   <Head>
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin" />
   </Head>
   <div id="signInDiv"></div>

   {/* If our user doesnt have any attributes it means that there is no user logged in*/}

   {
    Object.keys(user).length != 0 && (
     <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
    )
   }

   {
    user && (
     <div>
      {user.picture && <Image src={imageSrc} height={50} width={50} alt="123" />}
      <h3>{user.name}</h3>
     </div>
    )
   }
  </div >
 );
};

export default Signup;
