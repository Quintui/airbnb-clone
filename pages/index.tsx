import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import React, { FC } from "react";
import { SmallCard } from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import { LargeCard } from "../components/LargeCard";
import { Footer } from "../components/Footer";

export type ExploreData = {
	img: string;
	location: string;
	distance: string;
};
export type LiveAnywhereData = {
	img: string;
	title: string;
};

interface Props {
	exploreData: ExploreData[];
	liveAnywhereData: LiveAnywhereData[];
}

const Home: FC<Props> = ({ exploreData, liveAnywhereData }) => {
	return (
		<div>
			<Head>
				<title>Airbnb - Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16 mt-10">
				{/* Explore Nearby Section */}
				<section className="mt-10">
					<h2 className="text-3xl sm:text-4xl font-bold pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{/* Pull some data from API */}
						{exploreData?.map(({ distance, img, location }) => (
							<SmallCard key={img} distance={distance} location={location} img={img} />
						))}
					</div>
				</section>

				{/* Live Anywhere Section */}
				<section className="mt-10">
					<h2 className="text-3xl sm:text-4xl font-bold pb-5 ">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{liveAnywhereData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>

				{/* The Greatest Outdoors */}
				<section className="mt-5 mb-20">
					<LargeCard
						title="The Greatest Outdoors"
						description="Wishlist curated by Airbnb"
						buttonText="Get Inspired"
						img="https://links.papareact.com/4cj"
					/>
				</section>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};
export default Home;

export async function getStaticProps() {
	const exploreData: ExploreData[] = await fetch("https://links.papareact.com/pyp").then((res) =>
		res.json(),
	);

	const liveAnywhereData: LiveAnywhereData[] = await fetch("https://links.papareact.com/zp1").then(
		(res) => res.json(),
	);

	return {
		props: {
			exploreData,
			liveAnywhereData,
		},
	};
}
