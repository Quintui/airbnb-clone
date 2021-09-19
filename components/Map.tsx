import { HomeIcon, StarIcon } from "@heroicons/react/solid";
import { getCenter } from "geolib";
import React, { FC, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { SearchResultType } from "../pages/search";
import Image from "next/image";
interface Props {
	searchResult: SearchResultType[];
}

type CenterOfCoordinatesType = {
	latitude: number;
	longitude: number;
};
export const MapComponent: FC<Props> = ({ searchResult }) => {
	const [selectedMarker, setSelectedMarker] = useState<SearchResultType | null>(null);
	const centerOfCoordinates: CenterOfCoordinatesType | false = getCenter(
		searchResult.map((item) => ({
			latitude: item.lat,
			longitude: item.long,
		})),
	);

	const [viewport, setViewPort] = useState({
		width: "100%",
		height: "100%",
		latitude: centerOfCoordinates && centerOfCoordinates.latitude,
		longitude: centerOfCoordinates && centerOfCoordinates.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/quintdev/cktq5j4tg2voq17p6bnj97dmm"
			mapboxApiAccessToken={process.env.mapBoxPublicKey}
			className="rounded-lg"
			{...viewport}
			onViewportChange={setViewPort}>
			{searchResult.map((result) => (
				<div key={result.img} className="flex flex-column items-center">
					<Marker offsetLeft={-20} latitude={result.lat} longitude={result.long}>
						<div
							onClick={() => setSelectedMarker(result)}
							className="rounded-full cursor-pointer bg-white p-2 ">
							<HomeIcon className="text-black h-6" />
						</div>
					</Marker>
					{result.long === selectedMarker?.long && (
						<Popup
							latitude={result.lat}
							longitude={result.long}
							closeOnClick={true}
							onClose={() => setSelectedMarker(null)}>
							<div className="p-1 flex">
								<div className="relative h-30 w-44">
									<Image src={result.img} layout="fill" objectFit="cover" />
								</div>
								<section className="ml-3 flex flex-col">
									<p>{result.location} </p>
									<h5 className="font-semibold text-lg">{result.title} </h5>
									<p className="text-sm text-gray-400 mb-3">{result.description}</p>
									<div className="flex justify-between">
										<div className="flex items-center">
											<StarIcon className="h-5 text-red-400" />
											<p className="font-semibold ml-1">{result.star}</p>
										</div>

										<div>
											<p className="font-semibold ">{result.price}</p>
											<p className="text-sm text-right font-extralight">{result.total}</p>
										</div>
									</div>
								</section>
							</div>
						</Popup>
					)}
				</div>
			))}
		</ReactMapGL>
	);
};
