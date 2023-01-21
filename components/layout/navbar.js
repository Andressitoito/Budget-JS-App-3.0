import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

 const router = useRouter()


 return (
  <>
   <nav
    className="  fixed w-full z-20 top-0   
   bg-msk-500 px-2 sm:px-4 py-1 "
   >
    <div className="container flex flex-wrap items-center justify-between mx-auto  px-5  md:px-0">
     <a href="#" className="flex items-center">
      <span className="self-center text-2xl md:text-xl font-semibold whitespace-nowrap txt-msk-200">
       Budget Js App 3.0
      </span>
     </a>
     <ul className="flex gap-3">
      <li className={` ${router.pathname === '/' ? 'bg-blue-600' : ''} active active:bg-slate-50  uppercase	text-xl md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700`}>
       <Link href={'/'}>Home</Link>
      </li>
      <li className="uppercase	text-xl md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700">
       <Link href={'#'}>Sign In</Link>
      </li>
      <li className="uppercase	text-xl md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700">
       <Link href={'/auth/signup'}>Sign Up</Link>
      </li>
      <li className="uppercase	text-xl md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700">
       <Link href={'#'}>Log Out</Link>
      </li>
     </ul>


     {/* AVATAR BADGE */}
     <div className="items-center justify-between md:flex w-auto ">
      <div className="relative">
       <Image
        className="rounded-full ring-2 ring-blue-400 w-16 md:w-12 h-16 md:h-12"
        src="/images/bearded-person.jpg"
        alt="ds"
        width={40}
        height={40}
       />
       <div className="absolute bottom-0 right-0 h-3 md:h-2 w-3 md:w-2 rounded-full ring-2 ring-blue-300 bg-green-600"></div>
      </div>
     </div>
     {/* AVATAR BADGE END */}
    </div>
   </nav>
  </>
 );
};

export default Navbar;
