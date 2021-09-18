import React, { FC } from "react";
import { SearchResultType } from "../pages/search";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
export const InfoCard: FC<SearchResultType> = ({
	description,
	lat,
	img,
	location,
	long,
	price,
	star,
	total,
	title,
}) => {
	return (
		<section className="flex border-b py-7 px-4 rounded-md cursor-pointer hover:opacity-95 hover:shadow-lg transition duration-250 first:border-t ">
			<div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
				<Image src={img} objectFit="cover" layout="fill" className="rounded-xl" />
			</div>
			<div className=" ml-4 flex flex-col flex-grow">
				<div className="flex-grow ">
					<div className="flex justify-between">
						<p>{location}</p>
						<HeartIcon className="h-7" />
					</div>
					<h4 className="text-xl mb-3 font-semibold">{title}</h4>
					<p className="text-md text-gray-400">{description}</p>
				</div>
				<div className="flex justify-between ">
					<div className="flex items-center">
						<StarIcon className="h-6 text-red-400 mr-1" />
						<p className="font-semibold">{star}</p>
					</div>
					<div>
						<p className="sm:text-md md:text-lg font-semibold ">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
