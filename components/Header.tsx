import React from "react";
import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
export const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-2 sm:grid-cols-3 bg-white shadow-md p-5 ">
			{/* Left side */}
			<div className="hidden relative h-10 sm:flex items-center cursor-pointer my-auto ">
				<Image
					src="https://links.papareact.com/qd3"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>

			{/* Middle search  */}
			<div className="flex items-center my-auto md:border-2  rounded-full py-4 md:py-2 md:shadow-md ">
				<input
					type="text"
					placeholder="Start your search"
					className="bg-transparent outline-none pl-3 flex-grow placeholder-grey-400 "
				/>
				<SearchIcon className="hidden md:inline h-8 bg-red-400 md:none rounded-full p-2 mx-2 text-white" />
			</div>

			{/* Right side */}
			<div className="flex items-center my-auto space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline-flex cursor-pointer ">Become a host </p>
				<GlobeAltIcon className=" hidden md:inline-flex h-6 cursor-pointer" />
				<div className="rounded-full border-2 flex space-x-2 p-2">
					<MenuIcon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>
		</header>
	);
};
