import { useSession, signIn, signOut } from "next-auth/react";




const Login = () => {

 const { data: session } = useSession()

 console.log(session)

 if (session) {
  return (
   <div>

    <div>Welcome {session.user.email}</div>
    <button onClick={() => signOut()}>Sign Out</button>
   </div>
  )
 } else {


  return (
   <>
    <p>I am not logged in </p>

    <button onClick={() => signIn('google', {callbackUrl: 'http://localhost:3000/auth/signup'})}>Sign In</button>


   </>
  )
 }
}

export default Login;