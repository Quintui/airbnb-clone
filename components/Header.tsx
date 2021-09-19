import Image from "next/image";
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";
import { useState, FC } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/dist/client/router";

type RangesType = {
	selection: {
		startDate: Date;
		endDate: Date;
		key: string;
	};
};

interface Props {
	placeholder?: string;
}

export const Header: FC<Props> = ({ placeholder }) => {
	const [inputValue, setInputValue] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [noOfGuests, setNoOfGuests] = useState("1");
	const router = useRouter();

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges: RangesType) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const search = () => {
		if (inputValue) {
			router.push({
				pathname: "search",
				query: {
					startDate: startDate.toString(),
					endDate: endDate.toString(),
					location: inputValue,
					noOfGuests,
				},
			});
		} else {
			return;
		}
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-2 sm:grid-cols-3 bg-white shadow-md p-5 ">
			{/* Left side */}
			<div className="hidden relative h-10 sm:flex items-center  my-auto ">
				<Image
					className="cursor-pointer"
					onClick={() => router.push("/")}
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
					placeholder={placeholder || "Start your search"}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="bg-transparent outline-none pl-6 flex-grow placeholder-grey-400 "
				/>
				<SearchIcon
					onClick={search}
					className="hidden md:inline h-8 bg-red-400 md:none rounded-full p-2 mx-2 text-white cursor-pointer"
				/>
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

					<div className="flex justify-between border-b pb-2 mb-3 items-center">
						<h2 className="text-xl font-semibold ml-3">Number of Guests</h2>
						<div className="flex items-center ">
							<UsersIcon className="relative h-5 mr-2 " />
							<input
								className="w-12 outline-none text-red-400"
								type="number"
								value={noOfGuests}
								onChange={(e) => setNoOfGuests(e.target.value)}
								min={1}
							/>
						</div>
					</div>
					<div className="flex">
						<button onClick={() => setInputValue("")} className="text-gray-400 flex-grow">
							Cancel
						</button>
						<button onClick={search} className="text-red-400 flex-grow">
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
};
