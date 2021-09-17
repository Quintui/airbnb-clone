import React, { FC } from "react";
import { ExploreData } from "../pages";
import Image from "next/image";

export const SmallCard: FC<ExploreData> = ({ distance, img, location }) => {
	return (
		<div className="flex items-center space-x-4 m-3">
			<div className="relative h-16 w-16 flex ">
				<Image src={img} objectFit={"cover"} layout="fill" className="rounded-lg " />
			</div>
			<div>
				<h5>{location}</h5>
				<h6>{distance}</h6>
			</div>
		</div>
	);
};
