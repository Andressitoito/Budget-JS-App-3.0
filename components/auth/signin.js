import Image from "next/image";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Signin = () => {
 const [user, setUser] = useState({});

 const handleCallbackResponse = (response) => {
  console.log("Encoded JWT ID TOKEN: " + response.credential);

  let userObject = jwt_decode(response.credential);

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

 return (
  <>

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
      />
      <label
       className="form-check-label inline-block txt-msk-900"
       htmlFor="exampleCheck2"
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
    <div className="flex justify-center p-5 transform ">
     <div id="signInDiv" className="w-230 text-center scale-x-[140%] scale-y-[120%]"></div>
    </div>
   </form>
  </>
 );
};

export default Signin;
