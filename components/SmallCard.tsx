import { FC } from "react";
import { ExploreData } from "../pages";
import Image from "next/image";

export const SmallCard: FC<ExploreData> = ({ distance, img, location }) => {
	return (
		<div className="flex items-center space-x-4 m-2 hover:scale-105 hover:bg-gray-100 cursor-pointer rounded-lg transition transform duration-200 ease-out ">
			<div className="relative h-16 w-16 flex ">
				<Image src={img} objectFit={"cover"} layout="fill" className="rounded-lg " />
			</div>
			<div className="font-semibold">
				<h5>{location}</h5>
				<h6 className="text-gray-500">{distance}</h6>
			</div>
		</div>
	);
};
