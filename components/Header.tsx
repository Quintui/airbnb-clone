import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type RangesType = {
	selection: {
		startDate: Date;
		endDate: Date;
		key: string;
	};
};

export const Header = () => {
	const [inputValue, setInputValue] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [noOfGuests, setNoOfGuests] = useState("1");

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges: RangesType) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
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
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="bg-transparent outline-none pl-3 flex-grow placeholder-grey-400 "
				/>
				<SearchIcon className="hidden md:inline h-8 bg-red-400 md:none rounded-full p-2 mx-2 text-white cursor-pointer" />
			</div>

			{/* Right side */}
			<div className="flex items-center my-auto space-x-4 justify-end text-gray-500">
				<p className="hidden md:inline-flex cursor-pointer hover:bg-gray-100 px-5 py-3 transition duration-150 ease-out rounded-full ">
					Become a host
				</p>
				<GlobeAltIcon className=" hidden md:inline-flex h-6 cursor-pointer" />
				<div className="rounded-full border-2 flex space-x-2 p-2">
					<MenuIcon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>

			{inputValue && (
				<div className="flex flex-col col-span-3 mx-auto mt-5">
					<DateRangePicker
						rangeColors={["#FD5B61"]}
						ranges={[selectionRange]}
						onChange={handleSelect}
					/>

					<div>
						<h2>Number of Guests</h2>
						<input
							type="number"
							value={noOfGuests}
							onChange={(e) => setNoOfGuests(e.target.value)}
							min="1"
						/>
					</div>
				</div>
			)}
		</header>
	);
};
