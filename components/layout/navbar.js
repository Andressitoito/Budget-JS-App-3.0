import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/user";
import CurrentBudget from "../ui/currentBudget";

const Navbar = () => {
	const router = useRouter();
	const { user } = useSelector((state) => state);
	const dispatch = useDispatch();

	const setLogOut = () => {
		dispatch(logOut);
		router.replace("/");
	};

	useEffect(() => { }, [user]);

	// console.log(user)

	return (
		<>
			<nav
				className="fixed w-full z-20 top-0 bg-msk-500 px-2 py-1"
			>
				<div className="container flex flex-wrap items-center justify-center mx-auto  px-5  md:px-0">
					<a href="" className="flex items-center">
						<span className="self-center text-2xl md:text-xl font-semibold whitespace-nowrap txt-msk-200"></span>
					</a>

					<ul className="flex gap-3">
						{!user && (
							<li
								className={` ${router.pathname === "/home" ? "bg-blue-600" : ""
									} active active:bg-slate-50 select-none uppercase	md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 m-1`}
							>
								<Link className="select-none" href={"/home"}>
									Home
								</Link>
							</li>
						)}

						<li className="select-none uppercase	md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 m-1">
							<Link className="select-none" href={"/"}>
								{!user ? "Register" : "Organization"}
							</Link>
						</li>
						{user && (
							<li
								onClick={setLogOut}
								className=" select-none uppercase md:text-base font-bold txt-msk-100 py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 m-1"
							>
								Log Out
							</li>
						)}
					</ul>

					{/* AVATAR BADGE */}
					<div className="absolute items-center justify-between md:flex w-auto right-10">
						<div className="relative">
							<Image
								className="rounded-full ring-2 ring-blue-400 w-12 md:w-12 h-12 md:h-12"
								src={
									user?.email
										? user.email === "andresledesma87@gmail.com"
											? "/images/person_with_glasses.jpeg"
											: `${user.picture}`
										: "/images/bearded-person.jpg"
								}
								alt="perfil picture"
								width={40}
								height={40}
							/>
							<div className="absolute bottom-0 right-0 h-3 md:h-2 w-3 md:w-2 rounded-full ring-2 ring-blue-300 bg-green-600"></div>
						</div>
					</div>
					{/* AVATAR BADGE END */}
				</div>
			</nav>

			{
				user &&		<CurrentBudget className="absolute"/>
			}


		</>
	);
};

export default Navbar;
