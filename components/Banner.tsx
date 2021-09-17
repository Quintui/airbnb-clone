import Image from "next/image";

export const Banner = () => {
	return (
		<div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]">
			<Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />
			<div className="absolute font-semibold top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg ">Not sure where to go? Perfect.</p>
				<button className="text-purple-500 shadow-md  my-3 bg-white rounded-full py-4 px-10 font-bold hover:shadow-lg active:scale-90 transition duration-150 ">
					I'm flexible
				</button>
			</div>
		</div>
	);
};
