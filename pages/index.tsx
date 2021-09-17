import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { FC } from "react";
import { SmallCard } from "../components/SmallCard";

export type ExploreData = {
	img: string;
	location: string;
	distance: string;
};

interface Props {
	exploreData: ExploreData[];
}

const Home: FC<Props> = ({ exploreData }) => {
	return (
		<div>
			<Head>
				<title>Airbnb - Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16 mt-6">
				<section>
					<h2 className="text-3xl sm:text-4xl font-semibold pb-5">Explore Nearby</h2>
					{/* Pull some data from API */}
					{exploreData?.map(({ distance, img, location }) => (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<SmallCard key={img} distance={distance} location={location} img={img} />
						</div>
					))}
				</section>
			</main>
		</div>
	);
};
export default Home;

export async function getStaticProps() {
	const exploreData: ExploreData = await fetch("https://links.papareact.com/pyp").then((res) =>
		res.json(),
	);

	return {
		props: {
			exploreData,
		},
	};
}
