import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-gray-100 ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto px-8 sm:px-16 py-10  ">
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">ABOUT</h5>
					<p className="footer-button">How Airbnb works</p>
					<p className="footer-button"> Newsrooms</p>
					<p className="footer-button">Investors</p>
					<p className="footer-button">Airbnb Plus</p>
					<p className="footer-button">Airbnb Luxe</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">COMMUNITY</h5>
					<p className="footer-button">Accessibility</p>
					<p className="footer-button"> This is not a real site</p>
					<p className="footer-button"> Its a pretty awesome clone</p>
					<p className="footer-button">Referrals accepted</p>
					<p className="footer-button">Referrals accepted</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">HOST</h5>
					<p className="footer-button">Host your home</p>
					<p className="footer-button">Host an Online Experience </p>
					<p className="footer-button">Host an Experience</p>
					<p className="footer-button">Responsible hosting </p>
					<p className="footer-button">Resource Center</p>
				</div>
				<div className="space-y-4 test-xs text-gray-800 mb-5 md:mb-0">
					<h5 className="font-bold">SUPPORT</h5>
					<p className="footer-button">Our COVID-19 Response</p>
					<p className="footer-button">Help Center </p>
					<p className="footer-button">Cancellation options </p>
					<p className="footer-button">Neighborhood Support </p>
					<p className="footer-button">Trust & Safety</p>
				</div>
			</div>
		</footer>
	);
};
