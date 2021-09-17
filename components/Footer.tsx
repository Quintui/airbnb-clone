import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-gray-100 ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto px-8 sm:px-16 py-10  ">
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">ABOUT</h5>
					<p className="cursor-pointer hover:underline">How Airbnb works</p>
					<p className="cursor-pointer hover:underline"> Newsrooms</p>
					<p className="cursor-pointer hover:underline">Investors</p>
					<p className="cursor-pointer hover:underline">Airbnb Plus</p>
					<p className="cursor-pointer hover:underline">Airbnb Luxe</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">COMMUNITY</h5>
					<p className="cursor-pointer hover:underline">Accessibility</p>
					<p className="cursor-pointer hover:underline"> This is not a real site</p>
					<p className="cursor-pointer hover:underline"> Its a pretty awesome clone</p>
					<p className="cursor-pointer hover:underline">Referrals accepted</p>
					<p className="cursor-pointer hover:underline">Referrals accepted</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">HOST</h5>
					<p className="cursor-pointer hover:underline">Host your home</p>
					<p className="cursor-pointer hover:underline">Host an Online Experience </p>
					<p className="cursor-pointer hover:underline">Host an Experience</p>
					<p className="cursor-pointer hover:underline">Responsible hosting </p>
					<p className="cursor-pointer hover:underline">Resource Center</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">SUPPORT</h5>
					<p className="cursor-pointer hover:underline">Our COVID-19 Response</p>
					<p className="cursor-pointer hover:underline">Help Center </p>
					<p className="cursor-pointer hover:underline">Cancellation options </p>
					<p className="cursor-pointer hover:underline">Neighborhood Support </p>
					<p className="cursor-pointer hover:underline">Trust & Safety</p>
				</div>
			</div>
		</footer>
	);
};
