import { format } from "date-fns";
import { NextRouter, useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { InfoCard } from "../components/InfoCard";

export type SearchResultType = {
	img: string;
	location: string;
	title: string;
	description: string;
	star: number;
	price: string;
	total: string;
	long: number;
	lat: number;
};

type QueryOptions = {
	location: string;
	startDate: string;
	endDate: string;
	noOfGuests: string;
};

interface Props {
	searchResult: SearchResultType[];
}

const Search: FC<Props> = ({ searchResult }) => {
	const router = useRouter();
	const { endDate, startDate, noOfGuests, location } = router.query as QueryOptions;

	const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yyyy");
	const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yyyy");
	const daysRange = `${formattedStartDate} - ${formattedEndDate}`;
	return (
		<div>
			<Header placeholder={`${location} | ${daysRange} | ${noOfGuests} guests`} />
			<main className="my-10 mx-6">
				<section>
					<p className="text-xs text-gray-400 mb-3">
						300+ stays - {daysRange} for {noOfGuests} {noOfGuests === "1" ? "guest" : "guests"}
					</p>
					<h1 className="text-2xl font-semibold mb-5">Stays in {location}</h1>
				</section>
				<div className=" hidden md:inline-flex space-x-4 mb-8">
					<button className="button">Cancellation Flexibility</button>
					<button className="button"> Type of place</button>
					<button className="button"> Price</button>
					<button className="button">Room and Beds</button>
					<button className="button">More Filters</button>
				</div>

				<div>
					{searchResult?.map((item) => (
						<InfoCard {...item} key={item.img} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};
export default Search;

export async function getServerSideProps() {
	const searchResult: SearchResultType[] = await fetch("https://links.papareact.com/isz").then(
		(res) => res.json(),
	);

	return {
		props: {
			searchResult,
		},
	};
}
